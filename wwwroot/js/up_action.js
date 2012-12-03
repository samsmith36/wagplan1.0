var x = 10;
/* update user information */ 
function updateprofile(obj) {
    x = 20;
    if (Page_ClientValidate("ownwerinfovalidte")) {
        updateownerprofile();
  }
  else {
      showerror('Please fill required fields.');
  }
}
function getaccountprototype() {
    var _loggedaccount;
    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/GetAccountprototype",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            // Do something interesting here.
            _loggedaccount  = msg.d;
        },
        error: function (errormsg) {
            alert(errormsg);
        }
    });
}
var $_account_prototype = null;
var $_messgaeinterval = 7000;
function showmessage(msg) {
    $('#informationlabel')[0].innerHTML = msg;
    $('#informationlabel').removeClass('infoerrorcls');
    $('#informationlabel').addClass('infomgcls');
    $('#informationpanel').show();
    setTimeout(hidemsg, $_messgaeinterval);
    

}

function showerror(msg) {
    $('#informationlabel')[0].innerHTML = msg;
    $('#informationlabel').removeClass('infomgcls');
    $('#informationlabel').addClass('infoerrorcls');
    $('#informationpanel').show();
    setTimeout(hidemsg, $_messgaeinterval);

}

function hidemsg() { 
$('#informationpanel').hide();
}


function updateownerprofile() {

    var _inputs = jQuery('#tabs-1 :input');
    var values = {};
     _inputs.each(function () {

         if (this.type == 'radio') {
                values[this.name.replace('ctl00$UserProfile$','')] = jQuery('input[type="radio"][name="' + this.name + '"]:checked').val();
            }
            else if (this.type == 'checkbox') {
                values[this.name.replace('ctl00$UserProfile$', '')] = this.checked ? true : false; 
             }
            else
                values[this.name.replace('ctl00$UserProfile$', '')] = jQuery(this).val();

        });

        var data = Sys.Serialization.JavaScriptSerializer.serialize(values);

    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/updateownerprofile",
        data: "{items:'" + data + "'}" ,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            // Do something interesting here.
            showmessage(msg.d);
        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });
}



/* update user information */


/* update pet information */

function updatepetinformation(obj) {
   
    if (Page_ClientValidate("petInfoValidationGroup")) {
        updatepetprofile();
    }
    else {
        showerror('Please fill required fields.');
    }
}

function updatepetprofile() {
    var _inputs = jQuery('#tabs-1-1 :input');
    var values = {};var photos = {};var records = {};
    _inputs.each(function () {
        if (this.type != 'button' && this.type != 'image' && this.type != 'file'&& this.name != "")
            if (this.type == 'radio') {
                values[this.name.replace('ctl00$UserProfile$', '')] = jQuery('input[type="radio"][name="' + this.name + '"]:checked').val();
            }
            else if (this.type == 'checkbox') {
                values[this.name.replace('ctl00$UserProfile$', '')] = this.checked ? true : false;
            }
            else
                values[this.name.replace('ctl00$UserProfile$', '')] = jQuery(this).val();

    });
    
    if ($('#petimagelist').children().length > 0) {
            var counter = 0;
            $('#petimagelist li').each(function () {
                photos[counter] = $(this).find('input')[0].value; counter = counter + 1;
            });
        values['photos'] = photos;
    }

    if ($('#petrecodelist').children().length > 0) {
        var counter = 0;
        $('#petrecodelist li').each(function () {
            records[counter] = $(this).find('input')[0].value; counter = counter + 1;
        });
        values['records'] = records;
    }
    


    var data = Sys.Serialization.JavaScriptSerializer.serialize(values);



    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/updatepetinformation",
        data: "{items:'" + data + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            // Do something interesting here.
            showmessage(msg.d);
            updatesavedpetinfolist();
            if ($('#ctl00_UserProfile_currentpetid').val() != '') {
                loadpetinformation($('#ctl00_UserProfile_currentpetid').val());
            }
        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });
}



/* update pet information */

/* Load pet information */
function loadpetinformation(petid) {
    $('#ctl00_UserProfile_currentpetid').val(petid);

    var data;

    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/getpetinformation",
        data: "{petid:'" + petid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            data = Sys.Serialization.JavaScriptSerializer.deserialize(msg.d);
            displaypetinformation(data);
            
        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });

}

