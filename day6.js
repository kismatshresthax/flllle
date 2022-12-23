let object = {
  person1: "kismat shrestha",
  person2: "hamal shrestha",
  age: 14

}
// if(object.person1=="kismat shrestha"){
//     console.log(object.person1)
// }else{
// alert("error")
// }'
// if(object.age<=24){
//     console.log(object.person1)
// }else{
//     alert(error)
// }
// if(object.person1=="kismat shrestha" && object.age<=24){
//     console.log(object.person1)
// }else{
//     alert('error')
// }
// if(object.person1=="hamla shrestha" || object.age<=24){
//     console.log(object.person1)
// }else{
//     alert('error')
// }
// if(object.age>24){
//     console.log(object.person1)
// }else if(object.age<24){
//     console.log(object.person2)
// }else{
//     alert(error)
// // }
// function add(a,b){
//     c= a+b
//     return c

// }
// add(40+50)
// function obj(a,b){
//     c=a*b;
//     return alert(c)
// }
// obj(20,5)
// function tpl(){
//     let a=40;
//     let b=34;
//     if(a>b){
//         console.log("enter the value"+ a)

//     }

// }
// tpl()
let result
let operator = prompt("enter operator (+,-,*,/)")
let num1 = parseInt(prompt("enter the first value"))
let num2 = parseInt(prompt("enter the second value"))
switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(`${num1} +${num2}=${result}`)

    break;
  case "-":
    result = num1 - num2;
    console.log(`${num1} -${num2}=${result}`)

    break;
  case "*":
    result = num1 * num2;
    console.log(`${num1} *${num2}=${result}`)

    break; case "/":
    result = num1 / num2;
    console.log(`${num1} /${num2}=${result}`)

    break;


}
