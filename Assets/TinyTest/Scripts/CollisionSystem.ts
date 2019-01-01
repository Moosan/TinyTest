namespace game {
    export class CollisionSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults,game.Otosidama], (entity, hitResult,otosi) => 
			{
				for (let i = 0; i < hitResult.overlaps.length; i++) {
					let otherEntity = hitResult.overlaps[i].otherEntity;
					if((this.world.getEntityName(otherEntity) == "Player")){
						game.MoneyManager.GetMoney(this.world);
						this.world.destroyEntity(entity);
					}
				}
			});
			this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults,game.Taka], (entity, hitResult,taka) => 
			{
				for (let i = 0; i < hitResult.overlaps.length; i++) {
					let otherEntity = hitResult.overlaps[i].otherEntity;
					if((this.world.getEntityName(otherEntity) == "Player")){
						game.GameManager.StopGame(this.world);
					}
				}
			});
        }
    }
}
