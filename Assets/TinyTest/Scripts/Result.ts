
namespace game {

    export class ResultFilter extends ut.EntityFilter {
		renderer: ut.Text.Text2DRenderer;
		result: game.ResultText;
    }

    export class Result extends ut.ComponentBehaviour {

        data: ResultFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the ResultFilter signature, once when enabled
        OnEntityEnable():void { 
			this.data.renderer.text = "Result:"+String(game.MoneyManager.money)+"000Yen";
		}
        
        // this method is called for each entity matching the ResultFilter signature, every frame it's enabled
        //OnEntityUpdate():void { }

        // this method is called for each entity matching the ResultFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
