
namespace game {

    export class MoneyManager {
        private static defaText: string = '000Yen';
        static money: number = 0;
        static GetMoney(world: ut.World){
			MoneyManager.money += 1;
			world.forEach([ut.Text.Text2DRenderer,game.MoneyUI],
                (renderer, ui) => {
					renderer.text = String(MoneyManager.money) + MoneyManager.defaText;
				});
		}
		
    }
}
