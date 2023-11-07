
var hour = dayjs().hour()
$('#currentDay').text(dayjs().format('dddd, MMMM D '));
// Added an on click function that listens for a button click
$(function () {
    $(".saveBtn").on("click", function(){
        var hour = $(this).parent().attr("id")
        var text = $(this).siblings(".description").val()
        localStorage.setItem(hour, text)
    })

    // Targeting the class names and getting stored value from LocalStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))

    //Targeting the time block class and going through each sibling that has time-block and added a past present future depending on current time
    $(".time-block").each(function(){
        var blockTime = $(this).attr("id").split("-")[1]
        // Past 
        if(blockTime < hour){
            $(this).addClass("past")
        }
        // Present 
        else if (blockTime == hour){
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        // Future
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })

});

