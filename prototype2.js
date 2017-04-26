$(document).ready(function(){

	$.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1500774759.fc42541.041cb6df4c9b46e8bc1256a8a222deab&callback=?',
        type: 'GET',
     	dataType: "jsonp",
        success: function(data) {
        	var caption = data['data']['0']['caption']['text'];
        	var image = data['data']['0']['images']['standard_resolution']['url'];
      		var link = data['data']['0']['link']
        	$('#instagramImage img').attr('src',image)
        	$('.instagramCaption').text('" '+caption+' "')
        	$('.sectionInstagram a').attr('href',link)
        }
    });
	
  $('#galleryCarousel').owlCarousel({
	    loop:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	})
 	$('#galleryCarousel2').owlCarousel({
	    loop:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:3
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
	  autoplaySpeed: 4000,
	  speed: 1500
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	    // some code..
	}
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

$(document).on('click', '#sectionInstagram', function() {
	$('body').scrollTo('.sectionInstagram', {
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

$(document).on('click', '#sectionHome', function() {
	$('#sectionLanding').click();
});


$(document).on('click', '#mobileModal', function() {
	$('.ui.modal')
	  .modal('show')
	;
});

$(document).on('click', '#mobileHome', function() {
	$('#sectionLanding').click();
	$('.ui.modal')
	  .modal('hide')
	;
});

$(document).on('click', '#mobileAbout', function() {
	$('#sectionAboutUs').click();
	$('.ui.modal')
	  .modal('hide')
	;
});

$(document).on('click', '#mobileMenu', function() {
	$('#sectionMenu').click();
	$('.ui.modal')
	  .modal('hide')
	;
});

$(document).on('click', '#mobileGallery', function() {
	$('#sectionGallery').click();
	$('.ui.modal')
	  .modal('hide')
	;
});

$(document).on('click', '#mobileAccolades', function() {
	$('#sectionInstagram').click();
	$('.ui.modal')
	  .modal('hide')
	;
});

$(document).on('click', '#mobileContact', function() {
	$('#sectionContactUs').click();
	$('.ui.modal')
	  .modal('hide')
	;
});

$(document).on('click', '#modalClose', function() {
	$('.ui.modal')
	  .modal('hide')
	;
});

