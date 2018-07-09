$(document).ready(()=>{
	$('#usernameShow').text('sss')
	if ($.cookie('logIn') == 'true') {
		$('#usernameShow').text($.cookie('username'))
	} else {
		$(location).attr('href', 'http://39.108.152.24:3000/index')
	 	$(window).attr('location','http://39.108.152.24:3000/index')
	 	$(location).prop('href', 'http://39.108.152.24:3000/index')
	}
	$('#logout').click(logoutClick)	
})

let logoutClick = function() {
	$.cookie('logIn', 'false')
	$.cookie('username', '', {expires: -1})

	$(location).attr('href', 'http://39.108.152.24:3000/')
 	$(window).attr('location','http://39.108.152.24:3000/')
 	$(location).prop('href', 'http://39.108.152.24:3000/')
}
