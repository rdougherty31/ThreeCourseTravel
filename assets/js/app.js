//declare variables
var city = "philadelphia";
var country = "us";
var APIKey = "";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ", " + country + "Burundi&units=imperial&appid=" + APIKey;
var sumTemp = 0;
var sumClouds = 0;
var sumRain = 0;
var aveTemp;
var aveClouds;
var aveRain;

// var city1name = "Sydney"
// var city2name = "Philadelphia"
var city1name;
var city2name;
var city1_id;
var city2_id;

var city1country_id;
var city2country_id;
var city1country_name;
var city2country_name;

var objCountryCuisines = {
    14: {country: "Australia", cuisines: [{cuisine_name: "Australian", cuisine_id: 131}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    30: {country: "Brasil", cuisines: [{cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83},{cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    37: {country: "Canada", cuisines: [{cuisine_name: "Canadian", cuisine_id: 381}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Caribbean", cuisine_id: 158},{cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    42: {country: "Chile", cuisines: [{cuisine_name: "Chilean", cuisine_id: 229}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "South American", cuisine_id: 972}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    54: {country: "Czech Republic", cuisines: [{cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Hungarian", cuisine_id: 228},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    1: {country: "India", cuisines: [{cuisine_id: 148, cuisine_name: "Indian"}]},
    94: {country: "Indonesia", cuisines: [{}, {}]},
    97: {country: "Ireland", cuisines: [{cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    99: {country: "Italy", cuisines: [{cuisine_name: "Italian", cuisine_id: 55}, {cuisine_name: "European", cuisine_id: 38},{cuisine_name: "Bakery", cuisine_id: 5}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Desserts", cuisine_id: 100}, {cuisine_name: "Austrian", cuisine_id: 201}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "Ice Cream", cuisine_id: 233}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Patisserie", cuisine_id: 183},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Sandwich", cuisine_id: 304}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    112: {country: "Lebanon", cuisines: [{}, {}]},
    123: {country: "Malaysia", cuisines: [{}, {}]},
    148: {country: "New Zealand", cuisines: [{cuisine_name: "New Zealand", cuisine_id: 961}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    162: {country: "Philippines", cuisines: [{}, {}]},
    163: {country: "Poland", cuisines: [{cuisine_name: "Polish", cuisine_id: 219}, {cuisine_name: "Eastern European", cuisine_id: 651}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_name: "International", cuisine_id: 154},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Russian", cuisine_id: 84}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    164: {country: "Portugal",  cuisines: [{cuisine_name: "Portuguese", cuisine_id: 87}, {cuisine_name: "Brazilian", cuisine_id: 159}, {cuisine_name: "BBQ", cuisine_id: 193}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Grill", cuisine_id: 181},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Latin American", cuisine_id: 136}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Tapas", cuisine_id: 179}, {cuisine_name: "Vegetarian", cuisine_id: 308}]},
    166: {country: "Qatar", cuisines: [{}, {}]},
    184: {country: "Singapore", cuisines: [{}, {}]},
    189: {country: "South Africa", cuisines: [{cuisine_name: "South African", cuisine_id: 267}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30}, {cuisine_name: "European", cuisine_id: 38}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    191: {country: "Sri Lanka", cuisines: [{}, {}]},
    208: {country: "Turkey", cuisines: [{cuisine_name: "Turkish", cuisine_id: 142}, {cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Armenian", cuisine_id: 175}, {cuisine_name: "Greek", cuisine_id: 156}, {cuisine_name: "Iranian", cuisine_id: 140}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Kebab", cuisine_id: 178}, {cuisine_name: "Mediterranean", cuisine_id: 70}, {cuisine_name: "Middle Eastern", cuisine_id: 137},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}, 
    214: {country: "UAE", cuisines: [{}, {}]},
    215: {country: "United Kingdom", cuisines: [{cuisine_name: "British", cuisine_id: 133},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "European", cuisine_id: 38},{cuisine_name: "Fish and Chips", cuisine_id: 298}, {cuisine_name: "Fusion", cuisine_id: 274},{cuisine_id: 148, cuisine_name: "Indian"},  {cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Irish", cuisine_id: 135},{cuisine_name: "Pub Food", cuisine_id: 983},{cuisine_name: "Scottish", cuisine_id: 210}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Vegetarian", cuisine_id: 308},{cuisine_name: "Welsh", cuisine_id: 965}]},
    216: {country: "United States", cuisines: [{cuisine_name: "American", cuisine_id: 1}, {cuisine_name: "Amish", cuisine_id: 954}, {cuisine_name: "BBQ", cuisine_id: 193},{cuisine_name: "Bar Food", cuisine_id: 227},{cuisine_name: "Burger", cuisine_id: 168},{cuisine_name: "Cafe", cuisine_id: 30},{cuisine_name: "Cajun", cuisine_id: 491}, {cuisine_name: "California", cuisine_id: 956},{cuisine_name: "Caribbean", cuisine_id: 158}, {cuisine_name: "Creole", cuisine_id: 928}, {cuisine_name: "Deli", cuisine_id: 192}, {cuisine_name: "Diner", cuisine_id: 541}, {cuisine_name: "Fusion", cuisine_id: 274}, {cuisine_name: "Hawaiian", cuisine_id: 521},{cuisine_name: "International", cuisine_id: 154}, {cuisine_name: "Israeli", cuisine_id: 218}, {cuisine_name: "Jewish", cuisine_id: 265}, {cuisine_name: "Mexican", cuisine_id: 73}, {cuisine_name: "New American", cuisine_id: 996},{cuisine_name: "New Mexican", cuisine_id: 995},{cuisine_name: "Pacific", cuisine_id: 321}, {cuisine_name: "Pacific Northwest", cuisine_id: 963},{cuisine_name: "Pizza", cuisine_id: 82}, {cuisine_name: "Po'Boys", cuisine_id: 970},{cuisine_name: "Pub Food", cuisine_id: 983}, {cuisine_name: "Puerto Rican", cuisine_id: 361}, {cuisine_name: "Salad", cuisine_id: 998}, {cuisine_name: "Sandwich", cuisine_id: 304}, {cuisine_name: "Seafood", cuisine_id: 83}, {cuisine_name: "Soul Food", cuisine_id: 461}, {cuisine_name: "Southern", cuisine_id: 471}, {cuisine_name: "Southwestern", cuisine_id: 966},{cuisine_name: "Steak", cuisine_id: 141}, {cuisine_name: "Sushi", cuisine_id: 177}, {cuisine_name: "Tex-Mex", cuisine_id: 150}, {cuisine_name: "Vegetarian", cuisine_id: 308}]}
}

var city1countryIDpos;
var city2countryIDpos;
var city1cuisineID = "";
var city2cuisineID = "";

var count_id;

var resto_id;
var restoName;
var restoImg;
var restoURL;
var price_range;
var aggRating;
var rating_text;
var currency;
var avg_cost_two;
var price_range;
var cuisine_id;
var cuisine;
var cuisines;
var votes;

var pairedValKey;

var obj_city1 = [];
var arr_city1_price_range = [];
var obj_city1_price_range1 = [];
var obj_city1_price_range2= [];
var obj_city1_price_range3= [];
var obj_city1_price_range4= [];
var obj_city1_segRestoID;

var obj_city2 = [];
var arr_city2_price_range=[];
var obj_city2_price_range1= [];
var obj_city2_price_range2= [];
var obj_city2_price_range3= [];
var obj_city2_price_range4= [];
var obj_city2_segRestoID;

var city1resto;
var img1;
var name1;
var cuisine1;
var currency1;
var price1;
var rating1;

var city2resto;
var img2;
var name2;
var cuisine2;
var currency2;
var price2;
var rating2;

var pName;
var pImg;
var pCuisine;
var pPrice;
var pRating;

var totalVotes = 0;
var totalPrice = 0;
var totalRating = 0;
var avgVotes = 0;
var avgPrice =0;
var avgRating =0;
var indexVotes = 0;
var indexPrice = 0;
var indexRating = 0;

var segCount = 0;
var segTotalVotes=0;
var segTotalPrice=0;
var segTotalRatings=0;
var segVotes = 0;
var segPrice = 0;
var segRating = 0;
var segAvgVotes = 0;
var segAvgPrice = 0;
var segAvgRating = 0;
var segIndexVotes = 0;
var segIndexPrice = 0;
var segIndexRating = 0;

$(document).ready(function () {
    
    $("#submit-btn").on("click", (event) => {
    event.preventDefault();
    
        // BEGIN STARTCITY AKA CITY1

        city1name = $("#startLocation").val();
        console.log("the city1name is: " + city1name);  

        var queryURL ="https://developers.zomato.com/api/v2.1/cities?q=" + city1name + "&count=1";
    
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
        }).then(function(city1response) {
    
            console.log(city1response);     
        
            city1_id= city1response.location_suggestions[0].id;

            city1country_id = city1response.location_suggestions[0].country_id;
            console.log("the start city COUNTRY ID is: " + city1country_id);
            city1country_name = city1response.location_suggestions[0].country_name;
            console.log("the start city COUNTRY NAME is: " + city1country_name);
        
            console.log("The number of cuisines for " + city1name + ", " + city1country_name + " is : " + objCountryCuisines[city1country_id].cuisines.length);

            // loop to collect cusisine_id(s) from objCountryCuisines for the [city1name and city1country_id]
            for (var i=0;i<objCountryCuisines[city1country_id].cuisines.length;i++){

                city1cuisineID = objCountryCuisines[city1country_id].cuisines[i].cuisine_id + ", " + city1cuisineID;
            };

            console.log("the city1CuisineID is: " + city1cuisineID);

            // STATIC RESPONSE COUNT AMOUNTS
            var count_id=20;
            // var count_id=3;
    
            var queryURL ="https://developers.zomato.com/api/v2.1/search?entity_id=" + city1_id + "&cuisines=" + city1cuisineID + "&entity_type=city&count=" + count_id; 
    
            $.ajax({
                url: queryURL,
                method: "GET",
                headers: {"X-Zomato-API-KEY":"fb4f91615b9755f2f7a9d0b29a4b8483"}
            }).then(function(city1search) {
    
                console.log(city1search); 

                for(i=0;i<city1search.restaurants.length;i++){
                    // id
                    resto_id = city1search.restaurants[i].restaurant.id;
                    //  price_range SEGMENTATION
                    price_range= city1search.restaurants[i].restaurant.price_range;
                    //  name
                    restoName = city1search.restaurants[i].restaurant.name;
                    //  cuisine
                    cuisine = city1search.restaurants[i].restaurant.cuisines;
                    console.log("the cuisines are: " + cuisine);
                    //  image
                    restoImg = city1search.restaurants[i].restaurant.featured_image;
                    //  url
                    restoURL = city1search.restaurants[i].restaurant.url;
                    //  currency
                    currency = city1search.restaurants[i].restaurant.currency;
                    //  avg_cost_two
                    avg_cost_two = city1search.restaurants[i].restaurant.average_cost_for_two;
                    //  aggregate_rating
                    agg_rating = parseFloat(city1search.restaurants[i].restaurant.user_rating.aggregate_rating);
                    //  rating_text
                    rating_text = city1search.restaurants[i].restaurant.user_rating.rating_text;
                    //  votes
                    votes = parseFloat(city1search.restaurants[i].restaurant.user_rating.votes);
                    
                    // TOTALS
                    totalVotes = votes + totalVotes;
                    totalPrice = avg_cost_two + totalPrice;
                    totalRating = agg_rating  + totalRating;

                    // CREATE OBJECT OF API DATA
                    pairedValKey={
                        resto_id: {
                            name : restoName,
                            price_range: price_range,
                            cuisine_id: city1cuisineID,
                            cuisine: cuisine,
                            restoImg: restoImg,    
                            url: restoURL,
                            currency: currency,
                            avg_cost_two: avg_cost_two,
                            agg_rating : agg_rating,
                            rating_text: rating_text,
                            votes: votes}
                        };
                
                    console.log(price_range);
            
                    if (pairedValKey.resto_id.price_range===1){

                        obj_city1_price_range1.push(pairedValKey);

                    } if(pairedValKey.resto_id.price_range===2){
                        obj_city1_price_range2.push(pairedValKey);

                    } if(pairedValKey.resto_id.price_range===3){
                        obj_city1_price_range3.push(pairedValKey);
                
                    } if(pairedValKey.resto_id.price_range===4){
                        obj_city1_price_range4.push(pairedValKey);
                
                    };

                    obj_city1.push(pairedValKey);

                };

                // (1) 
                // FULL METRICS FOR BOTH CITY1 AND CITY2 OBJECTS

                // get averages
                console.log("The TOTAL VOTES IS: " + totalVotes);
                console.log("The TOTAL PRICE IS: " + totalPrice);
                console.log("The TOTAL RATING IS: " + totalRating);

                avgVotes = parseFloat(totalVotes/count_id).toFixed(0);
                console.log("The average VOTES is: " + avgVotes);
                avgPrice = parseFloat(totalPrice/count_id).toFixed(0);
                console.log("The average PRICE is: " + avgPrice);
                avgRating = parseFloat(totalRating/count_id).toFixed(1);
                console.log("The average RATING is: " + avgRating);

                for(i=0; i<obj_city1.length; i++){
                    console.log("the obj_city1.length is: " + obj_city1.length);

                    //  --> Votes
                        // share of Total Votes (column G from Excel)
                        obj_city1[i].shareTotalVotes = obj_city1[i].votes/totalVotes;
                        console.log("The total votes share is: " + obj_city1.shareTotalVotes)

                        // total index on Votes (column R from Excel)
                        obj_city1[i].indexTotalVotes = ((obj_city1[i].votes-avgVotes)/obj_city1[i].votes)*100;

                    //  --> Price
                        // total index on Price (column O from Excel)
                        obj_city1[i].indexTotalPrice = ((obj_city1[i].avg_cost_two-avgPrice)/obj_city1[i].avg_cost_two)*100;

                    //  --> Rating
                        // total index on Rating (column L from Excel)
                        obj_city1[i].indexTotalRating = ((obj_city1[i].agg_rating-avgRating)/obj_city1[i].agg_rating)*100;
                };

                //  loop to each restaurant from the object

                arr_city1_price_range.push(obj_city1_price_range1, obj_city1_price_range2, obj_city1_price_range3,obj_city1_price_range4);
                
                // // (1) LOOP THROUGH THE subObjectsByPrice_Range_Segment

                for (var i=0; i< arr_city1_price_range.length; i++){

                    console.log("hello");
                    console.log ("the arr_city1_price_range length is: " + arr_city1_price_range[i].length);
                    console.log (arr_city1_price_range);

                    segCount = arr_city1_price_range[i].length;

                    segTotalVotes=arr_city1_price_range[i].reduce(function(totalVotes,currVal){
                        return totalVotes+currVal.resto_id.votes
                    },0)

                    segAvgVotes = segTotalVotes/segCount;

                    segTotalPrice =arr_city1_price_range[i].reduce(function(totalPrice,currVal){
                        return totalPrice+currVal.resto_id.avg_cost_two
                    },0)

                    segAvgPrice = segTotalPrice/segCount;

                    segTotalRating =arr_city1_price_range[i].reduce(function(totalRating,currVal){
                        return totalRating+currVal.resto_id.agg_rating
                    },0)

                    segAvgRating = segTotalRating/segCount;
                    
                    arr_city1_price_range[i].forEach(element => {
                        // obj_city1_segRestoID = element.resto_id;
                        // ADD share of segment votes
                        element.resto_id.segIndexVotes = ((element.resto_id.votes-segAvgVotes)/element.resto_id.votes)*100
                        element.resto_id.segIndexPrice = ((element.resto_id.avg_cost_two-segAvgPrice)/element.resto_id.avg_cost_two)*100
                        element.resto_id.segIndexRating =((element.resto_id.agg_rating-segAvgRating)/element.resto_id.agg_rating)*100
                        });
                    
                    // (2) PERFORM ANALYSIS ON INDICES TO DETERMINE THE RECOMMENDED RESTIO 
                    // (3) IF THERE'S A "TIE" BETWEEN 2 OR MORE RESTOS WITHIN A SEGMENT, 
                    //  TIE-BREAKERS ARE DETERMINED BY INDICES AT TOTAL LEVEL, i.e., wrt entire obj_city1 
                    //
                    //  (4) PUSH indices to EACH RESTAURANT IN obj_city1 per the equivalent resto_id IN obj_city1 
                    //
                    //  (5) BASED ON THE RESULTS OF THE ANALYSIS, PUSH A NEW PROPERTY TO THE obj_city1 = TRUE ON 
                    //  THE RESTOS THAT WILL BE DRAWN TO THE PAGE <DIV> PREPEND & APPEND AND USE THIS ^^PROPERTY 
                    //  TO DETERMINE AND PERFORM THE POPULATING OF THE PAGE
                
                };

                //  (6) POPULATE THE DIV FOR CITY1
                    city1resto = $("<div class='city1resto'>");
                    
                    // APPEND THE TEXT ELEMENTS, THEN PREPEND THE IMAGE TO THE DIV

                    img1 = obj_city1[i].restoImg;
                    name1 = obj_city1[i].name;
                    cuisine1= obj_city1[i].cuisine;
                    currency1 = obj_city1[i].currency;
                    price1 = obj_city1[i].average_cost_for_two;
                    rating1=obj_city1[i].rating_text;

                    pImg = $("<img>").attr({
                            "class": "city1restoIMG",
                            "src": img1,
                            "data-value": restoURL
                            });
                    
                    console.log(pImg);
                    city1resto.append(pImg)

                    pName = $("<p>").text(name1);

                    // pName = $("<p>").attr({
                    //     "class": "city1restoName",
                    //     "text": name1
                    //     });
                    city1resto.append(pName);

                    console.log(city1resto);

                    // pPrice = $("<p>").attr({
                    //     "class": "city1restoPrice",
                    //     "text": currency + price1
                    //     });
                    // city1resto.append(pPrice);

                    // console.log(pPrice);

                    // pCuisine = $("<p>").attr({
                    //     "class": "city1restoCuisine",
                    //     "text": cuisine1
                    //     });
                    // city1resto.append(pCuisine);
                    
                    // console.log(pCuisine);

                    // pRating = $("<p>").attr({
                    //     "class": "city1restoRating",
                    //     "text": rating1
                    //     });
                    // city1resto.append(pRating);

                    // console.log(pRating);

                    // PREPEND TO startCards DIV
                    $("#startCards").prepend(city1resto);    

                    // // (7) BEGIN END CITY AKA CITY2
                    // //
                    // //
                    // // (8) REPEAT ENTIRETY OF LINES 141:322 FOR CITY2
                    // //
                    // // (9) THE DIV FOR CITY2
                    // // 
                    // // (10) CREATE FUNCTIONALITY TO BE ABLE TO CROSS-X-PRODUCT CUISINES + WEATHJER ACROSS CITIES
                    // //
                    // //


// // END OF ZOMATO JAVASCRIPT

                // Initialize Firebase
                var config = {
                    apiKey: "AIzaSyAwhvcz5UIY3y0nZaA76lSHEm24P99-Wzg",
                    authDomain: "project1-2f7ae.firebaseapp.com",
                    databaseURL: "https://project1-2f7ae.firebaseio.com",
                    projectId: "project1-2f7ae",
                    storageBucket: "project1-2f7ae.appspot.com",
                    messagingSenderId: "842716287063"
                };
                firebase.initializeApp(config);

                function resetVars() {
                    sumTemp = 0;
                    sumClouds = 0;
                    sumRain = 0;
                }   
                function findAverages() {
                    aveTemp = sumTemp / 8;
                    aveClouds = sumClouds / 8;
                    aveRain = sumRain / 8;
                }
                function consoleLogs() {
                    console.log("Average temp: " + sumTemp / 8 + " degrees fahrenheit.");
                    console.log("Average clouds: " + sumClouds / 8);
                    console.log("Average rain: " + sumRain / 8);
                    console.log("------------------------------------------------");
                }
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    console.log("City: " + response.city.name);

                    //!!!TO DO!!!! slideshow, temp, rain, clouds
                    var tempDiv = $("<div>");
                    var cloudsDiv = $("<div>");
                    var rainDiv = $("<div>");
                    tempDiv.addClass("temp");
                    cloudsDiv.addClass("clouds");
                    rainDiv.addClass("rain");
                    $("#temp").append(tempDiv);
                    $("#clouds").append(cloudsDiv);
                    $("#rain").append(rainDiv);

                    function updateWeather() {
                    $(tempDiv).text(aveTemp);
                    $(cloudsDiv).text(aveClouds);
                    $(rainDiv).text(aveRain);
                    }

                    $("#forecast").click(function() {
                    $("#forecast").css("display","none");
                    $("#weather").css("display","block");
                    console.log("DAY 1:");
                    $("#day").text("Today: ");
                    for (var i = 0; i < 8; i++) {
                        sumTemp = + response.list[i].main.temp;
                        sumSun = + response.list[i].clouds.all;
                        var typeOfRain = typeof response.list[i].rain["3h"];
                        if (typeOfRain === "number") {
                        sumRain = + response.list[i].rain["3h"];
                        }
                    }
                    $("#nextDay").attr("data-day","1");
                    findAverages();
                    updateWeather();
                    consoleLogs();
                    });


                    $("#nextDay").click(function() {
                    resetVars();
                        if ($("#nextDay").attr("data-day") === "0") {
                            console.log("DAY 1:");
                            $("#day").text("Today: ");
                            for (var i = 0; i < 8; i++) {
                                sumTemp = + response.list[i].main.temp;
                                sumSun = + response.list[i].clouds.all;
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = + response.list[i].rain["3h"];
                                }
                            }
                            $("#nextDay").attr("data-day","1");
                        } else if ($("#nextDay").attr("data-day") === "1") {
                            console.log("DAY 2:");
                            $("#day").text("Tomorrow: ");
                            for (var i = 8; i < 16; i++) {
                                sumTemp = + response.list[i].main.temp;
                                sumClouds = + response.list[i].clouds.all;
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = + response.list[i].rain["3h"];
                                }
                            }
                            $("#nextDay").attr("data-day","2");
                        } else if ($("#nextDay").attr("data-day") === "2") {
                            console.log("DAY 3:");
                            $("#day").text("Day 3: ");
                            for (var i = 16; i < 24; i++) {
                                sumTemp = + response.list[i].main.temp;
                                sumClouds = + response.list[i].clouds.all;
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = + response.list[i].rain["3h"];
                                }
                            }
                            $("#nextDay").attr("data-day","3");
                        } else if ($("#nextDay").attr("data-day") === "3") {
                            console.log("DAY 4:");
                            $("#day").text("Day 4: ");
                            for (var i = 24; i < 32; i++) {
                                sumTemp = + response.list[i].main.temp;
                                sumClouds = + response.list[i].clouds.all;
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = + response.list[i].rain["3h"];
                                } 
                            }
                            $("#nextDay").attr("data-day","4");
                        } else {
                            console.log("DAY 5:");
                            $("#day").text("Day 5: ");
                            for (var i = 32; i < response.list.length; i++) {
                                sumTemp = + response.list[i].main.temp;
                                console.log(sumTemp);
                                sumClouds = + response.list[i].clouds.all;
                                var typeOfRain = typeof response.list[i].rain["3h"];
                                if (typeOfRain === "number") {
                                    sumRain = + response.list[i].rain["3h"];
                                } 
                            }
                            $("#nextDay").attr("data-day","0");
                        };
                        findAverages();
                        updateWeather();
                        consoleLogs();
                    });
                });
            });
        });
    });
});

