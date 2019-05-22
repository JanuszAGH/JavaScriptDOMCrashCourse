const cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve("Cleaned the room");
    })
};

const removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + '. Garbages has been removed');
    });
}

const winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + '. Won icecream.');
    });
};

Promise.all([cleanRoom(), removeGarbage(), winIcecream()])
    .then(() => console.log('all finished'));