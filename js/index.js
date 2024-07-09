/// <reference types="../@types/jquery" />


// ------------------------ start open button navbar ------------------------
$(".open").on('click',function(){
    $(".home-nav").animate({ width:'250px'},50)
    $(".home-content").animate({marginLeft :'250px'},50)
    $(".open").animate({left:'270px'},50)
})
// ------------------------ end open button navbar ------------------------

// ------------------------ start end button navbar ------------------------
$(".close").on('click',function(){
    $(".home-nav").animate({ width:'0px'},50)
    $(".home-content").animate({marginLeft :'0px'},50)
    $(".open").animate({left:'20px'},50)
})
// ------------------------ end end button navbar ------------------------

// ------------------------ start duration section ------------------------
$(".duration-content-title").on('click',function(){
    $(".duration-content-desc").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
// ------------------------ end duration section ------------------------

// ------------------------ start count section ------------------------
window.onload = function() {
   
    countDownToTime("25 october 2023 9:56:00");
  }

function countDownToTime(countTo) {
  
    //future date = new date using countTo
        var futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    // date now = new date noww
    var now = new Date();
    now = (now.getTime()/1000);

    //difference = future - now to get remaining time
    timeDifference = (futureDate- now);
        
   var days = Math.floor( timeDifference / (24*60*60));
   var hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   var mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   var secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
// ------------------------ end count section ------------------------

// ------------------------ start smooth behavior ------------------------
$(".home-nav a").on('click',function(){
    
    var idSection= $(this).attr("href");
    
    var positionSection = $(idSection).offset().top;
    
    $(" body, html").animate({scrollTop:positionSection},2000);
    
})
// ------------------------ end smooth behavior ------------------------

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var charactersRemain = maxLength-length;
  if(charactersRemain<=0)
            {
                 $("form p").html("<span class='characters'>your available character finished</span>");
                 
            }
        else{
        
        $(".characters").text(charactersRemain);
        }
});
