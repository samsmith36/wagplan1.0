/*
 * jQuery File Upload Plugin JS Example 6.5.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global $, window, document */

$(function () {
	'use strict';
	//debugger;
	// Initialize the jQuery File Upload widget:
	//$('#fileupload').fileupload({ autoUpload: true });


	// Enable iframe cross-domain access via redirect option:
	/*$('#fileupload').fileupload(
	'option',
	'redirect',
	window.location.href.replace(
	/\/[^\/]*$/,
	'/cors/result.html?%s'
	),
	done: function ( e, data ) {
	var result = $( 'pre', data.result ).text();
	if( result != null && $.trim( result ) != '' )
	$( 'a#attachment' ).html( result );
	}
	);*/

	$('#fileupload').fileupload({
		autoUpload: true ,
		forceIframeTransport: true,
		maxFileSize: 5000000,
		acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
		url: 'Handler.ashx',
		dataType: 'json',
		done: function (e, data) {
			//debugger;

			$('<p/>').html("<img src='files/"+data.result[0].name+"' width='100' />").appendTo(document.body);

			$.each(data.result, function (index, file) {
				//$('<p/>').html("<img src='files/"+file.name+"' width='100' />").appendTo(document.body);
				//debugger;
				//$.each(file, function (index, file1) {
				//	$('<p/>').text(file1).appendTo(document.body);
				//});
			});
			//$('.fileupload_container').hide();

		},
		progress: function (e, data) {
				var progress = parseInt(data.loaded / data.total * 100, 10);
				data.context.find('.progress-bar div').css('width',  progress + '%');
				console.log(progress);
		},
		fail: function (e, data) { alert("Only images!"); console.log(data); },
		/*add: function (e, data) {
				data.context = $(".progress-bar div");
				data.submit();
			},
			progress: function (e, data) {
				var progress = parseInt(data.loaded / data.total * 100, 10);
				data.context.find('.progress-bar div').css('width',  progress + '%');
				console.log(progress);
		},*/

	});


	// Load existing files:
	/*
	$('#fileupload').each(function () {
	var that = this;
	$.getJSON(this.action, function (result) {
	if (result && result.length) {
	alert(result);
	$(that).fileupload('option', 'done')
	.call(that, null, { result: result });
	}
	});
	});
	*/


});
