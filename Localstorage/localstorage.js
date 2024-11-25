function store(){
    var name = document.getElementById("name").value
    var adress = document.getElementById("adress").value
    var key = document.getElementById("key").value

    const person ={
        name: name,
        adress: adress
    }
    window.localStorage.setItem(key,JSON.stringify(person))
}

function show(){
    var key = document.getElementById("hakukey").value
    var records = window.localStorage.getItem(key)
    var paragraph = document.createElement("p")
    var infor = document.createTextNode(records)
    paragraph.appendChild(infor)
    var element = document.getElementById("retrieve")
    element.appendChild(paragraph)
}
function remove(){ 
    var key = document.getElementById('remove').value
    localStorage.removeItem(key) 
}
function removeall(){
    localStorage.clear()
}