

/*Start Home Page */
VanillaTilt.init(document.querySelectorAll(".main-plane"), {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare":.5,
});
/*############################# Start Scroll Button ###########*/
let scrollButton = document.querySelector(".scroll-button");
scrollButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

window.addEventListener("scroll",function () {
    if (window.scrollY >= 500) {

        scrollButton.style.display = "block"
    }
    else 
        scrollButton.style.display = "none"
    })
    /*############################# End Scroll Button ###########*/
/*Start add active class to list  */

let listOurWork = document.querySelectorAll(".list-our-work");
listOurWork.forEach(function (e) {
    e.onclick = function () {
        listOurWork.forEach(function (el) {
            el.classList.remove("active");
        })
        this.classList.add("active")
    }
})
/*End add active class to list  */

/*Start Counter Statistics*/
let counter = document.querySelectorAll(".counter");
let arr = [7495, 25595, 100635, 4500];
let Statistics = document.querySelector(".Statistics").offsetTop;
window.addEventListener("scroll",function () {
    if (window.scrollY >= Statistics) {

        addcounter()
    }
})

function addcounter() {
    setInterval(function () {
        for (let i = 0; i < 4; i++) {
            if (counter[i].innerHTML < arr[i]) {
                counter[i].innerHTML -= -100
            }
        }
    })
}


let counter2 = document.querySelectorAll(".progress-bar");
let arr2 = [97, 80, 75, 95,65];
let ourSkills = document.querySelector(".our-skills").offsetTop;


window.addEventListener("scroll",function () {
    if (window.scrollY >= ourSkills) {
         addcounter2()
    }
})

function addcounter2() {
    for (let i = 0; i < 5; i++) {
        let count = 0;

        
        setInterval(function () {
            count += 1;
            if (count <= arr2[i]) {
             counter2[i].style.width = `${count}%`
            counter2[i].innerHTML = counter2[i].style.width;
                        
                    }else
                    
                    clearInterval(2)
    })
        }
    }

/*End Counter Statistics*/
/*End Home Page */

document.querySelector(".main-btn").addEventListener("mouseenter", function (e) {
    let span = document.createElement("span");
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    span.style.left = x+"px";
    span.style.top = y + "px";
    span.classList.add("spa")
    this.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 1000);
})