function resetdropdownoption(elem) {

    var mySelect = $('#' + elem);

    //find the index of that option
    var index = 0;

    //trigger the click on the corresponding jqTranfsform element
    mySelect.prev('ul').find('li').eq(index).find('a').click();

}


function resetpetinfoform() {
    $('#ctl00_UserProfile_txt_petname').val('');
    // $('#ctl00_UserProfile_ddl_pettype').val(data[0].pettypeid);
    $('#ctl00_UserProfile_txt_petdob').val('');
    $('#ctl00_UserProfile_txt_weight').val('');
    //$('#ctl00_UserProfile_ddl_gender').val(data[0].gender);
    //$('#ctl00_UserProfile_ddl_breed').val(data[0].breedid);
    $('#ctl00_UserProfile_txt_immuni').val('');
    $('#ctl00_UserProfile_txt_spayed').val('');
    $('#ctl00_UserProfile_txt_addanote').val('');

    resetdropdownoption('ctl00_UserProfile_ddl_pettype');
    resetdropdownoption('ctl00_UserProfile_ddl_breed');
    resetdropdownoption('ctl00_UserProfile_ddl_gender');

    $('#petimagelist').empty();

    $('#petrecodelist').empty();

    $('#ctl00_UserProfile_currentpetid').val('');
}

function selectdropdownoption(elem, value) {

    var mySelect = $('#' + elem);

    //find the current selected option
    var myOption = mySelect.find('option[value=' + value + ']');

    //find the index of that option
    var index = $('#' + elem + ' option').index(myOption);

    //trigger the click on the corresponding jqTranfsform element
    mySelect.prev('ul').find('li').eq(index).find('a').click();

}


function showpetphoto_li(index) {

    $('#pet_photo_list li').addClass('lihide');
    $('#pet_photo_list li').removeClass('current');

    var currentli = $('#pet_photo_list').find('li').eq(index-1);

    $(currentli).addClass('current');
    $(currentli).removeClass('lihide');

}



function displaypetinformation(data){
    $('#ctl00_UserProfile_txt_petname').val(data[0].petname);
   // $('#ctl00_UserProfile_ddl_pettype').val(data[0].pettypeid);
    $('#ctl00_UserProfile_txt_petdob').val(data[0].dob);
    $('#ctl00_UserProfile_txt_weight').val(data[0].weight);
    //$('#ctl00_UserProfile_ddl_gender').val(data[0].gender);
    //$('#ctl00_UserProfile_ddl_breed').val(data[0].breedid);
    $('#ctl00_UserProfile_txt_immuni').val(data[0].immunization);
    $('#ctl00_UserProfile_txt_spayed').val(data[0].spayed);
    $('#ctl00_UserProfile_txt_addanote').val(data[0].note);

    selectdropdownoption('ctl00_UserProfile_ddl_pettype',data[0].pettypeid);
    selectdropdownoption('ctl00_UserProfile_ddl_breed', data[0].breedid);
    selectdropdownoption('ctl00_UserProfile_ddl_gender', data[0].gender);
    

    //$("#ctl00_UserProfile_ddl_pettype option[value=" + data[0].pettypeid + "]").click();

    $('#petimagelist').empty(); $('#pet_photo_list').empty();$('#pet_photo_navi').empty();
    var liclass = "current";  var counter = 0;
    $.each(data[0].Photos, function () {
    counter = counter + 1;
        $('#petimagelist').append(
                '<li> <img src="attachmenthandler.ashx?id=' + this.photoid + '" class="petphotoup" /> <input type="hidden" value="' + this.photoid + '" /><a href="#" onclick="deletepetphoto(' + this.photoid + ',this);" class="btnattachmentdel"></a> </li>'
                );

        if ($('#pet_photo_list').children().length > 0) liclass = 'lihide';

        $('#pet_photo_list').append(
               '<li class="' + liclass + '"  title="' + this.filename + '"> <img src="attachmenthandler.ashx?id=' + this.photoid + '" class="petphotoup" /> <input type="hidden" value="' + this.photoid + '" /></li>'
         );

        $('#pet_photo_navi').append(
            '<a href="#" onclick="showpetphoto_li(' + counter +');" > '+ counter + '</a>'
        );

        // $('#pet_photo_list').append(
        //  '<a href="attachmenthandler.ashx?id=' + this.photoid + '" target="_blank"> <img src="attachmenthandler.ashx?id=' + this.photoid + '"  /> <input type="hidden" value="' + this.photoid + '" /></a>'
        // );

    });




    $('#petrecodelist').empty(); $('#pet_doc_list').empty();

    $.each(data[0].Records, function () {
        $('#petrecodelist').append(
                '<li><a href="attachmenthandler.ashx?id=' + this.recordid + '&type=attachment" title="' + this.filename + '"><img src="img/attachment_32.png" class="petrecordoup" /> <input type="hidden" value="' + this.recordid + '" /> </a> <a href="#" onclick="deleterecord(' + this.recordid + ',this);" class="btnattachmentdel"></a></li>'
                );

        $('#pet_doc_list').append('<li><input type="checkbox" class="doccheck" /> <span>' + this.filename + '</span><input type="hidden" value="' + this.recordid + '"  /></li>');
    });

    $('#pet_doc_list').jqTransform();

}



