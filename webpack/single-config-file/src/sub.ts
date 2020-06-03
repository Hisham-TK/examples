export interface IShape {
    hight: number, width: number
}
export class Shape implements IShape {
    constructor(
        public hight: number,
        public width: number) {

    }
}
