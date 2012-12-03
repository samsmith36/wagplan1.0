var _PageRequestManager = null;

$(function () {

    settblcontent_size();

    $('.filter_container').jqTransform({ imgPath: 'img/jqtransform/' });

    $('.addclient_dlg_contanet').jqTransform({ imgPath: 'img/jqtransform/' });

});



$(window).resize(function () {

    settblcontent_size();

});

function settblcontent_size() {
     $('.tblcontent').css('width', ($('#client_main_container').width() - $('.left_bar').width() - 30) + 'px');

}

if (_PageRequestManager == null) {
    _PageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
    _PageRequestManager.add_endRequest(EndRequestHandler);
}


function EndRequestHandler(sender, args) {
    $('.addclient_dlg_contanet').jqTransform({ imgPath: 'img/jqtransform/' });
    bind_uploadevent();
    bindcalendertoctrl();
    settblcontent_size();
    closedialog();
}





