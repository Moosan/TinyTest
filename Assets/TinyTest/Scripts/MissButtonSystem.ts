namespace game {

    /** New System */
    export class MissButtonSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
			this.world.forEach([game.MissButton],(button)=>{
				if(ut.Runtime.Input.getMouseButton(0)){
					game.GameManager.EndGame(this.world);
				}
			});
        }
    }
}
