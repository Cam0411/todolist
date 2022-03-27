
const search = document.querySelector(".src__box")
const add = document.querySelector(".plus")
const todo = document.querySelector(".list__box")
const clearAll = document.querySelector(".clearall")
add.style.opacity = 0.6
var value = 0
search.addEventListener("keyup",() => {
    const data = search.value
    if(data.trim() != 0){
        add.style.opacity = 1
    }else 
    {
        add.style.opacity = 0.6
    }
})
window.addEventListener("keypress",event => {
    
    if (event.keyCode == 13){
        const data = search.value
        if (!data == ''){
            const getlocal = localStorage.getItem('new todo')
            if (getlocal == null){
                listArr = []
            }else {
             listArr = JSON.parse(getlocal)
            }
            listArr.push(data)
            localStorage.setItem('new todo',JSON.stringify(listArr))
            showdata()
            search.value = ''
        }
     
    }
})
add.addEventListener("click", () => {
    const data = search.value
    if (!data == ''){
        const getlocal = localStorage.getItem('new todo')
        if (getlocal == null){
            listArr = []
        }else {
         listArr = JSON.parse(getlocal)
        }
        listArr.push(data)
        localStorage.setItem('new todo',JSON.stringify(listArr))
        showdata()
    }
})

function showdata(){
    const getlocal = localStorage.getItem('new todo')
    if (getlocal == null){
        listArr = []
    }else {
     listArr = JSON.parse(getlocal)
    }

    let newtag = ''
    listArr.forEach((element,index) => {
        newtag += `<li><p class="list">${element}</p><span onclick="deletedata(${index})"><i class="fa-solid fa-trash-can"></i></span></li>`
    });
    todo.innerHTML = newtag
    search.value = ''
}
showdata()

function deletedata(index){
    const getlocal = localStorage.getItem('new todo')
    listArr = JSON.parse(getlocal)
    listArr.splice(index, 1)
    localStorage.setItem('new todo',JSON.stringify(listArr))
    showdata()
}







