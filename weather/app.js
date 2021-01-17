var argv = require("yargs")
.option('location', {
    alias: 'l',
    demand: false,
    describe: 'konum'
})
.help('help')
.argv;

var weather = require("./weather");
var location = require("./location");

weather(argv.l, function(currentWeather){
    console.log(currentWeather);
});

location(function(location){

    if(!location){
        console.log("Lokasyon bilgisi alınamadı!!!");
        return;
    } else {
        console.log("Şehir : " + (argv.l || 'istanbul'));
        console.log("Long/Lat : " + location.loc);
        console.log("Ülke : " + location.country);
    }

})