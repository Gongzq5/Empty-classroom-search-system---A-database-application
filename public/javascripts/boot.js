$(document).ready(()=>{
	if ($.cookie('logIn') == 'true') {
		$('#welcomeInfo').css({
			"color": "white",
			"font-size": "28px"
		})
		$('#welcomeInfo').html("Dear  <i>" + $.cookie('username') + "</i><br/>Welcome!")
	} else {
		$('#welcomeInfo').css({
			"color": "white",
			"font-size": "16px"
		})
		$('#welcomeInfo').html("Query the empty class room")
	}

	$('#queryEmptyClassroom').click(()=>{
		$(location).attr('href', '/query')
	 	$(window).attr('location','/query')
	 	$(location).prop('href', '/query')
	})

	$('#queryTeacherInfo').click(()=>{
		$(location).attr('href', '/teachers')
	 	$(window).attr('location','/teachers')
	 	$(location).prop('href', '/teachers')
	})

	$('#gotoPeasonalPage').click(()=>{
		$(location).attr('href', '/index')
	 	$(window).attr('location','/index')
	 	$(location).prop('href', '/index')
	})
})