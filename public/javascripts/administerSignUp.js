var valid = [false, false, false, false];
$(document).ready( function() {
	$('input[name=userName]').change(userNameTest);
	$('input[name=studentId]').change(studentIdTest);
	$('input[name=passwordRepeat]').change(passwordTest);
	$('input[type=submit]').click(checkValid);
});
var userNameTest = function() {
	var pattern = /^[a-zA-Z]{1}[a-zA-Z0-9_]{5,17}$/;
	if ($('input[name=userName]').val().match(pattern)) {
		$('#userName').addClass('gray');
		$('#userName').removeClass('red');
		$('#hint').html("");
		valid[0] = true;
	} else {
		$('#userName').addClass('red');
		$('#userName').removeClass('gray');
		$('input[name=userName]').keyup(userNameTest);
		if ($('input[name=userName]').val().length < 6) {
			$('#hint').html("用户名长度小于6");
		} else if ($('input[name=userName]').val().length > 18) {
			$('#hint').html("用户名长度大于18");
		} else {
			$('#hint').html("用户名应该以英文字母开头");
		}
		valid[0] = false;
	}
};

var studentIdTest = function() {
	var pattern = /^[1-9]{1}[0-9]{7}$/;
	if ($('input[name=studentId]').val().match(pattern)) {
		$('#studentId').addClass('gray');
		$('#studentId').removeClass('red');
		$('#hint').html("");
		valid[1] = true;
	} else {
		$('#studentId').removeClass('gray');
		$('#studentId').addClass('red');
		$('input[name=studentId]').keyup(studentIdTest);
		if ($('input[name=userName]').val()[0] == 0) {
			$('#hint').html("学号不能以0开头");
		} else {
			$("#hint").html("学号要求8位数字");
		}
		valid[1] = false;
	}
};

var passwordTest = function() {
	var pattern = /^[1-9]{1}[0-9]{10}$/;
	if ($('input[name=password]').val() == $('input[name=passwordRepeat]').val()) {
		$('#passwordRepeat').addClass('gray');
		$('#passwordRepeat').removeClass('red');
		$('#hint').html("");
		valid[2] = true;
	} else {
		$('#passwordRepeat').addClass('red');
		$('#passwordRepeat').removeClass('gray');
		$('input[name=passwordRepeat]').keyup(passwordTest);
		valid[2] = false;
	}
};

var checkValid = function() {
	userNameTest();
	studentIdTest();
	phoneNumberTest();
	for (var i=0; i<valid.length; i++) {
		if (valid[i] == false) {
			console.log(i);
			$('#hint').html('有格式错误请检查哟~');
			valid[3] = true;
			passwordTest();
			studentIdTest();
			userNameTest();
			return false;
		}
	}
	return true;
}
