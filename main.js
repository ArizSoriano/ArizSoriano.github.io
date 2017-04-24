$(document).ready(function(){

	// instagram feed

	// var userFeed = new Instafeed({
 //        get: 'user',
 //        userId: '1500774759',
 //        accessToken: '1500774759.1677ed0.675f25c4bd614e41a6cd21d6fc859e1b',
 //        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
 //    });

 //    userFeed.run();

  $('#galleryCarousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})
  	$('#menuCarousel').owlCarousel({
	    loop:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	})
  	$('#landingCarousel').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplayTimeout:5000,
	  autoplaySpeed: 8000,
	});

});

$(document).on('click','.galleryImage',function() {
	$('.sectionGallery').css({
		'background' : 'url('+ $(this).children('img').attr('src') + ')',
	 	'background-size' : 'cover',
   		'background-repeat' : 'no-repeat',
    	'background-position' : 'center center'
	})

	$('.sectionGalleryContentMobile img').attr('src',$(this).children('img').attr('src'))
	$('.sectionGalleryContent img').attr('src',$(this).children('img').attr('src'))


});	


$(document).scroll(function() {
    var cutoff = $(window).scrollTop();
    
    $('.section').each(function(){
        if($(this).offset().top + $(this).height() - 70 > cutoff){
        	$('.NavbarWeb span').removeClass('changeNavSize');
        	$('.NavbarWeb img').removeClass('changeNavSize');
            $('#'+$(this).children().attr('class')).addClass('changeNavSize');

            return false; // stops the iteration after the first one on screen
        }   
    });
});

$(document).on('click', '#sectionAboutUs', function() {
	$('body').scrollTo('.sectionAboutUs', {
		duration: 1000,
		offset: -40
	});
});

$(document).on('click', '#sectionMenu', function() {
	$('body').scrollTo('.sectionMenu', {
		duration: 1000,
		offset: -40
	});
});

$(document).on('click', '#sectionGallery', function() {
	$('body').scrollTo('.sectionGallery', {
		duration: 1000,
		offset: -40
	});
});

$(document).on('click', '#sectionLanding', function() {
	$('body').scrollTo('.sectionLanding', {
		duration: 1000,
		offset: -40
	});
});

$(document).on('click', '#sectionAccolades', function() {
	$('body').scrollTo('.sectionAccolades', {
		duration: 1000,
		offset: -40
	});
});

$(document).on('click', '#sectionContactUs', function() {
	$('body').scrollTo('.sectionContactUs', {
		duration: 1000,
		offset: -40
	});
});

$(document).on('click', '#sectionFollowUs', function() {
	$('body').scrollTo('.sectionFollowUs', {
		duration: 1000,
		offset: -40
	});
});

