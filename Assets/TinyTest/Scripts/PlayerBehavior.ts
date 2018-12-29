
namespace game {

    export class PlayerBehaviorFilter extends ut.EntityFilter {
		entity: ut.Entity;
		move: game.Move;
		groundBool: game.IsGround;
		newColliderContacts: ut.Physics2D.NewColliderContacts;
    }

    export class PlayerBehavior extends ut.ComponentBehaviour {

        data: PlayerBehaviorFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the PlayerBehaviorFilter signature, once when enabled
        //OnEntityEnable():void { }
        
        // this method is called for each entity matching the PlayerBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void { 
			if(!this.data.groundBool.isGround){
				let contacts = this.data.newColliderContacts.contacts;
				if(contacts.length > 0){
					if((this.world.getEntityName(contacts[0]) == "Ground")){
						this.data.groundBool.isGround = true;
					}
				}
			}
			if (ut.Runtime.Input.getMouseButton(0) && this.data.groundBool.isGround) {
				let impulse = new ut.Physics2D.AddImpulse2D;
				impulse.impulse = new Vector2(0, this.data.move.upForce.y);
                this.world.addComponentData(this.data.entity, impulse);
				this.data.groundBool.isGround = false;
            }

		}

        // this method is called for each entity matching the PlayerBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
