"use strict";


/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Latesha Campbell
   Date:   10/19/23

*/

showClock();
setInterval("showClock()", 1000);
 




/* run and display clock */

function showClock() { 
	var thisDay = new Date();
	var localDate = thisDay.toLocaleDateString();
	var localTime = thisDay.toLocaleTimeString();
	
	document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;

	var j4Date = nextJuly4(thisDay);
	j4Date.setHours("nextJuly4()", 21:00);

	/* Calculate the days, hrs, min, secs until July 4th */
	var days = (j4date - thisDay)/(1000*60*60*24);
	var hrs = (days - Math.floor(days))*24;
	var mins = (hrs - Math.floor(hrs))*60;
	var secs = (mins - Math.floor(mins))*60;
	
	document.getElementById("dLeft").textContent = Math.floor(days);
	document.getElementById("hLeft").textContent = Math.floor(hrs);
	document.getElementById("mLeft").textContent = Math.floor(mins);
	document.getElementById("sLeft").textContent = Math.floor(secs);
}	

function nextJuly4(currentDate) {
	var cYear = currentDate.getFullYear();
	var jDate = new Date("July 4, 2018");
	jDate.setFullYear(cYear);
	if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
	return jDate;
}	
