$(document).ready(()=>{
	$('#usernameShow').text('sss')
	if ($.cookie('logIn') == 'true') {
		$('#usernameShow').text($.cookie('username'))
	} else {
		$(location).attr('href', '/index')
	 	$(window).attr('location','/index')
	 	$(location).prop('href', '/index')
	}
	$('#logout').click(logoutClick)	
})

let logoutClick = function() {
	$.cookie('logIn', 'false')
	$.cookie('username', '', {expires: -1})

	$(location).attr('href', '/')
 	$(window).attr('location','/')
 	$(location).prop('href', '/')
}
