var order_list = function() {
	"use strict";
	//function to initiate DataTable
	//DataTable is a highly flexible tool, based upon the foundations of progressive enhancement,
	//which will add advanced interaction controls to any HTML table
	//For more information, please visit https://datatables.net/
	var runDataTable_example1 = function() {

		var oTable = $('#orders-table').dataTable({
			"columnDefs": [
				{ "orderable": false, "targets": 11 }
			],
			// set default sorted column
			"aaSorting" : [[2, 'desc']],
			// lenguage
			"oLanguage" : {
				"sLengthMenu" : "Show _MENU_ Rows",
				"sSearch" : "",
				"oPaginate" : {
					"sPrevious" : "",
					"sNext" : ""
				}
			},
			// set number of visible rows
			"aLengthMenu" : [[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"] // change per page values here
											],
			// set the initial value
			"iDisplayLength" : 10,
		});
		$('#orders-table_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
		// modify table search input
		$('#orders-table_wrapper .dataTables_length select').addClass("m-wrap small");
		// modify table per page dropdown
		$('#orders-table_wrapper .dataTables_length select').select2();
		// initialzie select2 dropdown
		$('#orders-table_column_toggler input[type="checkbox"]').change(function() {
			/* Get the DataTables object again - this is not a recreation, just a get of the object */
			var iCol = parseInt($(this).attr("data-column"));
			var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
			oTable.fnSetColumnVis(iCol, ( bVis ? false : true));
		});
	};
	return {
		//main function to initiate template pages
		init : function() {
			runDataTable_example1();
		}
	};
}();
