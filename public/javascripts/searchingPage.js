$(document).ready( function() {
	$('input[type=submit]').click(sendAjax);
});

let sendAjax = function() {
	$.ajax({
		type: "POST",
		data: {
			week: $("input[name='week']").val(),
			
		},
		datatype: 'json',
		success: function(data) {

						}
	})
}