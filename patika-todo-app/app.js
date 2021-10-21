
// add 'close' button to items
const list = document.getElementById('list');
const liDoms = document.querySelectorAll("li")
liDoms.forEach(item => {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);

})

// del items
const close = document.querySelectorAll("span.close");
close.forEach(item => {
    item.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })
})

// add checked feature
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


// const liveToastBtn = document.getElementById('liveToastBtn');

const task = document.getElementById('task');
function newElement() {

    // console.log(task.value)
    if (task.value !== "") {
        let li = document.createElement("li");
        let t = document.createTextNode(task.value);
        li.appendChild(t);

        list.appendChild(li)

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        
        

    } else {
        alert("Please select..")
    }

    // del items
    const close = document.querySelectorAll("span.close");
    close.forEach(item => {
        item.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })
    })

    task.value = "";
}

