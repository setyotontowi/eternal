var yearnow = $('#subtitle-year').html();
var monthnow
var month
var	yeardisplay
var	monthdisplay



function getdate(date, month, year, penentu){
			month = month + penentu;
			if(month == 0){
				month = 12
				year = year + 1;
			}
			else if(month == 13){
				month = 1
				year = year + 1
			}

			var stringdate = year+"-"+month+"-"+date

			return stringdate
}

function datedisplay(m){
	var val
	m = m.toUpperCase();
	var month = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
	for (var i = 0; i < month.length;  i++) {
		if(m == month[i]){
			val = i+1;
		}
	}
	return val;
	
}

function datetostring(dane){
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	return month[dane-1];
}


	function setdayend(date, year){
			date = date.toUpperCase();
			var day = 0;
			switch(date){
					case 'JANUARY' : 
						day = 31 
						break;
					case 'FEBRUARY' : 
						day = 28
						break;	
					case 'MARCH' : 
						day = 31 
						break;	
					case 'APRIL' : 
						day = 30
						break;	
					case 'MAY' : 
						day = 31
						break;	
					case 'JUNE' : 
						day = 30 
						break;	
					case 'JULY' : 
						day = 31  
						break;	
					case 'AUGUST' : 
						day = 31 
						break;	
					case 'SEPTEMBER' : 
						day = 30  
						break;	
					case 'OCTOBER' : 
						day = 31  
						break;	
					case 'NOVEMBER' : 
						day = 30 
						break;	
					case 'DECEMBER' : 
						day = 31  
						break;	

			}
			return day;
			
		}

function isin(month, year){
			var d = 1;
			var x = 0;
			var m = month; 
			var y = year;
			var de = setdayend(m, y);
			var date = new Date(m + y);
			var ds = date.getDay();
			var n = 0;
			var t = 0;
			var today = new Date();
			//console.log("ds " + ds + de + m + y + date)
			$('#calendar-body').empty();
			for(var i=0; i<6; i++){
				var tr = "<tr class='inside'></tr>"
				$('#calendar-body').append(tr);

				for(var j=0; j<7; j++){
					var penentu = 0
					var st = document.createAttribute('style');
					var att = document.createAttribute('onclick');
					var an = document.createAttribute('name');
					var ann = document.createAttribute('value');
					// var mo = document.createAttribute('onmouseover');
					// var mt = document.createAttribute('onmouseout');
					st.value = "background-color : #fff;";
					// mo.value = "bgbiru(this)";
					// mt.value = "bgputih(this, '#fefefe')";
					
					
					if(d > de){
						d = 1
						x++
					}
					
					if(x > 0){
						st.value = "background-color : #cecece; color : rgb(150, 150, 150)";
						// mo.value = "bgbiru(this)";
						// mt.value = "bgputih(this, '#f1f1f1')";

						penentu = 1;
					}

					var dy = document.createElement('td');
					var at = document.createElement('button');
					var dt = document.createTextNode(d);

					if(n < ds){
						st.value = "background-color : #cecece; color : rgb(150, 150, 150)";
						// mo.value = "bgbiru(this)";
						// mt.value = "bgputih(this, '#f1f1f1')";
						d = 31;
						var mth = datedisplay(m);
						mth = mth - 1;
						if(mth == 0){
							mth = 12
						}
						else if(mth == 13){
							mth = 1
						}
						//console.log("MTH = " + mth)
						var dte = setdayend(datetostring(mth), y);
						d = dte-ds+1+n;
						var dt = document.createTextNode(d);

						penentu = -1

						d = 0
						n++	

					}

					if(d == today.getDate() && month == datetostring(today.getMonth()+1) && y == today.getFullYear() && x == 0){
						st.value = "color: #00c0ef; font-weight : 800";
					}

					var str1 = "getValue("
					var str2 = ")"

					var stringdate = getdate(dt.textContent, ma, y, penentu);

					var ma = datedisplay(m);
					
					att.value = str1.concat(dt.textContent,",", ma,",",y,",",penentu, str2);
					an.value  ='date'
					ann.value = stringdate

					dy.appendChild(at);
					dy.setAttributeNode(att)
					at.appendChild(dt);
					dy.setAttributeNode(st)
					at.setAttributeNode(an)
					at.setAttributeNode(ann)

					document.getElementsByClassName('inside')[i].appendChild(dy);
					
					t = d - x;
					d++;
					

				}
				if(x > 0 && d > t){
					break;
				}
				else if(t == de){
					break;
				}
				
			}
			
}

