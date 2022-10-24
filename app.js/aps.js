const btn3 = document.querySelector("button")
btn.addEventListener( "click" , () => {
    const requestser = new XMLHttpRequest();
    requestser.open("GET", "dat.json");
    requestser.setRequestHeader("content-type" ,"application/json")
    requestser.send()
    requestser.addEventListener("load", () => {
        console.log(JSON.parse(requestser.response))
        const datab = JSON.parse(requestser.response)
        document.querySelector(".nams").innerHTML = datab.name
        document.querySelector(".agew").innerHTML = datab.age
        document.querySelector(".male").innerHTML = datab.male
    })
})
