# Daily Planner

Application: https://tjvig94.github.io/daily-planner/

## Overview

This SPA is a very light and simple hourly planner for the standard hours of the work day.
Users can input various tasks into the field for each hour and save the task so they may view
it later. The current hour is highlighted in green, previous hours are gray, and upcoming hours are blue.

## How it works, and Dayjs

All tasks are saved as separate items in local storage. When the page loads, it loops through these
items in the local storage and fills them with the corresponding textarea by matching the name of the item
to the id of the textarea.

To display the date at the top of the page, and to check the current time, the Dayjs API is used. In order to display
the full spelling of the day and month, there are arrays for the days and months, placed at appropriate indexes. The full
spelling is swapped out for the number that is returned from Dayjs when checking for the day/month.

## Future Updates

 - As of right now, the color of a textarea does not change dynamically. That is to say, that in order for the color to change at
the turn of an hour, the page needs to be reloaded.

 - There will need to be a warning modal if a user has unsaved changes on the page. Otherwise, a user may not have hit a save button
 and leave the page without storing any of the data they put in. The modal would give the user the option to leave the page without saving anything, or to remain on the page.

![Image of planner application](assets\daily-planner-screenshot.png)

