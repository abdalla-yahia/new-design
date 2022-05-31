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
    /*############################# Start Contact Page ############*/

/* Start Contact Page*/ 
let list = document.querySelectorAll(".parent .bef-tex");
let backG = document.querySelector(".parent");
let spa = document.querySelector(".parent .contact");

list.forEach(function (ele) {
    ele.addEventListener("mouseenter", function (e) {
        
        let color = e.target.getAttribute("data-color");
        backG.style.backgroundColor = color;
        backG.style.backgroundImage = color;
        list.forEach(function (el) {
            el.style.cssText ="visibility: hidden;"
            spa.style.visibility ="hidden"
        })
        this.style.cssText ="visibility:visable;"
        
    })
    
    ele.addEventListener("mouseleave", function () {
        backG.style.backgroundColor = "#EEE";
        list.forEach(function (el) {
            el.style.visibility ="visible"
            spa.style.visibility = "visible"
             backG.style.backgroundImage = "none";
        })
    })
})



	VanillaTilt.init(document.querySelectorAll(".bef-tex li"), {
		max: 30,
        speed: 400,
        glare: true,
        "max-glare":3,
	});

    /*End Contact Page */
/*############################# End Contact Page ############*/


