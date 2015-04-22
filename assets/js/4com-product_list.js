var product_list = function () {
	"use strict";
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/
	var runDataTable_example1 = function () {

		var oTable = $('#table-home1, #table-home2, #table-home3').dataTable({
			"bLengthChange": false,
			"bPaginate": false,
			"bProcessing": true,
			"bSort": false,
			"bInfo": false,
			"oLanguage" : {
				"sLengthMenu" : "Show _MENU_ Rows",
				"sSearch" : "",
				"oPaginate" : {
					"sPrevious" : "",
					"sNext" : ""
				}
			},
			"aaSorting" : [[0, 'asc']],
			// set the initial value
			"iDisplayLength" : 10
		});
		// add placeholder to search field
		$('#table-home1_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
	};
	return {
		//main function to initiate template pages
		init : function () {
			runDataTable_example1();
		}
	};
}();
