var pullLocalRest = JSON.parse(localStorage.getItem('visitedRestaurants')) || {};
var pullLocalRec = JSON.parse(localStorage.getItem('savedMeals')) || {};
//on page load, write most recent saved rest
var mostRecent = function (recentRestId) {
    if (Object.keys(pullLocalRec).length !== 0) {
        var lastId = pullLocalRest.last;
        var mostRecentName = pullLocalRest[lastId].name;
        var mostRecentCom = pullLocalRest[lastId].comment;
        var mostRecentRate = pullLocalRest[lastId].rating;
        $('#restPrint').text(mostRecentName);
        $('#restPrint').append('<div class="restId" data-restID="' + lastId + '"></div>')
        var keyArr = Object.keys(pullLocalRest);
        var i = 1;
        keyArr.forEach(element => {
            console.log(element);
            if (element !== "last") {
                var nextId = element;
                var nextRest = pullLocalRest[element].name;
                var nextComment = pullLocalRest[element].comment;
                console.log(nextComment);
                var nextRating = pullLocalRest[element].rating;
                var lat = pullLocalRest[element].latitude;
                var lon = pullLocalRest[element].longitude;
                //Yes I'm using template literal for this
                var inputCard = `<section class="card uk-margin">
                <div id="restName${i}">${nextRest}
                    <div class="restId" data-restNum="${nextId}"></div>
                </div>
                <form class="textinput">
                <textarea row="5" class="uk-input" type="text" placeholder="Comments">${nextComment}</textarea>
                <div class="stars" action="">
                    <input class="star star-5 save" id="${i}star-5" type="radio" name="star${i}" value="5"/>
                    <label class="star star-5" for="${i}star-5"></label>
                    <input class="star star-4 save" id="${i}star-4" type="radio" name="star${i}" value="4"/>
                    <label class="star star-4" for="${i}star-4"></label>
                    <input class="star star-3 save" id="${i}star-3" type="radio" name="star${i}" value="3"/>
                    <label class="star star-3" for="${i}star-3"></label>
                    <input class="star star-2 save" id="${i}star-2" type="radio" name="star${i}" value="2"/>
                    <label class="star star-2" for="${i}star-2"></label>
                    <input class="star star-1 save" id="${i}star-1" type="radio" name="star${i}" value="1"/>
                    <label class="star star-1" for="${i}star-1"></label>
                </div>

                <div class="displayC">
                <button class="restSubmit btn uk-button uk-button-default">Submit</button>
                <div data-lat="${lat}"></div>
                <button class="maps btn uk-button uk-button-default">Get Directions Again!</button>
                <div data-lon="${lon}"></div>
                </div>
                </form>
                </section>`;
                $('#allRestPrint').append(inputCard);
                if (nextRating == 5) {
                    var starPop = i + "star-5";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 4) {
                    var starPop = i + "star-4";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 3) {
                    var starPop = i + "star-3";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 2) {
                    var starPop = i + "star-2";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 1) {
                    var starPop = i + "star-1";
                    $('#' + starPop).prop("checked", "checked");
                };
            }
            i++;
        });
    }
}

