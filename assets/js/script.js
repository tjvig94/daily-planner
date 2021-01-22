$(document).ready(function() {

    let now = dayjs();

    const hourRows = [
        "nine-am", "ten-am", "eleven-am", "twelve-pm", "one-pm", "two-pm", "three-pm", "four-pm", "five-pm"
    ]

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
        if (currentTask !== "") {
            localStorage.setItem(currentHour, currentTask);        
        };
    };

    hourRows.forEach(element => {
        let currentElement = $("#" + element);
        if (currentElement.data("hour") == now.$H) {
            currentElement.css("background-color", "green");
        } else if (currentElement.data("hour") < now.$H) {
            currentElement.css("background-color", "gray");
        } else if (currentElement.data("hour") > now.$H) {
            currentElement.css("background-color", "blue")
        };
    }); 
    // Save function when the save button is clicked
    $(".btn").on("click", saveTask);
});