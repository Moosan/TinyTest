
namespace game {

    export class AkeomeBehaviorFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        localRottion?: ut.Core2D.TransformLocalRotation;
		akeome: game.Akeome;
    }

    export class AkeomeBehavior extends ut.ComponentBehaviour {

        data: AkeomeBehaviorFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the AkeomeBehaviorFilter signature, once when enabled
        //OnEntityEnable():void { }
        
        // this method is called for each entity matching the AkeomeBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void {
			let rotation = this.data.localRottion.rotation;
			if(rotation.y == 0.0)return;
			let speed = this.data.akeome.speed;
			rotation.y += speed;
			if(rotation.y >= 0.0){
				rotation.y = 0.0;
			}
		}

        // this method is called for each entity matching the AkeomeBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
