let showMode = 1;
$(document).ready(()=>{
	if ($.cookie('logIn') == 'true') {
		$('#usernameShow').text($.cookie('username'))
	} else {
		$(location).attr('href', '/index')
	 	$(window).attr('location','/index')
	 	$(location).prop('href', '/index')
	}

	if ($('.dataRow').length == 0) {
		$('table').hide()
		$('#changeShowFunc').hide()
		$('#logo').text('这个时间没有一个空教室哎~')
	}

	$('#logout').click(logoutClick)
	$('#changeShowFunc').click(changeShowFunc)
})

let changeShowFunc = function() {
	if (showMode == 1) {
		$('#showTable').hide()
		$('#otherShowTable').show()
		showMode = 2
	} else {
		$('#showTable').show()
		$('#otherShowTable').hide()
		showMode = 1
	}
}

let logoutClick = function() {
	$.cookie('logIn', 'false')
	$.cookie('username', '', {expires: -1})

	$(location).attr('href', '/')
 	$(window).attr('location','/')
 	$(location).prop('href', '/')
}
