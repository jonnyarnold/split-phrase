// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44805097-1', 'proverbica.com');
ga('send', 'pageview');

// Changes the background based on the global above
function changeBackground()
{
    if ($('#curtain').css('opacity') == 0) {
		$('#curtain').animate({'opacity': 1}, 500, function() {
			var regexVal = new RegExp(/[\w]+.jpg/);
			var currentBackground = $('body').css('background-image').match(regexVal)[0];
			var newBackground = currentBackground;
			
			while (currentBackground == newBackground) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "/bg", false);
        xmlHttp.send(null);
				newBackground = xmlHttp.responseText;
			}
			
			$('body').css({'background': '#000 url('+newBackground+') no-repeat center', 'background-size': 'cover'});
			$('#saying').animate({'opacity' : 1}, 500);
		});
	} else {
		$('#saying').animate({'opacity' : 1}, 500);
	}
    $('#curtain').animate({'opacity': 0}, 500);
}

function get_saying() {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "/saying", false);
	xmlHttp.send(null);
	var fadeOutTime = 500;
	
	// Upon first run the animation cannot hold up the callback
	if ($('#saying').css('opacity') == 0) {
		fadeOutTime = 0;
	}
	
	$('#saying').animate({'opacity' : 0}, fadeOutTime, function() {
		$('#saying').html(xmlHttp.responseText);
		$('#tweet').attr('href', generate_tweet_url(xmlHttp.responseText))
	});
	
    changeBackground();
}

// Creates a Twitter Share URL for use on a Tweet button
// as documented @ https://dev.twitter.com/docs/tweet-button
function generate_tweet_url(saying) {
	url = window.location.origin
	tweet_text = "\"" + saying + "\" "; // Twitter adds URL automatically

	return "https://twitter.com/share" +
		"?url=" + url +
		"&text=" + encodeURIComponent(tweet_text)
}
