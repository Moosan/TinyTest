namespace game {
    export class CollisionSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Otosidama], (entity, hitResult, tag) => 
			{
				this.world.destroyEntity(entity);
			});
        }
    }
}
