
namespace game {

    export class DreamBehaviorFilter extends ut.EntityFilter {
		dream: game.Dream;
    }

    export class DreamBehavior extends ut.ComponentBehaviour {

        data: DreamBehaviorFilter;
		num:number=0;
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the DreamBehaviorFilter signature, once when enabled
        OnEntityEnable():void { 
		}
        
        // this method is called for each entity matching the DreamBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void {
			if(ut.Runtime.Input.getMouseButton(0)&&this.data.dream.isDream){
				document.write("<script>location.href = 'https://goodnightdream.cf';</script>");
			}
			this.num+=ut.Time.deltaTime();
			if(this.num>5){
				this.data.dream.isDream=true;
			}
		}	

        // this method is called for each entity matching the DreamBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
