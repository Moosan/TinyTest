
namespace game {

    export class ScrollBackgroundBehaviorFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
		scrolling: game.ScrollBackground;
    }

    export class ScrollBackgroundBehavior extends ut.ComponentBehaviour {

        data: ScrollBackgroundBehaviorFilter;
		isStart: boolean;
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the ScrollBackgroundBehaviorFilter signature, once when enabled
        OnEntityEnable():void {
			this.isStart = false;
		}
        
        // this method is called for each entity matching the ScrollBackgroundBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void {
			if(!this.isStart){
				if(!ut.Runtime.Input.getMouseButton(0))return;
				this.isStart = true;
			}
			let position = this.data.position;
			let scrolling = this.data.scrolling;

			let localPosition = position.position;
				
			localPosition.x -= scrolling.speed * 0.01;
				
			if (localPosition.x < scrolling.threshold) 
				localPosition.x += scrolling.distance;
				
			position.position = localPosition;
		}

        // this method is called for each entity matching the ScrollBackgroundBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
