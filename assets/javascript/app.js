// window.onload = function () {
  
  
// };

    //Sets the onclick event to the newly created button
  //  $("search").on("click", function () {
console.log("start");

        //Create the query string for AJAX.
       // var queryURL = "https://zilyo.p.mashape.com/search?isinstantbook=true&nelatitude=22.37&nelongitude=-154.48000000000002&provider=airbnb%2Chousetrip&swlatitude=18.55&swlongitude=-160.52999999999997"
    
        //HttpResponse<JsonNode> response = Unirest.get("https://maxim75-geolocation-ws-v1.p.mashape.com/api/find_box?e=31&lang=en&n=51&s=50&w=30&wiki_commons=0")
        //.header("X-Mashape-Key", "c49VVibm9ImshDElgqf7QTzDFVoXp1v5VX2jsnWndwn7Phj8ic")
       // .asJson();

        //var queryURL = "https://maxim75-geolocation-ws-v1.p.mashape.com/api/find_box?e=31&lang=en&n=51&s=50&w=30&wiki_commons=0";

        //var queryURL = "https://montanaflynn-Airports-v1.p.mashape.com"

        var queryURL = "https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=9%2F25%2F2015&lat=37.757815&long=-122.5076392&startdate=9%2F19%2F2015"


        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                // "x-mashape-key": "c49VVibm9ImshDElgqf7QTzDFVoXp1v5VX2jsnWndwn7Phj8ic",
                //   "accept": "application/json"
                // "X-Mashape-Key": "c49VVibm9ImshDElgqf7QTzDFVoXp1v5VX2jsnWndwn7Phj8ic"
            
               // "X-Mashape-Authorization": "c49VVibm9ImshDElgqf7QTzDFVoXp1v5VX2jsnWndwn7Phj8ic"
                //,                "Accept": "application/json"

               "X-Mashape-Key": "c49VVibm9ImshDElgqf7QTzDFVoXp1v5VX2jsnWndwn7Phj8ic",
                "Accept": "application/json"


            }
        }).then(function (response) {
            //The object returns is an array named "data" 
            //Store the array in a variable named results.  

            console.log(response);
           


        }); //End of Then

   //}); // End of onClick


//  var  response = Unirest.get("https://zilyo.p.mashape.com/search?latitude=52.5306438&longitude=13.3830683")
// .header("X-Mashape-Key", "c49VVibm9ImshDElgqf7QTzDFVoXp1v5VX2jsnWndwn7Phj8ic")
// .header("Accept", "application/json")
// .asJson();

// console.log(response);

