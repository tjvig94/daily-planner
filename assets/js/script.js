$(document).ready(function() {

    let allTasks = [];
    let parsedTasks = JSON.parse(localStorage.getItem("Tasks"));
    
    function saveTask() {
        let currentHour = $(this).data("time");
        let currentTask = $("#" + currentHour).val();
        let newTask = {
            "time": currentHour,
            "task": currentTask 
        };
        // need to check if tasktime is already used, and to replace that task if it exists already

        allTasks.push(newTask);

        localStorage.setItem("Tasks", JSON.stringify(allTasks));
    };

    $(".btn").on("click", saveTask);
    
    console.log(parsedTasks[0].task);
    
});