function deletepetphoto(photoid,obj) {
    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/deletephoto",
        data: "{photoid:'" + photoid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            $(obj).parent().remove();
        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });
}

function deleterecord(recodeid, obj) {
    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/deleterecord",
        data: "{recordid:'" + recodeid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            $(obj).parent().remove();
        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });
}


function updatesavedpetinfolist() {

    if ($('.savedpetlist_container').find('#ctl00_UserProfile_lstv_savedpets_Ul1').length <= 0) {
        $('.savedpetlist_container').append(
        '<ol id="ctl00_UserProfile_lstv_savedpets_Ul1"></ol>'
        );
    }
    
    $('#ctl00_UserProfile_lstv_savedpets_Ul1').empty();

    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/getsavedpetinfo",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            data = Sys.Serialization.JavaScriptSerializer.deserialize(msg.d);
            $.each(data, function () {
                $('#ctl00_UserProfile_lstv_savedpets_Ul1').append(
    '<li><a onclick="loadpetinformation('+ this.id+');" href="#">' + this.petname + ' - ' + this.pettype + ' ('+this.gender+') </a></li>'
        );
            });
        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });

}

function canceltheappointment(appid, obj) {

    if (confirm('Are you sure you would like to cancel this appointment?')) {
        $.ajax({
            type: "POST",
            url: "userprofileservice.asmx/cancelappointment",
            data: "{appid:'"+ appid+"'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            processData: false,
            success: function (msg) {
                $(obj).parent().remove();
                 showmessage(msg.d);
                
            },
            error: function (errormsg) {
                showerror(errormsg);
            }
        });
    }

}

function ratingclickeventhandler() {
    var orgcolor = '';
    var selcolor = '#e1bdbd';
    $(this).parent().parent().find('li').css('background-color', '');
    $(this).parent().css('background-color', selcolor);

    if ($(this).parent().parent().hasClass('ratingrecommend')) {
        $('#ratingrecommend').val(5 - $(this).parent().index());
    }
    else {
        $('#ratingwaittime').val(5 - $(this).parent().index());
    }

    
}



function toggelreviewform(id, obj) {
    if ($('.applistforreviews').css('display') == 'block') {
        $('.applistforreviews').css('display', 'none');
        $('.appreviewform').css('display', 'block');
        var currentapp = $(obj).parent().clone();
        $(currentapp).find('a').remove();
        $('.currntappointment').append($(currentapp));

        $('ul.ratings li a').bind('click', ratingclickeventhandler);

        $('#btn_profreviewsend').bind('click', function () {
            var ratingrecommend = $('#ratingrecommend').val();
            var ratingwaittime = $('#ratingwaittime').val();
            var chusemyname = $('#chusemyname').is(':checked');
            var comment = $('#txt_comments').val();
            $.ajax({
                type: "POST",
                url: "userprofileservice.asmx/sendprofreview",
                data: "{appid:'" + id + "',comment: '" + comment + "',ratingrecommend :'" + ratingrecommend + "', ratingwaittime : '" + ratingwaittime + "',usemyname : '" + chusemyname + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                processData: false,
                success: function (msg) {

                    showmessage(msg.d);
                    $('#btn_profreviewsend').unbind('click');

                    setTimeout(reviewgoback, 3000);
                    $('ul.full-appintmentlist li.' + id).css('display', 'none');

                    $('#txt_comments').val('')
                    $('#chusemyname').attr('checked', false);
                    $('#ratingrecommend').val('0');
                    $('#ratingwaittime').val('0');
                },
                error: function (errormsg) {
                    showerror(errormsg);
                }
            });

        });
    }
    else {
        $('.applistforreviews').css('display', 'block');
        $('.appreviewform').css('display', 'none');
        $('.currntappointment').empty();
        $('ul.ratings li').css('background-color', '');
        $('ul.ratings li a').unbind('click');
    }
}


