// Model Function Start

function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; 
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1;
}

function onClickedEstimatedPrice() {
    console.log("Estimated price button clicked");
    var sqft = document.getElementById("uisqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocation").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_house_price";

    $.post(url, {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathrooms,
        location: location
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);
    });
    
}

function onPageLoad() {
    console.log("Document loaded");
    var url = "http://127.0.0.1:5000/get_location_names";

    $.get(url, function(data, status) {
        console.log("Got response for get_location_names request");
        console.log("Data received:", data);

        if (data && data.locations) {
            var locations = data.locations;
            console.log("Locations array:", locations);

            var uiLocations = document.getElementById("uiLocation");
            console.log("UI Locations element:", uiLocations);

            for (var i = 0; i < locations.length; i++) {
                var opt = new Option(locations[i], locations[i]);
                uiLocations.appendChild(opt);
                console.log("Appended option:", opt);
            }
        }
    });
}

window.onload = onPageLoad;


// Model Function End

// Feedback Page Start