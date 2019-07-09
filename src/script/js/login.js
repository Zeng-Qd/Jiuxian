;
! function ($) {
    //用户名/邮箱/手机号输入框
    //用户名/邮箱/手机号输入框获得焦点
    $('#userName').bind('focus', function () {
        $(this).siblings('.filter').find('.judge').hide();
        $(this).siblings('.filter').find('.judgeDel').show();
        $(this).siblings('.mistakeTip').hide();
        $(this).removeClass('on');
    });
    //用户名/邮箱/手机号输入框失去焦点
    $('#userName').bind('blur', function () {
        // var flag1 = /\S{1,20}/g;
        // var flag2 = /[a-zA-Z0-9_-]/g;
        // var flag3 = /^[^\s]{4,50}$/;
        var uname = jQuery.trim($(this).val());
        if (uname == '') {
            $(this).parent().addClass('wrong');
            $(this).siblings('.filter').find('.judge').show();
            $(this).siblings('.filter').find('.judgeDel').hide();
            $(this).siblings('.mistakeTip').text("请输入用户名/邮箱/手机号")
                .show();
            $(this).addClass('on');
            $('#userName').val("");
        } else {
            $(this).parent().removeClass('wrong');
            $(this).siblings('.filter').find('.judge').hide();
            $(this).siblings('.filter').find('.judgeDel').show();
            $(this).siblings('.mistakeTip').hide();
            $(this).removeClass('on');
        }
    });
    //密码输入框
    //密码输入框获得焦点
    $('#password').bind('focus', function () {
        $(this).siblings('.filter').find('.judge').hide();
        $(this).siblings('.filter').find('.judgeDel').show();
        $(this).siblings('.mistakeTip').hide();
        $(this).removeClass('on');
    })
    //密码输入框失去焦点
    $('#password').bind('blur', function () {
        if ($(this).val() == '') {
            $(this).siblings('.filter').find('.judge').show();
            $(this).siblings('.filter').find('.judgeDel').hide();
            $(this).parent().addClass('wrong');
            $(this).siblings('.mistakeTip').text("请输入密码").show();
            $(this).addClass('on');
        } else {
            $(this).siblings('.filter').find('.judge').show();
            $(this).parent().removeClass('wrong');
            $(this).siblings('.mistakeTip').hide();
            $(this).removeClass('on');
        }
    })
    //验证码输入框
    //验证码输入框获得焦点
    $('#verification').bind('focus', function () {
        $(this).siblings('.filter').find('.judge').hide();
        $(this).siblings('.filter').find('.judgeDel').show();
        $(this).siblings('.mistakeTip').hide();
        $(this).removeClass('on');
    })
    //验证码输入框失去焦点
    $('#verification').bind('blur', function () {
        if (jQuery.trim($(this).val()) == '') {
            $(this).siblings('.filter').find('.judge').show();
            $(this).siblings('.filter').find('.judgeDel').hide();
            $(this).addClass('on');
            $(this).siblings('.mistakeTip').text('请输入验证码').show();
            $(this).val('');
        } else {
            $(this).siblings('.filter').find('.judge').show();
            $(this).parent().removeClass('wrong');
            $(this).removeClass('on');
            $(this).siblings('.mistakeTip').text('').hide();
        }
    })
    //登录验证
    const $tel = $('#userName')
    const $pass = $('#password')
    const $btn = $('#save')


    $btn.on('click', function() {
        let $telvalue = $tel.prop('value') //获取用户输入的手机号
        let $passvalue = $pass.prop('value')
        $.ajax({
            type: 'post',
            data: {
                tel: $telvalue,
                pass: $passvalue

            },
            url: 'http://10.31.158.12/Jiuxian/php/login.php'
        }).done(function(data) {

            if (data == 1) { //验证用户名和密码是否一致
                $.cookie('tel', $telvalue, { expires: 7 })
                location.href = 'index1.html'; //跳转

            } else {
                if (data == 0) {
                    // $("#loginname_span").html('输入的用户名有误') //验证用户名是否存在
                    // $("#loginname_span").css('color', 'red')
                    alert(false)
                } else {
                    // $("#loginpwd_span").html('输入的密码有误') //
                    // $("#loginpwd_span").css('color', 'red')
                    alert(false)
                }
            }

        })
    })
}(jQuery);