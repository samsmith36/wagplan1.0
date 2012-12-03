var appid = "";
$("#dialogPanel").html("");
var _PageRequestManager = null;
var _dlgid = '';
var _labelBookingTitleid = '';
var _literalid = '';
var _LinkConfirmid = '';
var _ctrl_containaerid = '';
var _LinkCloseid = '';

function reload() {

    $(".clsdialogBook .jqTransformSelectWrapper").css("width", "187px");
    $(".clsdialogBook .jqTransformSelectWrapper ul").css("width", "183px");
    $(".clsdialogBook .jqTransformSelectWrapper ul").css('max-height', '150px');
    $(".clsdialogBook .jqTransformSelectWrapper ul").css("overflow", "auto");
    $('.dobtextboxcls').datepicker();


    $(".clspettypes").bind('change', function () {



    });


    $(".clsdialogBook .ddlbreeds div.jqTransformSelectWrapper select").each(function () {

        if (this.disabled) {
            $(this.parentElement).removeClass('dropdownactiv');
            $(this.parentElement).addClass('dropdowndisable');
        }
        else {
            $(this.parentElement).removeClass('dropdowndisable');
            $(this.parentElement).addClass('dropdownactiv');
        }

    });

}


$(document).ready(function () {

    $("#customDDL").jqTransform(); 
   $(".clsdialogBook").jqTransform();

   reload();
   

}
);



function BookTime(dlgid, hiddenid, literalid, hiddenliteralid, id, datetime, userid) {

  if (_PageRequestManager == null) {
        _PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
        _PageRequestManager.add_endRequest(EndRequestHandler);
    }
    function EndRequestHandler(sender, args) {
        var _var = 1;

        $("#customDDL").removeClass('jqtransformdone').jqTransform(); 
    $(".clsdialogBook").removeClass('jqtransformdone').jqTransform();

   // reload();



    }


    $("#" + hiddenid).val(id);
   $("#" + hiddenliteralid).val($('#ctl00_ContentPlaceHolder1_DropDownReason option:selected').text()+" at " + datetime);
    appid = "appid=" + id;
    var dlg = $("#" + dlgid).dialog({
        title:"Book Your Appointment",
        autoOpen: true,
        width: 675,
        draggable: false,
        resizable: false,
        modal: true,
        position: [(screen.width / 2) - 337, 5],
        closeOnEscape: true,
        open: function (type, data) {
           // $(this).parent().appendTo($("#dialogPanel"));
            //$(".ui-dialog.ui-widget.ui-widget-content.ui-corner-all").remove();
            $(this).parent().appendTo($("form")); 
            $("#" + literalid).text($('#ctl00_ContentPlaceHolder1_DropDownReason option:selected').text() + " at " + datetime);
        },
        create: function (event, ui) { $("#dialogPanel").html(""); }
    });
  //  $("#" + dlgid).dialog('open');
   // dlg.parent().appendTo("form");
}
function CloseDialog(dlgid) {
   // $("#" + dlgid).dialog('close');
   //  window.location.reload();   
   // return false;
}

var moreReviewsShow = false;
function moreReviews() {
    $('#moreReviews').slideToggle();
    if (moreReviewsShow) {
        moreReviewsShow = false;
        $('#more_reviews').html('Read more reviews...');
    }
    else {
        moreReviewsShow = true;
        $('#more_reviews').html('Read fewer reviews...');
    }

}



		