function reviewgoback() {

    $('.applistforreviews').css('display', 'block');
    $('.appreviewform').css('display', 'none');
    $('.currntappointment').empty();
    $('ul.ratings li').css('background-color', '');
    $('ul.ratings li a').unbind('click');

}

function sendemailtotrainer() {

    if (Page_ClientValidate("sendmessageValidationGroup")) {


        var _inputs = jQuery('#tabs-5 :input');
        var values = {}; var photos = {}; var records = {};
        _inputs.each(function () {
            if (this.type != 'button' && this.type != 'image' && this.type != 'file' && this.name != "")
                if (this.type == 'radio') {
                    values[this.name.replace('ctl00$UserProfile$', '')] = jQuery('input[type="radio"][name="' + this.name + '"]:checked').val();
                }
                else if (this.type == 'checkbox') {
                    values[this.name.replace('ctl00$UserProfile$', '')] = this.checked ? true : false;
                }
                else
                    values[this.name.replace('ctl00$UserProfile$', '')] = jQuery(this).val();

        });


        var data = Sys.Serialization.JavaScriptSerializer.serialize(values);

        

        if (values['ddl_reciever'] == null) {
            showerror('Please select a Veterinarian, groomer or trainer. ');
            return false;
        }


        $.ajax({
            type: "POST",
            url: "userprofileservice.asmx/sendemail",
            data: "{items:'" + data + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            processData: false,
            success: function (msg) {
                // Do something interesting here.
                showmessage(msg.d);
                $('#ctl00_UserProfile_txt_subject').val('Subject');
                $('#ctl00_UserProfile_emailmessage').val('');
                resetdropdownoption('ctl00_UserProfile_ddl_reciever');
            },
            error: function (errormsg) {
                showerror(errormsg);
            }
        });
    }

}

function sharephotos() {

    var selectedsharepetid = $('#ctl00_UserProfile_ddl_pets').val();
    var selectedprofid = $('#ctl00_UserProfile_ddl_petprof').val();

    if (selectedprofid == null) {
        showerror('Please select a professional');
        return false;
    }


    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/sharepetphotos",
        data: "{petid:'" + selectedsharepetid + "',profid:'" + selectedprofid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            // Do something interesting here.
            showmessage(msg.d);

        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });
}


function sharerecords() {

    var values = {}; var records = {};

    values["petid"] = $('#ctl00_UserProfile_ddl_pets').val();
    values["profid"] = $('#ctl00_UserProfile_ddl_petprof').val();

    if ($('#ctl00_UserProfile_ddl_petprof').val() == null) {
        showerror('Please select a professional');
        return false;
    }

    if ($('#pet_doc_list').children().length > 0) {
        var counter = 0;
        $('#pet_doc_list li').each(function () {

            if ($(this).find('input[type="checkbox"]').is(':checked')) {
                records[counter] = $(this).find('input[type="hidden"]').val();
            }
            counter = counter + 1;
        });
        values['records'] = records;
    }


    var data = Sys.Serialization.JavaScriptSerializer.serialize(values);


    $.ajax({
        type: "POST",
        url: "userprofileservice.asmx/sharerecords",
        data: "{items:'" + data + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (msg) {
            // Do something interesting here.
            showmessage(msg.d);

        },
        error: function (errormsg) {
            showerror(errormsg);
        }
    });

}

