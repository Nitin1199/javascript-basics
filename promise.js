const cart = ['shoes', 'pants', 'kurta'];

const promise = createOrder(cart);

promise.then(function(orderId) {
    console.log(orderId);
    return proceedToPayment(orderId)
}).then(function(message) {
    console.log(message);
}).catch((err) => {
    console.log(err.message);
});

//creating promise
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            const error = new Error('Cart is not valid');
            return reject(error);
        }

        const orderId = "12345"
        if(orderId) {
            setTimeout(() => {
                return resolve(orderId);
            }, 5000)
        }
    })
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        console.log('Processing Payment for order : ', orderId);
        setTimeout(() => {
            return resolve('Payment Successfull');
        }, 2000);
    })
}

function validateCart(cart) {
    return true;
}