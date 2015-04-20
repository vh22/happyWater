/* #validation
********************/
var edit_order = function () {
	"use strict";
	var validateCheckRadio = function (val) {
		$("input[type='radio'], input[type='checkbox']").on('ifChecked', function(event) {
			$(this).parent().closest(".has-error").removeClass("has-error").addClass("has-success").find(".help-block").hide().end().find('.symbol').addClass('ok');
		});
	};
	// function to initiate Validation Sample 1
	var runValidator1 = function () {
		var form1 = $('#form_useredit');
		var errorHandler1 = $('.errorHandler', form1);
		var successHandler1 = $('.successHandler', form1);
		$('#form_useredit').validate({
			errorElement: "span", // contain the error msg in a span tag
			errorClass: 'help-block',
			errorPlacement: function (error, element) { // render error placement for each input type
				if (element.attr("type") == "radio" || element.attr("type") == "checkbox") { // for chosen elements, need to insert the error after the chosen container
					error.insertAfter($(element).closest('.form-group').children('div').children().last());
				} else {
					error.insertAfter(element);
					// for other inputs, just perform default behavior
				}
			},
			ignore: "",
			rules: {
				username: {
					minlength: 2,
					maxlength: 16,
					required: true
				},
				useremail: {
					required: true,
					email: true
				},
				userphone: {
					minlength: 15,
					maxlength: 15,
					required: true
				},
				userrole: {
					required: true
				},
				usergender: {
					required: true
				},
				usercountry: {
					required: true,
					minlength: 3,
					maxlength: 15
				},
				userstreet: {
					required: true,
					minlength: 3,
					maxlength: 15
				},
				userstate: {
					required: true,
					minlength: 3,
					maxlength: 15
				},
				useraddress: {
					required: true
				},
				usercity: {
					required: true,
					minlength: 3,
					maxlength: 15
				}
			},
			messages: {
				username: {
					required: "You forgot to write the name",
					minlength: "Name must be more than 1 letters",
					maxlength: "We think there are no names longer than 16 characters"
				},
				useremail: {
					required: "You forgot to enter an email",
					email: "Email address must be in the format of name@domain.com"
				},
				userphone: {
					required: "You forgot to enter a phone",
					minlength: "The phone must be of length 10 values",
					maxlength: "The phone must be of length 10 values"
				},
				userrole: "You forgot to pick the role",
				usergender: "You forgot to pick a gender",
				usercountry: {
					required: "You forgot to enter a country",
					minlength: "Country name should be greater than 2 letters",
					maxlength: "We think there is no country names longer than 15 characters"
				},
				userstreet: {
					required: "You forgot to enter a street",
					minlength: "Street name should be greater than 2 letters",
					maxlength: "We think there is no street names longer than 15 characters"
				},
				userstate:  {
					required: "You forgot to enter a state",
					minlength: "State name should be greater than 2 letters",
					maxlength: "We think there is no state names longer than 15 characters"
				},
				useraddress: "You forgot to enter an address",
				usercity: {
					required: "You forgot to enter a city",
					minlength: "City name should be greater than 2 letters",
					maxlength: "We think there is no city names longer than 15 characters"
				}
			},
			invalidHandler: function (event, validator) { //display error alert on form submit
				successHandler1.hide();
				errorHandler1.show();
			},
			highlight: function (element) {
				$(element).closest('.help-block').removeClass('valid');
				// display OK icon
				$(element).closest('.form-group').removeClass('has-success').addClass('has-error').find('.symbol').removeClass('ok').addClass('required');
				// add the Bootstrap error class to the control group
			},
			unhighlight: function (element) { // revert the change done by hightlight
				$(element).closest('.form-group').removeClass('has-error');
				// set error class to the control group
			},
			success: function (label, element) {
				label.addClass('help-block valid');
				// mark the current input as valid and display OK icon
				$(element).closest('.form-group').removeClass('has-error').addClass('has-success').find('.symbol').removeClass('required').addClass('ok');
			},
			submitHandler: function (form) {
				successHandler1.show();
				errorHandler1.hide();
				// submit form
				$('#form_useredit').submit();
			}
		});
	};
	//function to initiate jquery.maskedinput
	var maskInputHandler = function() {
		$('.input-mask-userphone').mask('+38(999)9999999');
	};
	//function to init datepicker
	var datePickerHandler = function() {
		$('.datepicker').datepicker({
			autoclose: true,
			todayHighlight: true
		});

	};
	return {
		//main function to initiate template pages
		init: function () {
			validateCheckRadio();
			runValidator1();
			maskInputHandler();
			datePickerHandler();
		}
	};
}();
