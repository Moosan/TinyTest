
namespace game {

    /** New System */
    export class SetDreamSystem extends ut.ComponentSystem {
        OnUpdate():void {
			this.world.forEach([game.SetDream],(button)=>{
				if(ut.Runtime.Input.getMouseButton(0)){
					game.GameManager.SetDream(this.world);
				}
			});
        }
    }
}
