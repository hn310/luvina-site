$('#main-slider').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});


// set company established year
$("#company-year").text(getCompanyEstablisedYears());

function getCompanyEstablisedYears() {
    var establishedYear = 2004;
    var currentYear = new Date().getFullYear();
    return currentYear - establishedYear;
}

// set video url
$(document).ready(function() {
    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    // when the modal is opened autoplay it  
    $('#videoModal').on('shown.bs.modal', function(e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    // stop playing the youtube video when I close the modal
    $('#videoModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
    // document ready  
});

// footer: set current year
$("#current-year").text(new Date().getFullYear());

// back to top button
var btn = $('#button-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

