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
		max: 10,
        speed: 100,
        glare: true,
        "max-glare":3,
	});

    /*End Contact Page */
/*############################# End Contact Page ############*/
/*############################# Start Our Store Page ############*/

let netPrice = document.querySelectorAll(".new-row .the-price-of-buy");
let netCount = document.querySelectorAll(".new-row .the-count-of-buy");
let totalPrice = document.querySelectorAll(".new-row .total-price-buy");
let newOperation = document.querySelector(".new-operation");
let formOperation = document.querySelector(".form-operation");
let operationDone = document.querySelector(".operation-done");

let dateOperation = document.querySelector(".form-operation input[type='datetime']");
let theCountOperation = document.querySelector(".form-operation .the-count-operation");
let thePriceOperation = document.querySelector(".form-operation .the-price-operation");

let tableBody = document.querySelector(".table-body");
let Form = document.querySelector(".form-operation");

Form.addEventListener("submit", function (e) {
    e.preventDefault();

})

newOperation.onclick = function () {
    this.classList.toggle("active")
    
    visForm(); 
}
function visForm() {
    if (newOperation.classList.contains("active")) {
        formOperation.style.visibility = "hidden";
    }
    else
        formOperation.style.visibility = "visible";
}





operationDone.addEventListener("click", function () {
    if (dateOperation.value !== "" && thePriceOperation.value !== "" && theCountOperation.value !== "") {
        creatNewRow()
        thePriceOperation.value = "";
        theCountOperation.value = "";
    }
    else console.log("faild to  append row")
})


for (let i = 0; i < netCount.length; i++){
totalPrice[i].innerHTML = netCount[i].innerHTML * netPrice[i].innerHTML
}

function creatNewRow() {

    let trNew = document.createElement("tr");
    trNew.className = "new-row";
    
    let tdOne = document.createElement("td");
    tdOne.className = "the-date-of-buy";


    let tdTwo = document.createElement("td");
    tdTwo.className = "the-count-of-buy";
    
    let tdThree = document.createElement("td");
    tdThree.className = "the-price-of-buy";
    
    let tdFour = document.createElement("td");
    tdFour.className = "total-price-buy";

    
    trNew.appendChild(tdOne);
    trNew.appendChild(tdTwo);
    trNew.appendChild(tdThree);
    trNew.appendChild(tdFour);

    tableBody.appendChild(trNew)

    tdOne.innerHTML = dateOperation.value;
    tdTwo.innerHTML = theCountOperation.value;
    tdThree.innerHTML = thePriceOperation.value;
    tdFour.innerHTML = tdTwo.innerHTML *  tdThree.innerHTML  ;
}



/*############################# End Our Store Page ############*/
    /*
    
        <tr class="new-row">
                                <td class="the-date-of-buy">15-2-2022</td>
                                <td class="the-count-of-buy">1000</td>
                                <td class="the-price-of-buy">16</td>
                                <td class="total-price-buy"></td>
                            </tr> 
                            
                            */

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