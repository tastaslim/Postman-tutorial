import { ArithmeticOperations } from './src/ArithmeticOperations';
const a = 18;
const b = 6;
const obj = new ArithmeticOperations(a, b);
const ans1 = obj.getDifference(a, b);
const ans2 = obj.getSum(a, b);
const ans3 = obj.getDivision(a, b);
const ans4 = obj.getProduct(a, b);
console.log(ans1, ans2, ans3, ans4);
