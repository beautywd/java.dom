let a= document.getElementById("txt")
let c= document.getElementById("txt2")
let b = document.getElementById("para")

let add = ()=> {
    let sum= parseInt(a.value)*parseInt(c.value)
    console.log(a.value);
    b.innerText=sum
}