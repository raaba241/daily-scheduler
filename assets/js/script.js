var titleDay = dayjs();
var hour = dayjs().format('H')
$('#todayDate').text(titleDay.format('dddd, MMMM D '))

for(var x = 0; x <= 9; x++){

    if (x < hour){
        var tomato = $('body').append('<div id="container">'+'  '+x+':00'+'<input id="past">'+'</input>'+'<button>SAVE</button>'+'</div>');
    }
    else if (x == hour){
        var tomato = $('body').append('<div id="now">'+' '+x+':00'+'</div>');
    }
    else if (x > hour){
        var tomato = $('body').append('<div id="future">'+x+':00'+'</div>');
    }
}
