// ES6
let button = document.querySelector(".button")
let container = document.querySelector(".container")

const getPost =()=>{

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    
        .then((data)=>(container.innerText= data.title))
    
}
button.addEventListener("click",getPost)
// console.log(button)
// console.log(this)
// button.addEventListener("click", ()=>{
// console.log(this)
// })
// default params
// function add(num1,num2){
//     return num1+num2
// }
// add(5,2)//return 7
// add(3)//return 13 as num2 has default value = 10 if num2=10

//template string
// let name ="hamal";
// let myrole = "developer"
// console.log(`${name} `)

// array destructuring
// let array = ["hamal","develper"]
// const [myname,myrole]= array
// console.log(myname)

// object destructuring
// let obj = { name:hamal}
// const {name}= obj;
// console.log(name)


// ...spread


// const myva ={
//     name : "hamal",
//     model : "mustang",
//     color: "red"
// }
// const up ={
//     type : "kkah",
//     year : 2939,
//     color: "yellow"
// }
// let copyvaiabale = {...myva,...up}
// console.log(copyvaiabale)

// /  rest

// function sum(...args){
//     console.log(args,"args")
//     let total = 0;
//     for(const arg of args){
//         total += arg;
//     }
//     return total;
// }
// console.log(sum(1,3,4))

