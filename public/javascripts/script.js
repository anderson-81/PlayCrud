$(document).ready(function () {
	$(".form_datetime").datetimepicker({
		format: "yyyy-mm-dd",
		pickTime: false,
		autoclose: true,
		linkField: "birthday",
		linkFormat: "yyyy-mm-dd",
		viewMode: 'years'
	});
});

$("#password").val("Admin121181");

$("#isbn").attr("maxlength", "13");
$("#title").attr("maxlength", "100");


$("#isbn").keydown(function (e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		// Allow: Ctrl+A, Command+A
		(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
		// Allow: home, end, left, right, down, up
		(e.keyCode >= 35 && e.keyCode <= 40)) {
		// let it happen, don't do anything
		return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
});

$(function () {
	$('#price').maskMoney({
		thousands: '',
		decimal: '.'
	});
})

$("#isbn").attr("maxlength", "13");
$("#title").attr("maxlength", "100");


$("#isbn").keydown(function (e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		// Allow: Ctrl+A, Command+A
		(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
		// Allow: home, end, left, right, down, up
		(e.keyCode >= 35 && e.keyCode <= 40)) {
		// let it happen, don't do anything
		return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
});

$(function () {
	$('#price').maskMoney({
		thousands: '',
		decimal: '.'
	});
});