

//最基本的数据类型就是简单的true/false值，
//在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
//ts 在写基本类型是要先声明类型  

let isDone: boolean = false;

//数字number类型

let decLiteral: number = 6;
//字符串类型

let stName: string = "bob";

//可以使用模板字符串
//例如  ::
let nameS: string = `模板字符串`;
let age: number = 6;

let sentence: string = `${age}`

//数组
let list: number[] = [1, 2, 3];
//元素类型
let list1: Array<number> = [1, 2, 3];

//字符串类型

let liststr: Array<string> = ['1', '2', '3'];


//元组tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
//  比如，你可以定义一对值分别为 string和number类型的元组。


// 例如
let x: [string, number]

x = ["字符串", 12]

// x = [12,"字符串"] 报错


// 当访问一个已知索引的元素，会得到正确的类型：

console.log(x[0].substr(1))

// console.log(x[1].substr(1))   //会报错因为下表一不是string类型没有substr方法所以会报错

x[0] = 'world'; // OK, 字符串可以赋值给(string | number)类型
///当访问一个越界的元素，会使用联合类型替代：

// x[3] = 'world'; //索引'3'在长度为2的元组中是出界的。

x.push("push1")



x.push(...[2,2,2,2,"Sd","WE"])

console.log(x,"这是一个元组")


//枚举
// enum类型是对JavaScript标准数据类型的一个补充。 
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

// 默认情况下，从0开始为元素编号。
//  你也可以手动的指定成员的数值。
//   例如，我们将上面的例子改成从 1开始编号：
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
enum Color {Red = 1, Green = "26543sdfg", Blue = 4}
let c: Color = Color.Green;

console.log(c)


let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.