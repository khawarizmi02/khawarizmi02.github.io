// // Get the modal
// var modal = document.getElementById("myModal");
//
// // Get the button that opens the modal
// var btn = document.getElementById("product-list");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
//     console.log('helo');
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// Get the modal and close button
var modal = document.getElementById("product-modal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add click listener to the parent element of all BuyNow buttons
document.getElementById('product-list2').addEventListener('click', function(event) {
    // Check if the clicked element is a BuyNow button
    if (event.target.classList.contains('buy-now')) {
        // Get the product ID from the data attribute
        var productId = event.target.getAttribute('data-product-id');

        // Set the title and description of the modal based on the product ID
        var title = document.getElementById('product-modal-title');
        var description = document.getElementById('product-modal-description');
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
const product1Images = [
    "image/masjid1.jpg",
    "image/masjidil-haram.jpg",
    "image/masjid4.jpg"
];

const product1ImgElement = document.getElementById('product1-img');

let currentProduct1ImageIndex = 0;

// Change the image every 5 seconds
// setInterval(() => {
//     currentProduct1ImageIndex = (currentProduct1ImageIndex + 1) % product1Images.length;
//     console.log(currentProduct1ImageIndex);
//     console.log(product1Images[currentProduct1ImageIndex]);
//     product1ImgElement.src = product1Images[currentProduct1ImageIndex];
// }, 5000);
setInterval(function() {
    currentProduct1ImageIndex++;
    if (currentProduct1ImageIndex >= product1Images.length) {
        currentProduct1ImageIndex = 0;
    }
    product1ImgElement.style.opacity = 0;
    setTimeout(function() {
        product1ImgElement.src = product1Images[currentProduct1ImageIndex];
        product1ImgElement.style.opacity = 1;
    }, 500);
}, 4000);

