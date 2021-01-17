var request = require("request");

module.exports = function (location, callback) {
    var location = location ? location : 'istanbul';
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + 
        location + 
        ",tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric";

    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (error) {
            callback("Hava durumu alınamadı!!");
        } else {
            callback(body.name + " 'da hava sıcaklığı : " + body.main.temp);
        }

    });
}