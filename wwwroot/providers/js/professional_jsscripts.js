
$(document).ready(function () {

    $(function () {
        $('.container').jqTransform({ imgPath: 'img/jqtransform/' });
        // $('.visitreasons_contentcontainer div div.jqTransformSelectWrapper').css('z-index', '0');
        var $ddlcounter = $('.visitreasons_contentcontainer div div.jqTransformSelectWrapper').length;
        $('.visitreasons_contentcontainer div div.jqTransformSelectWrapper').each(function () {
            $(this).css('z-index', $ddlcounter);
            $ddlcounter = $ddlcounter - 1;
        })
    });

});