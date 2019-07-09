//用户名登陆
$('.userLogin').bind('click', function() {
    $('.loginMobile').hide();
    $('.loginUsual').show();
    $(this).siblings('a').removeClass("on");
    $(this).addClass("on");
    jQuery("#captchaImage").attr("src", "/public/captchaimg.htm?timestamp" + (new Date()).valueOf());
})

$('#userName').bind('focus', function() {
    $(this).siblings('.filter').find('p').hide();
    $(this).siblings('.filter').find('.judge').hide();
    $(this).siblings('.filter').find('.judgeDel').show();
    $(this).siblings('.mistakeTip').hide();
    $(this).removeClass('on');
});

$('#userName').bind('blur', function() {
    var flag1 = /\S{1,20}/g;
    var flag2 = /[a-zA-Z0-9_-]/g;
    var flag3 = /^[^\s]{4,50}$/;
    var uname = jQuery.trim($(this).val());
    if (uname == '') {
        $(this).siblings('.filter').find('p').show();
        $(this).parent().addClass('wrong');
        $(this).siblings('.filter').find('.judge').show();
        $(this).siblings('.filter').find('.judgeDel').hide();
        $(this).siblings('.mistakeTip').text("请输入用户名/邮箱/手机号").show();
        $(this).addClass('on');
        $('#userName').val("");
    } else {
        $(this).siblings('.filter').find('p').hide();
        $(this).parent().removeClass('wrong');
        $(this).siblings('.filter').find('.judge').hide();
        $(this).siblings('.filter').find('.judgeDel').show();
        $(this).siblings('.mistakeTip').hide();
        $(this).removeClass('on');
    }
});

$('#password').bind('focus', function() {
    $(this).siblings('.filter').find('p').hide();
    $(this).siblings('.filter').find('.judge').hide();
    $(this).siblings('.mistakeTip').hide();
    $(this).removeClass('on');
})
$('#password').bind('blur', function() {
    if ($(this).val() == '') {
        $(this).siblings('.filter').find('p').show();
        $(this).siblings('.filter').find('.judge').show();
        $(this).parent().addClass('wrong');
        $(this).siblings('.mistakeTip').text("请输入密码").show();
        $(this).addClass('on');
    } else {
        $(this).siblings('.filter').find('p').hide();
        $(this).siblings('.filter').find('.judge').show();
        $(this).parent().removeClass('wrong');
        $(this).siblings('.mistakeTip').hide();
        $(this).removeClass('on');
        //给密码赋值
        var pwd = $("#password").val();
        //var modulus = $("#modulus").val();
        //var exponent = $("#exponent").val();
        //var publicKey = RSAUtils.getKeyPair(exponent, '',modulus);
        $('#pwd').val(pwd);
    }
})
