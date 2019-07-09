;
! function () {
    //手机号输入框
    //用户名/邮箱/手机号输入框获得焦点
    $('#phone').bind('focus', function () {
        $(this).siblings('.regFalse').hide();
        $(this).siblings('.poiFalse').hide();
        $(this).siblings('.poiTrue').show();
        $(this).removeClass('on');
    });
    //手机号输入框失去焦点
    $('#phone').bind('blur', function () {
        var uname = jQuery.trim($(this).val());
        if (uname == '') {
            $(this).addClass('wrong');
            $(this).siblings('.regFalse').show();
            $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').text("请输入用户名/邮箱/手机号")
                .show();
            $(this).addClass('on');
            $('#phone').val("");
        } else {
            $(this).removeClass('wrong');
            $(this).siblings('.regFalse').hide();
            $(this).siblings('.poiTrue').show();
            $(this).siblings('.poiFalse').hide();
            $(this).removeClass('on');
        }
    });
    //验证码输入框
    //验证码输入框获得焦点
    $('#phone_verification').bind('focus', function () {
        // $(this).siblings('.regFalse').hide();
        $(this).siblings('.poiFalse').hide();
        // $(this).siblings('.poiTrue').show();
        $(this).removeClass('on');
    });
    //验证码输入框失去焦点
    $('#phone_verification').bind('blur', function () {
        var uname = jQuery.trim($(this).val());
        if (uname == '') {
            $(this).addClass('wrong');
            // $(this).siblings('.regFalse').show();
            // $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').text("请输入验证码")
                .show();
            $(this).addClass('on');
            $('#phone_verification').val("");
        } else {
            $(this).removeClass('wrong');
            // $(this).siblings('.regFalse').hide();
            // $(this).siblings('.poiTrue').show();
            $(this).siblings('.poiFalse').hide();
            $(this).removeClass('on');
        }
    });
    //校验码输入框
    //校验码输入框获得焦点
    $('#phoneverification').bind('focus', function () {
        $(this).siblings('.regFalse').hide();
        $(this).siblings('.poiFalse').hide();
        $(this).removeClass('on');
    });
    //校验码输入框失去焦点
    $('#phoneverification').bind('blur', function () {
        var uname = jQuery.trim($(this).val());
        if (uname == '') {
            $(this).addClass('wrong');
            $(this).siblings('.regFalse').show();
            $(this).siblings('.poiFalse').text("请输入校验码").show();
            $(this).addClass('on');
            $('#phoneverification').val("");
        } else {
            $(this).removeClass('wrong');
            $(this).siblings('.regFalse').hide();
            $(this).siblings('.poiFalse').hide();
            $(this).removeClass('on');
        }
    });
    //密码输入框
    //密码输入框获得焦点
    $('#phonePwd').bind('focus', function () {
        $(this).siblings('.regFalse').hide();
        $(this).siblings('.poiFalse').hide();
        $(this).siblings('.poiTrue').show();
        $(this).removeClass('on');
    });
    //密码输入框失去焦点
    $('#phonePwd').bind('blur', function () {
        var uname = jQuery.trim($(this).val());
        if (uname == '') {
            $(this).addClass('wrong');
            $(this).siblings('.regFalse').show();
            $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').text("请输入密码")
                .show();
            $(this).addClass('on');
            $('#phonePwd').val("");
        } else if ($(this).val().length < 8) {
            $(this).addClass('wrong');
            $(this).siblings('.regFalse').show();
            $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').text("请输入正确长度的密码")
                .show();
            $(this).addClass('on');
            $('#phonePwd').val("");
        } else {
            $(this).removeClass('wrong');
            $(this).siblings('.regFalse').hide();
            $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').hide();
            $(this).removeClass('on');
        }
    });
    console.log($("#phonePwd").val().length);

    //确认密码输入框
    //确认密码输入框获得焦点
    $('#phoneRePwd').bind('focus', function () {
        $(this).siblings('.regFalse').hide();
        $(this).siblings('.poiFalse').hide();
        $(this).siblings('.poiTrue').show();
        $(this).removeClass('on');
    });
    //确认密码输入框失去焦点
    $('#phoneRePwd').bind('blur', function () {
        var uname = jQuery.trim($(this).val());
        if (uname == '') {
            $(this).addClass('wrong');
            $(this).siblings('.regFalse').show();
            $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').text("请再次输入密码")
                .show();
            $(this).addClass('on');
            $('#phoneRePwd').val("");
        } else if ($("#phoneRePwd").val() != $("#phonePwd").val()) {
            $(this).addClass('wrong');
            $(this).siblings('.regFalse').show();
            $(this).siblings('.poiTrue').hide();
            $(this).siblings('.poiFalse').text("两次输入密码不一致")
                .show();
            $(this).addClass('on');
            $('#phoneRePwd').val("");
        } else {
            $(this).removeClass('wrong');
            $(this).siblings('.regFalse').hide();
            $(this).siblings('.poiTrue').show();
            $(this).siblings('.poiFalse').hide();
            $(this).removeClass('on');
        }
    });
}(jQuery)