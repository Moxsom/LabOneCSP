document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    var myNextBirthday = new Date("2024-03-10T00:00:00");
    var myNextBirthdayTime = myNextBirthday.getTime();

    // Display the next birthday date in a readable format
    document.getElementById("nextBirthdayDate").innerHTML = "My next birthday is on " + myNextBirthday.toDateString() + ".";

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = myNextBirthdayTime - now;
        
        // Time calculations for weeks, days, hours, minutes and seconds
        var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
        var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="birthdayCountdown"
        document.getElementById("birthdayCountdown").innerHTML = "There are " + weeks + " weeks, " + days + " days, " 
        + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until my next birthday!";
        
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("birthdayCountdown").innerHTML = "It's my birthday!";
        }
    }, 1000);
});