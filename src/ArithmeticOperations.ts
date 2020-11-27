// console.log(
// 	'If there are many problems in javascript, then why are we still using it. Because of the browsers only understand javascript.\n'
// );
import { IarithmeticOperations } from '../interfaces/IarithmeticOperations';
export class ArithmeticOperations implements IarithmeticOperations {
	private a: number;
	private b: number;

	constructor(a: number, b: number) {
		this.a = a;
		this.b = b;
	}

	getter(): string {
		return `a = ${this.a} \nb = ${this.b}\n`;
	}

	getSum(a: number, b: number): number {
		return a + b;
	}
	getDifference(a: number, b: number): number {
		return a - b;
	}
	getProduct(a: number, b: number): number {
		return a * b;
	}
	getDivision(a: number, b: number): number {
		return a / b;
	}
}
