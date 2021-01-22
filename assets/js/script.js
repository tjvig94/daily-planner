$(document).ready(function() {

    let now = dayjs();

    const hourRows = [
        "nine-am", "ten-am", "eleven-am", "twelve-pm", "one-pm", "two-pm", "three-pm", "four-pm", "five-pm"
    ];

    const weekdays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" 
    ]

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    // converts to shortened weekday term to full
    let thisDay = function() {
        for (let i = 0; i < weekdays.length; i++) {
            if (i == now.day()) {
                return weekdays[i];
            };
        };    
    };

    // converts shortened month term to full
    let thisMonth = function() {
        for (let i = 0; i < months.length; i++) {
            if (i == now.month()) {
                return months[i];
            };
        };         
    }

    // place the current day, month, and year in the header
    $("h3.current-day").text(`${thisDay()}, ${thisMonth()} ${now.$D}, ${now.$y}`);
    console.log(now);

    // function to get the task associated with the time from local storage
    function displayTask(time) {
        $("#" + time).val(localStorage.getItem(time));    
    };

    // place the task in each associated time row
    hourRows.forEach(element => {
        displayTask(element);
    });

    // saves task written in textbox to local storage
    function saveTask() {
        let currentHour = $(this).data("time");
        let currentTask = $("#" + currentHour).val();
        localStorage.setItem(currentHour, currentTask);
    };

    // saves all information typed into each textarea
    function saveAll() {
        hourRows.forEach(element => {
            let currentTask = $("#" + element).val();
            localStorage.setItem(element, currentTask);
        });
    };

    // change color of textarea depending on the current time.
    hourRows.forEach(element => {
        let currentElement = $("#" + element);
        if (currentElement.data("hour") == now.$H) {
            currentElement.css("background-color", "#bedbbb");
        } else if (currentElement.data("hour") < now.$H) {
            currentElement.css("background-color", "#bbbbbb");
        } else if (currentElement.data("hour") > now.$H) {
            currentElement.css("background-color", "#03506f").css("color", "white");
        };
    });

    // Save function when the save button is clicked
    $(".btn").on("click", saveTask);
    $("button.save-all").on("click", saveAll);
});