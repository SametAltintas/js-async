console.log("FETCH");
// fetch("https://api.github.com/users").then((res)=>{
//     console.log(res)
//     if (!res.ok) {
//         throw new Error(`Hata: ${res.status}`)
//     }
//     console.log(res.ok)
//     console.log(res.status)
//     return res
// }).then((res)=>res.json())
// fetch("https://api.github.com/users")
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//     .catch((err)=> console.log(err))
let veri = "";
fetch("https://api.github.com/users")
    .then((res) => {
        console.log(res);
        if (!res.ok) {
            throw new Error(`Hata: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        veri = data;
        show(veri);
    })
    .catch((err) => document.write(err));

const show = (users) => {
    const userSection = document.getElementById("users");
    users.forEach((user) => {
        userSection.innerHTML += `
            <h1>${user.login}</h1>
            <img src="${user.avatar_url}" alt=""/>
        `;
    });
};
