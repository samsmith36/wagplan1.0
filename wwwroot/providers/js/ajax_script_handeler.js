var _PageRequestManager = null;

if (_PageRequestManager == null) {
    _PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
    _PageRequestManager.add_endRequest(EndRequestHandler);
}
else {
    _PageRequestManager.add_endRequest(EndRequestHandler);
}

function EndRequestHandler(sender, args) {

    $('.container')[0].jqTransform({ imgPath: 'img/jqtransform/' });

}