
namespace game {

    export class GameManager{
        static EndGame(world: ut.World) {
            ut.EntityGroup.destroyAll(world, 'game.MainGroup');
            ut.EntityGroup.destroyAll(world, 'game.OkaneView');
            ut.EntityGroup.destroyAll(world, 'game.OtosidamaGroup');
            ut.EntityGroup.destroyAll(world, 'game.TakaGroup');
            ut.EntityGroup.destroyAll(world, 'game.Oops');
            ut.EntityGroup.instantiate(world, 'game.End');
        };
		static StopGame(world:ut.World){
			world.forEach([game.MoveSpeed],(speed)=>{
				speed.speed = 0;
			})
			world.forEach([game.ScrollBackground],(speed)=>{
				speed.speed = 0;
			})
			world.forEach([game.Spawner],(spawner)=>{
				spawner.isPaused = true;
			})
            ut.EntityGroup.instantiate(world, 'game.Oops');
		}
		static SetDream(world:ut.World){
            ut.EntityGroup.instantiate(world, 'game.DreamGroup');
		}
    }
}