function prev(){
	yeardisplay = parseInt($('#subtitle-year').html());
	monthdisplay = $('.calendar-title>#title-date>h4').html().toUpperCase();
	var month = datedisplay(monthdisplay);
	month = month - 1;

	switch(month){
		case 0 :
			monthdisplay = 'December' 
			month = 12
			yeardisplay  = yeardisplay - 1
			break;
		case 1 : 
			monthdisplay = 'January' 
			break;
		case 2 : 
			monthdisplay = 'February' 
			break;	
		case 3 : 
			monthdisplay = 'March' 
			break;	
		case 4 : 
			monthdisplay = 'April' 
			break;	
		case 5 : 
			monthdisplay = 'May' 
			break;	
		case 6 : 
			monthdisplay = 'June' 
			break;	
		case 7 : 
			monthdisplay = 'July' 
			break;	
		case 8 : 
			monthdisplay = 'August' 
			break;	
		case 9 : 
			monthdisplay = 'September' 
			break;	
		case 10 : 
			monthdisplay = 'October' 
			break;	
		case 11 : 
			monthdisplay = 'November' 
			break;	
		case 12 : 
			monthdisplay = 'December' 
			break;	
		case 13 :
			monthdisplay = 'January'
			month = 1
			yeardisplay = yeardisplay + 1
			break;
	}
	isin(monthdisplay, yeardisplay);
	$('#title-date').html(
		'<h4 id="title-month">' + monthdisplay + '</h4><br><p style="font-size: 12px;" id="subtitle-year">' + yeardisplay + '</p>'
	);
}
function next(){
	yeardisplay = parseInt($('.calendar-title>#title-date>p').html());
	console.log(yeardisplay);
	monthdisplay = $('.calendar-title>#title-date>h4').html().toUpperCase();
	var month = datedisplay(monthdisplay);
	month = month + 1;
	switch(month){
		case 0 :
			monthdisplay = 'Desember' 
			month = 12
			yeardisplay  = yeardisplay - 1
			break;
		case 1 : 
			monthdisplay = 'January' 
			break;
		case 2 : 
			monthdisplay = 'February' 
			break;	
		case 3 : 
			monthdisplay = 'March' 
			break;	
		case 4 : 
			monthdisplay = 'April' 
			break;	
		case 5 : 
			monthdisplay = 'May' 
			break;	
		case 6 : 
			monthdisplay = 'June' 
			break;	
		case 7 : 
			monthdisplay = 'July' 
			break;	
		case 8 : 
			monthdisplay = 'August' 
			break;	
		case 9 : 
			monthdisplay = 'September' 
			break;	
		case 10 : 
			monthdisplay = 'October' 
			break;	
		case 11 : 
			monthdisplay = 'November' 
			break;	
		case 12 : 
			monthdisplay = 'December' 
			break;	
		case 13 :
			monthdisplay = 'January'
			month = 1
			yeardisplay  = yeardisplay + 1
			break;	
	}
		
	isin(monthdisplay, yeardisplay);
	$('#title-date').html(
		'<h4 id="title-month">' + monthdisplay + '</h4><br><p style="font-size: 12px;" id="subtitle-year">' + yeardisplay + '</p>'
	);

}


function prevy(){
	yearnow = yearnow - 1;
	$('.calendar-title>h4').html(
		yearnow
	);
}
function nexty(){
	yearnow = yearnow + 1;
	$('.calendar-title>h4').html(
		yearnow
	);
}

function year(){
	$('.calendar-title').html(
		"<h4 style='margin-bottom : 20px;'> 2009 - 2020 </h4>"	
	);
	$('.select-month').css('display', 'none');
	$('.select-year').css('display', 'block');
}

function yearchange(a){
	yearnow = parseInt(a);
	$('.calendar-title>#title-year').css('display', 'block');
	$('.calendar-title>#title-decade').css('display', 'none');
	$('.calendar-title>#title-date').css('display', 'none');

	$('.calendar-title>#title-year').html(
		yearnow
	);

	$('.select-month').css('display', 'block');
	$('.select-year').css('display', 'none');

	return yearnow;
}

function monthchange(a){
	switch(a){
		case 1 : 
			monthnow = 'January' 
			break;
		case 2 : 
			monthnow = 'February' 
			break;	
		case 3 : 
			monthnow = 'March' 
			break;	
		case 4 : 
			monthnow = 'April' 
			break;	
		case 5 : 
			monthnow = 'May' 
			break;	
		case 6 : 
			monthnow = 'June' 
			break;	
		case 7 : 
			monthnow = 'July' 
			break;	
		case 8 : 
			monthnow = 'August' 
			break;	
		case 9 : 
			monthnow = 'September' 
			break;	
		case 10 : 
			monthnow = 'October' 
			break;	
		case 11 : 
			monthnow = 'November' 
			break;	
		case 12 : 
			monthnow = 'December' 
			break;		
	}

	$('.calendar-title>#title-year').css('display', 'none');
	$('.calendar-title>#title-decade').css('display', 'none');
	$('.calendar-title>#title-date').css('display', 'block');

	$('#title-date').html(
		'<h4 id="title-month">' + monthnow + '</h4><br><p style="font-size: 12px;" id="subtitle-year">' + yearnow + '</p>'
	);
	$('.calendar-title').attr('id','none');
	$('.select-month').css('display', 'none');

	isin(monthnow, yearnow);

	//ADJUST 
	$('#gotoday').css({'display': 'inline-block', 'top' : '42px'});
	$('#prevy').css({'display' : 'none', 'top' : '0px'});
	$('#prevm').css({'display': 'block' , 'top' : '0px'});
	$('#nexty').css({'display' : 'none', 'top' : '0px'});
	$('#nextm').css({'display': 'block' , 'top' : '0px'});

	return monthnow;

}

