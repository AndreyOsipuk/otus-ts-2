/**
 * TODO 1: Write an function that calculates total expenses"
 * 1. takes single paramter, array of objects with "name:string" and "expense:number"
 * 2. returns a single value total price
 */

/**
 * TODO 2: Write an function that calculates total expense grouped by date (year&month)"
 * 1. takes single paramter, array of objects with "name:string", "date:Date" and "expense:number"
 * 2. returns an array of tuples of type "[date, totalExpenses]"
 */
import data from "./data.json";

const date = new Date(data[2].date);
console.log(data[0].date, date, date.getFullYear(), date.getMonth());
