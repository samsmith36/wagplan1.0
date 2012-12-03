// JavaScript Document

$(function () {
    $('.leftselectors select').jqTransSelect({ imgPath: 'img/jqtransform/' });
   
    //$('.slotassigndialog').jqTransSelect({ imgPath: 'img/jqtransform/' });
});
	
$(".fourcornerrnd").corner();
$('.fourcornerrndfive').corner('5px')
$(".twotopcornerrnd").corner('top');
$(".twobottomcornerrnd").corner('bottom');

$(function () {

    $(".hovertextlost").each(function () {
        var $defaultvalue = $(this).val();
        var isclicked = false;
        $(this).bind('click', function () {
            isclicked = true;
            if ($defaultvalue == $(this).val())
                $(this).val('');
        });
        $(this).bind('mouseenter', function () {
            $(this).addClass("textboxactive");
            if ($defaultvalue == $(this).val())
                $(this).val('');
        });
        $(this).bind('mouseout', function () {
            if ($.trim($(this).val()) == '' && !isclicked) {
                $(this).val($defaultvalue);
                $(this).removeClass("textboxactive");
            }
        });
    });

    $(".password").each(function () {
        var $defaultvalue = $(this).val();
        var isclicked = false;
        $(this).bind('click', function () {
            isclicked = true;
            if ($defaultvalue == $(this).val()) {
                $(this).val('');
                this.setAttribute('type', 'password');
            }
            else {
                if ($.trim($(this).val()) == '' && !isclicked) {
                    this.setAttribute('type', 'text');
                   // $(this).val($defaultvalue);
                }
            }
        });

        $(this).bind('focus', function () {
            isclicked = true;
            if ($defaultvalue == $(this).val()) {
                $(this).val('');
                this.setAttribute('type', 'password');
            }
            else {
                if ($.trim($(this).val()) == '' && !isclicked) {
                    this.setAttribute('type', 'text');
                    // $(this).val($defaultvalue);
                }
            }
        });
    });

    $('.container').jqTransform({ imgPath: 'img/jqtransform/' });
    


});
		
		
	

	
	