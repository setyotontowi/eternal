// [1] Error : Month in Outside, not resetting
// Try to create Array of Month and Year in case calender is created several times in a page
// [2] Notice : Set for Month's Name

var year = new Date().getFullYear();
var month = (new Date().getMonth())+1; //[1]
var selector = $('.calendar');
var button = $('.calendar-btn');

$(document).ready(function(){
	for(i=0; i<selector.length; i++){
		createBody(selector[i].id, getWeek(year, month));
		fillDate(selector[i].id, year, month);
	}

	var now = new Date(year, month-1).getMonth(); 
	$('#desc').html(months[now]+', '+year); //[2]

	button.click(function(event){
		var target = event.toElement.dataset.target;
		var action = event.toElement.dataset.event+"('"+target+"')"; 
		eval(action);

		var now = new Date(year, month-1).getMonth();
		$('#desc').html(months[now]+', '+year);

	})
});

var arrOfDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getWeek(year, month){
	var arrOfWeek = new Array();
	var daysinmonth = new Date(year, month, 0).getDate();
	for(var i=1; i<=daysinmonth; i++){
		var date = new Date(year, month-1, i);
		var day = date.getDay();
		if(day == 0 || i==1){
			arrOfWeek.push(date.getDate());
		}
	}
	return arrOfWeek.length;
}


function createBody(div, row){
	$("#"+div).html('');
	$("#"+div).append("<table border='1' class='table table-bordered calendar-body' id='calendar-body'>");
	$("#"+div+" #calendar-body").append("<thead><tr>");
	$("#"+div+" #calendar-body").append("<tbody>");
	
	for(var j=1; j<=7; j++){
		$("#"+div+" #calendar-body thead tr").append("<th>");
		$("#"+div+" #calendar-body thead th:nth-child("+j+")").append(arrOfDay[j-1]);
	}

	for(var i=1; i<=6; i++){
		$("#"+div+" #calendar-body tbody").append("<tr>");
		for(var j=1; j<=7; j++){
			$("#"+div+" #calendar-body tbody tr:nth-child("+i+")").append("<td>");
		}
	}

	//Styling
	$("#"+div+" thead th").width($('td').width());
	$("#"+div+" thead th").css({
		"padding":"10px 5px", 
		 });
	$("#"+div+" tbody td").height($('td').width());
}

function fillDate(div, year, month){
	row = getWeek(year, month);
	createBody(div, row);
	var firstDay = new Date(year, month-1, 1).getDay(); 
	var lastDate  = new Date(year, month, 0).getDate();
	var day = 1 - firstDay;	
	for(var i=1; i<=6+1; i++){
		for(var j=1; j<=7; j++){
			var date = new Date(year, month-1, day).getDate();
			$("#"+div+" #calendar-body tbody tr:nth-child("+i+") td:nth-child("+j+")").html(date);
			if(day<1 || day>lastDate){
				$("#"+div+" #calendar-body tbody tr:nth-child("+i+") td:nth-child("+j+")").css("color","#ddd")
			}
			day++;
		}
	}
}

function next(id){
	if(month>=12){month=0; year++;}
	month++;
	fillDate(id, year, month);
}

function prev(id){
	if(month<=1){month=13; year++;}
	month--;
	fillDate(id, year, month);
}

function jump(selector, year, month){
	var select = $('.'+selector);
	createBody(select[0].id, getWeek(year, month));
	fillDate(select[0].id, year, month);

	var now = new Date(year, month-1).getMonth();
	$('#desc').html(months[now]+', '+year);
}