var popRecipes = function () {
    if (Object.keys(pullLocalRec).length !== 0) {
        var storedLength = Object.keys(pullLocalRec).length;
        var lastId = pullLocalRec.last;
        var mostRecentName = pullLocalRec[lastId].name;
        var mostRecentCom = pullLocalRec[lastId].comment;
        var mostRecentRate = pullLocalRec[lastId].rating;
        console.log(mostRecentName);
        $('#restPrint').text(mostRecentName);
        $('#restPrint').append('<div class="restId" data-restID="' + lastId + '"></div>')
        var keyArr = Object.keys(pullLocalRec);
        var i = 100;
        keyArr.forEach(element => {
            console.log(element);
            if (element !== "last") {
                var nextId = element;
                var nextRest = pullLocalRec[element].name;
                var nextComment = pullLocalRec[element].comment;
                console.log(nextComment);
                var nextRating = pullLocalRec[element].rating;
                //Yes I'm using template literal for this
                var inputCard = `<section class="card uk-margin">
                <div id="restName${i}">${nextRest}
                    <div class="restId" data-restNum="${nextId}"></div>
                </div>
                <form class="textinput">
                <textarea row="5" class="uk-input" type="text" placeholder="Comments">${nextComment}</textarea>
                <div class="stars" action="">
                    <input class="star star-5 save" id="${i}star-5" type="radio" name="star${i}" value="5"/>
                    <label class="star star-5" for="${i}star-5"></label>
                    <input class="star star-4 save" id="${i}star-4" type="radio" name="star${i}" value="4"/>
                    <label class="star star-4" for="${i}star-4"></label>
                    <input class="star star-3 save" id="${i}star-3" type="radio" name="star${i}" value="3"/>
                    <label class="star star-3" for="${i}star-3"></label>
                    <input class="star star-2 save" id="${i}star-2" type="radio" name="star${i}" value="2"/>
                    <label class="star star-2" for="${i}star-2"></label>
                    <input class="star star-1 save" id="${i}star-1" type="radio" name="star${i}" value="1"/>
                    <label class="star star-1" for="${i}star-1"></label>
                </div>
                <div class="displayC">
                <button class="recSubmit btn uk-button uk-button-default">Submit</button>
                </div>
                </form>
                <div class="recipeContainer" id="recipieContainer">
                    <a class="btn uk-button uk-button-default" href="#modal-center" uk-toggle>Recipe</a>
            
                    <div id="modal-center" class="uk-flex-top" uk-modal>
                        <div class="uk-responsive-width drop uk-modal-dialog uk-modal-body uk-margin-auto-vertical" uk-overflow-auto>
            
                            <button class="recipeButton uk-modal-close-default" type="button" uk-close id="closeBtn"></button>
            
                            <div id="commentRecipe"></div>
                        </div>
                    </div>
                </div>
                </section>`;
                $('#allRecipePrint').append(inputCard);
                if (nextRating == 5) {
                    var starPop = i + "star-5";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 4) {
                    var starPop = i + "star-4";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 3) {
                    var starPop = i + "star-3";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 2) {
                    var starPop = i + "star-2";
                    $('#' + starPop).prop("checked", "checked");
                } else if (nextRating == 1) {
                    var starPop = i + "star-1";
                    $('#' + starPop).prop("checked", "checked");
                };
            }
            i++;
        });
    }
}

console.log(JSON.parse(localStorage.getItem('visitedRestaurants')));
var restParsed = JSON.parse(localStorage.getItem('visitedRestaurants'));
var recentRestId = restParsed[Object.keys(restParsed)[Object.keys(restParsed).length - 1]];
mostRecent(recentRestId);
popRecipes();
// var saveLocal = function (id) {
//     pullLocalRest.last = id
//     localStorage.setItem("visitedRestaurants", JSON.stringify(restParsed))
// };

$('input').on('click', function () {
    console.log('star test');
    $(this).parent().val($(this).val());
    console.log($(this).parent().val());
})


// $('input').on("click", function () {
//     var starClass = $(this).attr('class');
// });

//Writing this in ID form for now, will probably switch to class to for multi rest display
$('.restSubmit').on('click', function (event) {
    event.preventDefault();
    var restId = $(this).parent().prev().children().data("restnum");
    console.log(restId);
    pullLocalRest[restId].rating = $(this).prev().val();
    pullLocalRest[restId].comment = $(this).siblings(0).first().val();
    console.log(pullLocalRest);
    localStorage.setItem('visitedRestaurants', JSON.stringify(pullLocalRest));
});

$('.recSubmit').on('click', function (event) {
    event.preventDefault();
    var restId = $(this).parent().prev().children().data("restnum");
    console.log(restId);
    pullLocalRec[restId].rating = $(this).prev().val();
    pullLocalRec[restId].comment = $(this).siblings(0).first().val();
    console.log(pullLocalRec);
    localStorage.setItem('savedMeals', JSON.stringify(pullLocalRec));
});
$('.maps').on('click', function (lat, long) {
    var lat = $(this).prev().attr("data-lat");
    var long = $(this).next().attr("data-lon");
    if /*for iOS*/

        ((navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1) ||
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");

    else /*else use Google*/
        window.open("https://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
});

$('.recipeButton')
