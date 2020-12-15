$(".ask").on("click", function (param) {
    param.preventDefault();
    $(this).toggleClass("active").next().stop().slideToggle(500)
    $(".answer").not($(this).next()).slideUp(500);
    $(".ask").not($(this)).removeClass("active")
})

$("button[data-filter]").click(function () {
    $("div[data-filter]").stop().slideUp(500);
    let color = $(this).attr("data-filter");
    $(`div[data-filter=${color}]`).stop().slideDown(500);
    if ("all" == color) {
        $("div[data-filter]").stop().slideDown(500);
    }
    $(this).addClass("active")
    $("button[data-filter]").not(this).removeClass("active")
})

function typing(element) {
    if (typeof element == "string") {
        let inner = $(element).html();
        let fullText = "";
        let letterCount = 0;
        let interval = setInterval(() => {
            fullText += inner[letterCount]
            $(element).html(fullText)
            letterCount++;
            if (fullText == inner) {
                clearInterval(interval)
                setTimeout(() => {
                    typing(element)
                }, 1000);
            }
        }, 100);
    }
}

typing("h1")


$(".js-modal-show").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn(500)
})

$(".modal .close").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(500);
})

$(".modal").click(function (e) {
    e.preventDefault();
    console.log(e);
    if (e.target == this) {
        $(".modal").fadeOut(500);
    }
})

$(".nav").css({
    position: "fixed",
    top: $(window).height() - $(".nav").outerHeight(),
    width: "100%",
    zIndex: 999
})

$(window).on("scroll", function () {
    let editPosition = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop()
    if (editPosition > 0) {
        $(".nav").css({
            top: editPosition
        })
    } else {
        $(".nav").css({
            top: 0
        })
    }
})


$("a.read-more").click(function (e) {
    e.preventDefault();

    $('span.text-hidden').toggleClass('hidden');

    if (!$('span.text-hidden').hasClass('hidden')) {
        $(this).html('Hidden');
    } else {
        $(this).html('Read More');
    }
})


$(window).on('scroll', function () {
    if (pageYOffset > 100) {
        $('a.js-btn-top').removeClass('hidden').css({ bottom: '3%' })
    } else if (pageYOffset < 100) {
        $('a.js-btn-top').addClass('hidden').css({ bottom: '-100%' })
    }

})

$('a.js-btn-top').click(function () {
    $('html').animate({scrollTop: 0})
})


$('.js-sroll-to-id').click(function(e) {
    e.preventDefault();

    let attr = $(this).attr('href');

    let elTop = $(attr).offset().top;

    $('html').animate({scrollTop: elTop - $('.nav').innerHeight()}, 800)
})