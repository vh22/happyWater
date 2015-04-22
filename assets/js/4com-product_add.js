/* #validation
********************/
var add_product = function () {
	"use strict";
	// function to initiate Validation Sample 1
	var runValidator1 = function () {
		var form1 = $('#form_addproduct');
		var errorHandler1 = $('.errorHandler', form1);
		var successHandler1 = $('.successHandler', form1);
		$.validator.addMethod(
			"money",
			function(value, element) {
				// put your own logic here, this is just a (crappy) example
				return value.match(/^\d{0,9}(\.\d{0,9})?$/);
			}
		);
		$('#form_addproduct').validate({
			errorElement: "span", // contain the error msg in a span tag
			errorClass: 'help-block',
			errorPlacement: function (error, element) { // render error placement for each input type
				error.insertAfter(element);
				// for other inputs, just perform default behavior
			},
			ignore: "",
			rules: {
				productname: {
					required: true,
					minlength: 3
				},
				productprice: {
					required: true,
					money: true,
					min: 0
				},
				productdetails: {
					required: true,
					minlength: 10
				},
				rewardpoints: {
					required: true,
					min: 0
				}
			},
			messages: {
				productname: {
					required: "Please enter a product name",
					minlength: "Product name must be longer than 2 characters"
				},
				productprice: {
					required: "Please enter a product price",
					min: "Price of the product can not be negative",
					money: "Please enter a price in the format 666.66"
				},
				productdetails: {
					required: "Please enter a product details",
					minlength: "Product details must be longer than 10 characters"
				},
				rewardpoints: {
					required: "Please enter a product reward points",
					min: "Reward points are the product can not be negative"
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
				$('#form_addproduct').submit();
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
