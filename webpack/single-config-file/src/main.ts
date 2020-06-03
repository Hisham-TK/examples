import { IShape, Shape } from "./sub";

interface IPoint {
    x: number;
    y: number
}
export class Point extends Shape implements IPoint {
    constructor(
        public x: number,
        public y: number, hight: number, width: number
    ) {
        super(hight, width)
    }
}

window.onload = () => {
    if (document.getElementById('writeHere')) {
        document.getElementById('writeHere').innerText = 'second hello there';
    } else {
        console.log(new Date().getTime());
        // document.write('Cannot found selected element \n' + new Date().getTime());
        // document.write(JSON.stringify(document));
    }
    console.log({ Point, Shape })
};
