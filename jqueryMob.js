
$(document).ready (function(){

$('#roster').click(function(){
//$('#roster').attr("href", "http://flyers.nhl.com/club/roster.htm");
document.addEventListener("#roster", roster, true);
alert("Roster Working!");
	});

$('#schedule').click(function(){
//$('#schedule').attr("href", "http://flyers.nhl.com/club/schedule.htm");
document.addEventListener("#schedule", schedule, true);
alert("Schedule Working!");
	});

$('#record').click(function(){
//$('#record').attr("href", "http://flyers.nhl.com/club/gamelog.htm");

alert("Record Working!");
	});

$('#scratches').click(function(){
//$('#scratches').attr("href", "http://flyers.nhl.com/club/page.htm?id=36232");
document.addEventListener("#scratches", scratches, true);
alert("Scratches Working!");
	});

$('#updates').click(function(){
//$('#updates').attr("href", "http://flyers.nhl.com/club/page.htm?id=64095");
document.addEventListener("#updates", updates, true);
alert("Updates Working!");
	});

$('#botsocfb').click(function(){
//$('#botsocfb').attr("href", "http://www.facebook.com/philadelphiaflyers?fref=ts");
document.addEventListener("#botsocfb", botsocfb, true);
alert("Facebook Working!");
	});

$('#botsoctw').click(function(){
//$('#botsoctw').attr("href", "http://twitter.com/NHLFlyers");
document.addEventListener("#botsoctw", botsoctw, true);
alert("Twitter Working!");
	});

});



