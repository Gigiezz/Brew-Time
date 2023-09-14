$(".card").click(function () {
    $(".card").removeClass("styled_card")
    $(this).addClass("styled_card")
})
//////////////////// DropDown ////////////////////////////////
$(".dropdown-toggle").click(function(){
    
})
///////////////////// swiper /////////////////
$(".left_swipe").click(function(){
    $(".mid_card").addClass("hidden_card")
    $(".right_card").addClass("hidden_card")
    $(".left_card").removeClass("hidden_card")
    $(".right_swipe").removeAttr("src", "assets/Icons/coloredrespline.svg")
    $(".right_swipe").attr("src", "assets/Icons/resplines.svg")
    $(".mid_swipe").removeAttr("src", "assets/Icons/coloredrespline.svg")
    $(".mid_swipe").attr("src", "assets/Icons/resplines.svg")
    $(".left_swipe").attr("src", "assets/Icons/coloredrespline.svg")
})

$(".mid_swipe").click(function(){
    $(".left_card").addClass("hidden_card")
    $(".right_card").addClass("hidden_card")
    $(".mid_card").removeClass("hidden_card")
    $(".left_swipe").removeAttr("src", "assets/Icons/coloredrespline.svg")
    $(".left_swipe").attr("src", "assets/Icons/resplines.svg")
    $(".right_swipe").removeAttr("src", "assets/Icons/coloredrespline.svg")
    $(".right_swipe").attr("src", "assets/Icons/resplines.svg")
    $(".mid_swipe").attr("src", "assets/Icons/coloredrespline.svg")
})

$(".right_swipe").click(function(){
    $(".left_card").addClass("hidden_card")
    $(".mid_card").addClass("hidden_card")
    $(".right_card").removeClass("hidden_card")
    $(".left_swipe").removeAttr("src", "assets/Icons/coloredrespline.svg")
    $(".left_swipe").attr("src", "assets/Icons/resplines.svg")
    $(".mid_swipe").removeAttr("src", "assets/Icons/coloredrespline.svg")
    $(".mid_swipe").attr("src", "assets/Icons/resplines.svg")
    $(".right_swipe").attr("src", "assets/Icons/coloredrespline.svg")
})

///////////////////// Cards Object
const user1 = document.getElementById(".user1")
const users = []
$(".input_send_btn").click(function(){
    users.push($(".name_inp").serializeArray())
    // console.log($(".name_inp").val())
    // console.log($(".email_inp").val())
    // console.log($(".message_input").val())
    console.log(users)
})