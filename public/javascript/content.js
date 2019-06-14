$(".container-arrow").click(function(){
   $([document.documentElement, document.body]).animate({
      scrollTop: $("#content-start").offset().top
   }, 2000);
});

function onLoad () {
   $(".headline").delay(250).animate({"opacity": "1"}, 1750);

   $(function(){
      $("#event-schedule-container").load("/views/event-schedule.html");
   });
   $(function(){
      $("#faq-container").load("/views/faq.html");
   });
   $(function(){
      $("#sponsors-container").load("/views/sponsors.html");
   });
   $(function(){
      $("#socialmedia-container").load("/views/media-bar.html");
   });
}

onLoad();