// function addtocart(){
// alert("Your Product Is Added On Cart Item");
// window.location.href='../checkout.html';
// }

// Order form handle karne ke liye
const orderForm = document.getElementById('mainOrderForm');

if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Page refresh nahi hone dega

        // User ka naam lena alert ke liye
        const name = document.getElementById('custName').value;
        
    const Address=document.getElementById('custAddress').value;

    
    localStorage.setItem("username", name);
    localStorage.setItem("useraddress",Address);

    sessionStorage.setItem("username",name);
    sessionStorage.setItem("useraddress",Address);

        // Final Alert
        alert("Success! " + name + ", your order has placed, Thank you");

        
        window.location.href = "index.html"; 

    });
}

// var searchproduct=document.getElementById('search')

// var Product=document.querySelectorAll("#productlist li");
// searchproduct.addEventListener("keyup", function () {
//     let searchvalue = searchproduct.value.toLowerCase();
//       product.forEach(function (item) {
//         var text = item.textContent.toLowerCase()
//          if (text.includes(searchvalue)) {
//            item.style.display = "list-item";
//         }
//          })

// })