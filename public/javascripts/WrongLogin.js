let t = 3;
$(document).ready( function() {
	setTimeout(()=>{
		window.history.back(-1); 
	}, 3000)
	setInterval(()=>{
		t--
		$('#timecount').text(t)
	}, 1000)
	$('#login').click(backToLogin)
	$('#regist').click(backToRegist)
});

let backToLogin = () => {
	window.history.back(-1); 
}

let backToRegist = () => {
	$(location).attr('href', 'http://39.108.152.24:3000/signup')
	$(window).attr('location','http://39.108.152.24:3000/signup')
	$(location).prop('href', 'http://39.108.152.24:3000/signup')
}