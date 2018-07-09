$(document).ready(()=>{
	$('#usernameShow').text('sss')
	if ($.cookie('logIn') == 'true') {
		$('#usernameShow').text($.cookie('username'))
	} else {
		$(location).attr('href', 'http://39.108.152.24:3000/index')
	 	$(window).attr('location','http://39.108.152.24:3000/index')
	 	$(location).prop('href', 'http://39.108.152.24:3000/index')
	}
	$("#startJ").change(startJChange)
	$('#endJ').change(endJChange)
	$('#logout').click(logoutClick)	
})

let startJChange = function() {
	if ($('#startJ').val() == 'any') {
		$('#endJ').val($('#startJ').val())
	} else if (parseInt($('#endJ').val()) < parseInt($('#startJ').val()) ||
				$('#endJ').val() == 'any') {
		$('#endJ').val($('#startJ').val())
	}
}

let endJChange = function() {
	if ($('#endJ').val() == 'any') {
		$('#startJ').val($('#endJ').val())
	} else if (parseInt($('#endJ').val()) < parseInt($('#startJ').val()) ||
				$('#startJ').val() == 'any') {
		$('#startJ').val($('#endJ').val())
	}
}

let logoutClick = function() {
	$.cookie('logIn', 'false')
	$.cookie('username', '', {expires: -1})

	$(location).attr('href', 'http://39.108.152.24:3000/')
 	$(window).attr('location','http://39.108.152.24:3000/')
 	$(location).prop('href', 'http://39.108.152.24:3000/')
}

