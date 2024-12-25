// You can add any JavaScript functionality here if needed for animations or interactions
// For example, scroll to the product details section
document.querySelector('.btn-light').addEventListener('click', function () {
    document.querySelector('#product-details').scrollIntoView({ behavior: 'smooth' });
});
