const btn2 = document.querySelector("button")
btn.addEventListener( "click" , () => {
    const requestwer = new XMLHttpRequest();
    requestwer.open("GET", "js.json");
    requestwer.setRequestHeader("content-type" ,"application/json")
    requestwer.send()
    requestwer.addEventListener("load", () => {
        console.log(JSON.parse(requestwer.response))
        const datar = JSON.parse(requestwer.response)
        document.querySelector(".street").innerHTML = datar.street
        document.querySelector(".location").innerHTML = datar.location
        document.querySelector(".state").innerHTML = datar.state
    })
})