// const data = [
//     { food: { name: "pizza", id: 2 }, qty: 1 },
//     { food: { name: "momo", id: 3 }, qty: 5 },
//     { food: { name: "pizza", id: 2 }, qty: 9 },
// ];
// const reducedData = (arr) => {
//     const filteredArr = arr.filter((obj) => {
//         return obj.food.id === 2;
//     });

// const { resolve } = require("npa");

//     const qty = filteredArr.reduce((acc, obj) => {
//         return acc + obj.qty;
//     }, 0);  




//     const newData = [filteredArr[0]].map((curentvalue) => {
        


//         return { name: curentvalue.food.name, qty: qty };
//     }, []);
//     return newData;
// };

// hello my name (reducedData(data));


// DOM
// console.log(document)
// console.log(document.getElementById("div").innerHTML="hello my name is kismat shrestha")
// console.log(document.getElementsByClassName("kiii"))


// try catch syntax
// let x=0;
// try {
//     if(x===1){
//         console.log("i am error")
//     }else{
//         throw "error in test";// throw  pass the operator to catch function

//     }
// } catch(error) {
//     console.log(error,"")
// }



//promise 
// let promise = new Promise(function(resolve,reject){
//     // code execution (may take some time)
//     resolve();//when successful
//     reject()//when error
// })
// //'consuming code' (must wait for a fulfilled promise)
// promise.then(
//     function(value){
//         console.log(value,"value")
//         // code if succssful
//     },function(error){
//         console.log(error,"error")
//         // code if some error

//     })

// let x= 1;
// let promise1 = new Promise((resolve,reject) =>{
//     if(x===0){
//         resolve("hello i am resolved")
//     }else{
//         reject("error")
//     }
// } )
// console.log(promise)
//  let k = document.querySelector("div")
//  k.style.backgroundColor = "red";
//  k.innerHTML = "hi my name is kismat shrestha what about you"
//  let h1 = document.createElement("h1");
//  h1.innerText = "hello my "
//  console.log(h1)

//  appendchild
// document.body.appendChild(h1)
// let header = document.createElement(")
// header.innerText="hello world"
// document.head.appendChild(body)
 

