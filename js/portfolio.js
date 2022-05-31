/*############################# Start Scroll Button ###########*/
let scrollButton = document.querySelector(".scroll-button");
scrollButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

window.onscroll = (function () {
    if (window.scrollY >= 500) {

        scrollButton.style.display = "block"
    }
    else 
        scrollButton.style.display = "none"
    })
    /*############################# End Scroll Button ###########*/


/*############################# Start Portfolio Page ############*/

/*Start add active class to list  */

var listOurWork = document.querySelectorAll(".list-our-work");
console.log(listOurWork)
listOurWork.forEach(function (e) {
    e.onclick = function () {
        listOurWork.forEach(function (el) {
            el.classList.remove("active");
        })
        this.classList.add("active")
    }
})
/*End add active class to list  */
/*############################# End Portfolio Page ############*/