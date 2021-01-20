$(document).ready(function() {

    function displayTask(time) {
        $("#" + time).val(localStorage.getItem(time));    
    };

    displayTask("nine-am");
    displayTask("ten-am");
    displayTask("eleven-am");
    displayTask("twelve-pm");
    displayTask("one-pm");
    displayTask("two-pm");
    displayTask("three-pm");
    displayTask("four-pm");
    displayTask("five-pm");

    function saveTask() {
        let currentHour = $(this).data("time");
        let currentTask = $("#" + currentHour).val();
        let currentTaskBox = $("#" + currentHour);
        if (currentTask !== "") {
            localStorage.setItem(currentHour, currentTask); 
        
        };
    };
    
    $(".btn").on("click", saveTask);
});