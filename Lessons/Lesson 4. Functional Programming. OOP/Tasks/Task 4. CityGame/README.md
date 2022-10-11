    ### Задание

Реализуйте класс `CityGame` для игры в "города"

### Примеры использования

```
const game = new CityGame('Max', 'Lewis');
game.play('Kazan');             // ['Kazan']
game.play('Novgorod');          // ['Kazan', 'Novgorod']
game.play('Denver');            // ['Kazan', 'Novgorod', 'Denver']
game.play('Paris');             // 'Game over! The winner is Max';

game.restart();                 // 'The game has been restarted!'
game.play('Prague');            // ['Prague']
game.play('Edinburgh');         // ['Prague', 'Edinburgh']
game.play('Kioto');             // 'Game over! The winner is Lewis';
```