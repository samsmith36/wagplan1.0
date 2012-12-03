$(document).ready(function () {

    $(".clsdialogBook").jqTransform();
    $(".clsdialogBook .jqTransformSelectWrapper").css("width", "187px");
    $(".clsdialogBook .jqTransformSelectWrapper ul").css("width", "183px");
    $(".clsdialogBook .jqTransformSelectWrapper ul").css('max-height', '150px');
    $(".clsdialogBook .jqTransformSelectWrapper ul").css("overflow", "auto");
    $('.dobtextboxcls').datepicker();


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
);

var appid = "";

var _PageRequestManager = null;

var _dlgid = '';
var _labelBookingTitleid = '';
var _literalid = '';
var _LinkConfirmid = '';
var _ctrl_containaerid = '';
var _LinkCloseid = '';

function getfirstpetbyuserid() {


}

function BookTime(ctrl_containaerid, LinkConfirmid, LinkCloseid, labelBookingTitleid, dlgid, hiddenid, literalid, hiddenliteralid, id, datetime, userid) {
    if (_PageRequestManager == null) {
        _PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
        _PageRequestManager.add_endRequest(EndRequestHandler);
    }

    function EndRequestHandler(sender, args) {
        var _var = 1;
        // alert(sender);
        // alert(args);
        /*  if ($("#" + dlgid).length > 0) {
        $('#'+labelBookingTitleid)[0].innerHTML = "Confirmation";
        $('#'+literalid)[0].innerHTML = "Your appointment for " + $("#" + hiddenliteralid).val() + " has been made. You will receive a confirmation email shortly.";
        $("#"+LinkConfirmid).css("display", "none");
        $("#"+ctrl_containaerid).css("display", "none");
        $("#" + LinkCloseid).css("display", "");

        _dlgid = dlgid;
        _labelBookingTitleid = labelBookingTitleid;
        _literalid = literalid;
        _LinkConfirmid = LinkConfirmid;
        _ctrl_containaerid = ctrl_containaerid;
        _LinkCloseid = LinkCloseid;*/

        //  $("#" + dlgid).find('ui-icon-closethick').unbind('click');
        //   $("#" + dlgid).find('ui-icon-closethick').bind('click', function () {
        //      alert(dlgid);
        //  });

        //  }
        $(".clsdialogBook").removeClass('jqtransformdone').jqTransform();
        $(".clsdialogBook .jqTransformSelectWrapper").css("width", "187px");
        $(".clsdialogBook .jqTransformSelectWrapper ul").css("width", "183px");
        $(".clsdialogBook .jqTransformSelectWrapper ul").css('max-height', '150px');
        $(".clsdialogBook .jqTransformSelectWrapper ul").css("overflow", "auto");

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

    $("#" + hiddenid).val(id);
    $("#" + hiddenliteralid).val($('#ctl00_ContentPlaceHolder1_DropDownReason option:selected').text()+" at " + datetime);
    appid = "appid=" + id;
    var dlg = $("#" + dlgid).dialog({
        title: "Book Your Appointment",
        autoOpen: true,
        width: 675,
        draggable: true,
        resizable: false,
        modal: true,
        closeOnEscape: true,
        position: [(screen.width / 2) - 337, 5],
        open: function (type, data) {

            $(this).parent().appendTo("form");
            $("#" + literalid).text($('#ctl00_ContentPlaceHolder1_DropDownReason option:selected').text()+" at " + datetime);
            $("#" + LinkCloseid).css("display", "none");
        },
        close: CloseDialog
    });
    $("#" + dlgid).dialog('open');
    dlg.parent().appendTo("form");
}
function CloseDialog() {
    resetDialog();
    $('#' + _dlgid).dialog('close');
    return false;
}

function resetDialog() {

    if ($("#" + _dlgid).length > 0) {
        $('#' + _labelBookingTitleid)[0].innerHTML = "Please complete the information below to book	your appointment instantly. No credit card required!";
        $('#' + _literalid)[0].innerHTML = "";
        $("#" + _LinkConfirmid).css("display", "");
        $("#" + _ctrl_containaerid).css("display", "");
        $("#" + _LinkCloseid).css("display", "none");

        $("#" + _ctrl_containaerid + "table tbody tr td input[type=text]").each(function () {
            $(this).val('');
        });

        _dlgid = '';
        _labelBookingTitleid = '';
        _literalid = '';
        _LinkConfirmid = '';
        _ctrl_containaerid = '';
        _LinkCloseid = '';
    }

}

function pageLoad() {
    zoomToMarkers();
    setupDatePicker();
    setupSlider();
    $("#weeksdays_filter input[type='checkbox']").custCheckBox();
}