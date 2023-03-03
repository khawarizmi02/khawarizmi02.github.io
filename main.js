let modal = document.getElementById("product-modal");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Add click listener to the parent element of all BuyNow buttons
document.getElementById('product-list2').addEventListener('click', function(event) {
    // Check if the clicked element is a BuyNow button
    if (event.target.classList.contains('buy-now')) {
        // Get the product ID from the data attribute
        let productId = event.target.getAttribute('data-product-id');

        // Set the title and description of the modal based on the product ID
        let title = document.getElementById('product-modal-title');
        let description = document.getElementById('product-modal-description');
        switch (productId) {
            case '1':
                title.innerText = 'Product 1';
                description.innerText = 'Description of Product 1';
                break;
            case '2':
                title.innerText = 'Product 2';
                description.innerText = 'Description of Product 2';
                break;
            case '3':
                title.innerText = 'Product 3';
                description.innerText = 'Description of Product 3';
                break;
            default:
                title.innerText = '';
                description.innerText = '';
        }

        // Show the modal
        modal.style.display = "block";
    }
});
// Array of image URLs to cycle through
const productImages = [
    ["image/me-customer.jpg",
    "image/balang.jpeg",
    "image/balang2.jpeg"],
    ["image/masjid2.jpg",
    "image/hagia-sophia.jpg",
    "image/kaabah.jpg"],
    ["image/masjid3.jpg",
    "image/grand-mosque.jpg",
    "image/masjid4.jpg"],
    ["image/masjid4.jpg",
    "image/brown-mosque.jpg",
    "image/masjid2.jpg"]];


const productImgElement = [
    document.getElementById("product-img-1"),
    document.getElementById("product-img-2"),
    document.getElementById("product-img-3"),
    document.getElementById("product-img-4")];

let currentProductImageIndex = [0,0,0,0];
let getIntervalID = setInterval(function() {
    for (let i = 0 ; i < productImgElement.length ; i++){
        currentProductImageIndex[i]++;
        if (currentProductImageIndex[i] >= productImages[i].length){
            setTimeout(function(){
                currentProductImageIndex[i]=0;
            },500*(i+1));
        }
    productImgElement[i].style.opacity=0;
    setTimeout(function() {
        productImgElement[i].src = productImages[i][currentProductImageIndex[i]];
        productImgElement[i].style.opacity=1;
    }, 500*(i+1));
    }
}, 4000);

productImgElement[i].addEventListener("mouseover", function() {
    clearInterval(getIntervalID);
});
