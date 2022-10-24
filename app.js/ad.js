const btn4 = document.querySelector("button")
btn4.addEventListener( "click" , () => {
    const requestver = new XMLHttpRequest();
    requestver.open("GET", "ASD.json");
    requestver.setRequestHeader("content-type" ,"application/json")
    requestver.send()
    requestver.addEventListener("load", () => {
        console.log(JSON.parse(requestver.response))
        const dataw = JSON.parse(requestver.response)
        document.querySelector(".model").innerHTML = dataw.model
        document.querySelector(".dress").innerHTML = dataw.dress
        document.querySelector(".hair").innerHTML = dataw.hair
    })
})
