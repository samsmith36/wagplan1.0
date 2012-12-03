var _PageRequestManager = null;

if (_PageRequestManager == null) {
    _PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
    _PageRequestManager.add_endRequest(EndRequestHandler);
}


function EndRequestHandler(sender, args) {
if(dlg_tooltip != null)
    $('.slotassigndialog').jqTransform();
}
