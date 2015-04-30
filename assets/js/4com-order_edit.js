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
		var form1 = $('#form_editorder');
		var errorHandler1 = $('.errorHandler', form1);
		var successHandler1 = $('.successHandler', form1);
		$.validator.addMethod(
			"customDate",
			function(value, element) {
				// put your own logic here, this is just a (crappy) example
				//				return value.match(/^\d\d?\-\d\d?\-\d\d\d\d$/);
				return value.match(/^\d\d\d\d?\-\d\d?\-\d\d$/);
			}
		);
		$.validator.addMethod(
			"money",
			function(value, element) {
				// put your own logic here, this is just a (crappy) example
				return value.match(/^\d{0,9}(\.\d{0,9})?$/);
			}
		);
		$('#form_editorder').validate({
			errorElement: "span", // contain the error msg in a span tag
			errorClass: 'help-block',
			errorPlacement: function (error, element) { // render error placement for each input type
				error.insertAfter(element);
				// for other inputs, just perform default behavior
			},
			ignore: "",
			rules: {
				orderdate: {
					customDate : true
				},
				orderprice: {
					required: true,
					min: 0,
					money: true
				},
				orderstatus: {
					required: true
				},
				productid: {
					required: true,
					min: 0
				},
				creditappies: {
					required: true,
					min: 0
				},
				prefdate: {
					customDate : true
				},
				prefsession: {
					required: true
				},
				emptybottle: {
					required: true,
					min: 0
				},
				receivedby: {
					required: true
				}
			},
			messages: {
				orderdate: "Please enter a date in the format dd/mm/yyyy",
				orderprice: "Please enter a price in the format 666.66",
				orderstatus: "Please select your order status",
				productid: "Please select the product id",
				creditappies: "Please enter a credit appies",
				prefdate: "Please enter a date in the format dd/mm/yyyy",
				prefsession: "Please select the session more comfortable for client",
				emptybottle: "Please enter the number of empty bottles",
				receivedby: "Please enter the recipient's"
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
				//				$('#form_editorder').submit();
				form.submit();
			}
		});
	};
	// function to initiate Validation modal form
	var runValidator2 = function () {
		var form2 = $('#form_add-new-product');
		var errorHandler2 = $('.errorHandler', form2);
		var successHandler2 = $('.successHandler', form2);
		$('#form_add-new-product').validate({
			errorElement: "span", // contain the error msg in a span tag
			errorClass: 'help-block',
			errorPlacement: function (error, element) { // render error placement for each input type
				error.insertAfter(element);
				// for other inputs, just perform default behavior
			},
			ignore: "",
			rules: {
				new_product_name: {
					required: true
				},
				new_product_quantity: {
					customDate : true
				}
			},
			messages: {
				new_product_name: "Please select product name",
				new_product_quantity: "Please select product quantity"
			},
			invalidHandler: function (event, validator) { //display error alert on form submit
				successHandler2.hide();
				errorHandler2.show();
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
				successHandler2.show();
				errorHandler2.hide();
				form.submit();
			}
		});
	};
	//function to init datepicker
	var datePickerHandler = function () {
		$('.datepicker').datepicker({
			format:  "yyyy-mm-dd",
			autoclose: true,
			todayHighlight: true
		});

	};
	//function to init custom inputs
	var customInputs = function () {
		$("input[name='new-product-quantity']").TouchSpin({
			verticalbuttons: true,
			verticalupclass: 'fa fa-plus',
			verticaldownclass: 'fa fa-minus'
		});
		$("input[name='edit-product-quantity']").TouchSpin({
			verticalbuttons: true,
			verticalupclass: 'fa fa-plus',
			verticaldownclass: 'fa fa-minus'
		});
	}
	return {
		//main function to initiate template pages
		init: function () {
			validateCheckRadio();
			runValidator1();
			runValidator2();
			datePickerHandler();
			customInputs();
		}
	};
}();
