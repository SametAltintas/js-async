console.log("promise");
const req = new Promise((resolve,reject)=>{
    const veri = {name: "ahmet", surname: "can"}//?mock data(gelen veri)
    const basarili = Math.floor(Math.random() * 10)//?0 1 2 3....9
    console.log(basarili);
    if (basarili) {
        resolve(veri);
    } else {
        reject("network hatası olustu")
    }
})
req
    .then((res)=>{
        console.log(res);
        return res;
    })
    .then((x)=>console.log(x.name))
    .catch((err)=> document.write(err))
    .finally(()=> console.log("her turlu calisir"));
