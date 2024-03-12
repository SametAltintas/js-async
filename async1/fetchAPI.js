console.log("FETCH");
// fetch("https://api.github.com/users").then((res)=>{
//     console.log(res)
//     console.log(res.ok)
//     console.log(res.status)
//     return res
// }).then((res)=>res.json())
fetch("https://api.github.com/users")
    .then((res)=>res.json())
    .then((data)=>console.log(data))