const outputDiv = document.getElementById('output');

function getTravelInfo(currentLocation) {
    if (currentLocation === "Halifax") {
        return "In Halifax, the airport is Halifax Stanfield International Airport (YHZ).";
    } else {
        return `Where are you located and where are you going from ${currentLocation}?`;
    }
}

// Example usage
const myLocation = "Halifax"; 
outputDiv.innerText = getTravelInfo(myLocation);