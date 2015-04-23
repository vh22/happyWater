/* #validation
********************/
var add_transaction = function () {
	"use strict";
	// function to initiate Validation Sample 1
	var runValidator1 = function () {
		var form1 = $('#form_addtransaction');
		var errorHandler1 = $('.errorHandler', form1);
		var successHandler1 = $('.successHandler', form1);
		$.validator.addMethod(
			"money",
			function (value, element) {
				// put your own logic here, this is just a (crappy) example
				return value.match(/^\d{0,9}(\.\d{0,9})?$/);
			}
		);
		$('#form_addtransaction').validate({
			errorElement: "span", // contain the error msg in a span tag
			errorClass: 'help-block',
			errorPlacement: function (error, element) { // render error placement for each input type
				error.insertAfter(element);
				// for other inputs, just perform default behavior
			},
			ignore: "",
			rules: {
				username: {
					required: true,
					minlength: 3
				},
				transactionsum: {
					required: true,
					money: true,
					min: 0
				},
				ordernumber: {
					required: true,
					min: 0
				},
				transactiontype: {
					required: true
				}
			},
			messages: {
				username: {
					required: "Please enter a user name",
					minlength: "User name must be longer than 2 characters"
				},
				transactionsum: {
					required: "Please enter a transaction sum",
					min: "Transaction sum can not be negative",
					money: "Please enter a sum in the format 666.66"
				},
				transactiontype: "Please select the transaction type"
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
				form.submit();
			}
		});
	};
	return {
		//main function to initiate template pages
		init: function () {
			runValidator1();
		}
	};
}();
