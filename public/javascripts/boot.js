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
		$(location).attr('href', 'http://39.108.152.24:3000/query')
	 	$(window).attr('location','http://39.108.152.24:3000/query')
	 	$(location).prop('href', 'http://39.108.152.24:3000/query')
	})

	$('#queryTeacherInfo').click(()=>{
		$(location).attr('href', 'http://39.108.152.24:3000/teachers')
	 	$(window).attr('location','http://39.108.152.24:3000/teachers')
	 	$(location).prop('href', 'http://39.108.152.24:3000/teachers')
	})

	$('#gotoPeasonalPage').click(()=>{
		$(location).attr('href', 'http://39.108.152.24:3000/index')
	 	$(window).attr('location','http://39.108.152.24:3000/index')
	 	$(location).prop('href', 'http://39.108.152.24:3000/index')
	})
})