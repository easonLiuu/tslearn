type IOperator = 'plus' | 'minus'
//type ICalculator = (operator: IOperator, numbers: number[]) => number
//interface可以描述各式各样的类型 功能强大
interface ICalculator {
    (operator: IOperator, numbers: number[]): number;
    plus: (numbers: number[]) => number;
    minus: (numbers: number[]) => number;
}
declare const calculator: ICalculator

export default calculator;