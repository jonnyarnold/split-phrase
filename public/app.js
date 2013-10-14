  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44805097-1', 'young-escarpment-2304.herokuapp.com');
  ga('send', 'pageview');
  
var bgCounter = 0,
    backgrounds = [
       "lion.jpg",
       "monkey.jpg"
    ];

// Changes the background based on the global above
// TODO: Get rid of global
function changeBackground()
{
    if ($('#curtain').css('opacity') == 0) {
		$('#curtain').animate({'opacity': 1}, 500, function() {
			bgCounter = (bgCounter+1) % backgrounds.length;
			$('body').css('background', '#000 url('+backgrounds[bgCounter]+') no-repeat right center');
		});
	}
    $('#curtain').animate({'opacity': 0}, 500);
}

function get_saying() {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "/saying", false);
	xmlHttp.send(null);

	var saying = document.getElementById("saying");
	saying.innerHTML = xmlHttp.responseText;
    changeBackground();
}