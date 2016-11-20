$(document).ready(function() {
  var about = $('.about-lin');
  about.click(function() {
    if($('.skills').hasClass("skills-on")){
      $('.skills').removeClass('skills-on')
      $('.skills-lin').removeClass('active')
    }
    $('.about').toggleClass('about-on');
    $('.about-lin').toggleClass('active');
    return false;
  });

  var skills = $('.skills-lin');
  skills.click(function() {
    if($('.about').hasClass("about-on")){
      $('.about').removeClass('about-on')
      $('.about-lin').removeClass('active')
    }
    $('.skills').toggleClass('skills-on');
    $('.skills-lin').toggleClass('active');
    return false;
  });
});
