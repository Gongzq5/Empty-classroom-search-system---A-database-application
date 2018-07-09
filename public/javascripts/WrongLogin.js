$(document).ready( function() {
	$('#login').click(backToLogin)
	$('#regist').click(backToRegist)
});

let backToLogin = () => {
	window.history.back(-1); 
}

let backToRegist = () => {
	$(location).attr('href', '/signup')
	$(window).attr('location','/signup')
	$(location).prop('href', '/signup')
}