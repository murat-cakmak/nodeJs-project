function doWorkPromise (data) {
    return new Promise(function (resolve, reject) {
        if (data === 1) {
            resolve('hata yok');
        } else {
            reject({
                error: 'hata var'
            });
        }
    });
};


// doWorkPromise(1).then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });


doWorkPromise(1).then(function (response) {
    console.log(response);

    return doWorkPromise(2);
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});