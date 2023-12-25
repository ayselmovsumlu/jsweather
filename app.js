"use strict";
$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&appid=a1a99039e98fe3334da315311c12b501`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feeels").html(data.main.feels_like)
                $("#myweather").val("")
                console.log(data);
            }
            myweather()

        }

    });

    $('#btn').click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&appid=a1a99039e98fe3334da315311c12b501`
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#temp").html(data.main.temp)
            $("#feeels").html(data.main.feels_like)
            $("#myweather").val("");
            console.log(data);
        }
        myweather()



    });


});