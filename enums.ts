//加了const就是常量枚举
const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

console.log(Direction.Up);  //0
//console.log(Direction[0]);  //Up

const value = 'UP'
if (value === Direction.Up) {
    console.log('go up'); 
}

