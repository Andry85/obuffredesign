$(function() {

	/*********************************************************/
						/* START MAIN SLIDER  */
	/********************************************************/
			$('#slider').owlCarousel({
                center: false,
                items: 1.5,
                loop: true,
                margin: 0,
                nav:true,
                dots: false,
              });
	/*********************************************************/
						/* END MAIN SLIDER  */
	/********************************************************/


	/*********************************************************/
						/* START CATALOG SLIDER  */
	/********************************************************/	
				$('.catalog-slider').owlCarousel({
	                center: false,
	                items: 3,
	                loop: true,
	                margin: 52,
	                nav:true,
	                dots: false,
	                responsive:{
				        0:{
				           margin: 24,
				           items: 2
				        },
				        768:{
				           margin: 30
				        },
				        1024:{ 
				            
				        }
				    }
	              });
	/*********************************************************/
						/* END CATALOG SLIDER  */
	/********************************************************/


	/*********************************************************/
						/* START PARTNERS SLIDER  */
	/********************************************************/
			$('.partners-list').owlCarousel({
				autoplay: true,
                center: false,
                items: 8,
                loop: true,
                margin: 58,
                nav: false,
                dots: false,
                autoHeight:true
              });
	/*********************************************************/
						/* END PARTNERS SLIDER  */
	/********************************************************/

	/*********************************************************/
						/* START PARTNERS SLIDER  */
	/********************************************************/
			$('.postambule-list').owlCarousel({
				autoplay: true,
                center: false,
                items: 3,
                loop: true,
                margin: 48,
                nav: false,
                dots: false,
                autoHeight:true,
                responsive:{
			        0:{
			            
			        },
			        768:{
			           margin: 30
			        },
			        1024:{ 
			            
			        }
			    }
              });
	/*********************************************************/
						/* END PARTNERS SLIDER  */
	/********************************************************/

	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
    	$(".classic-select").select2({
		   theme: "classic",
		   minimumResultsForSearch: Infinity
		});

		$(".chosen-wrap--noBorder .classic-select").select2(
		{
			theme: "noBorder",
			minimumResultsForSearch: Infinity
		});



    /*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/ 



	/*********************************************************/
						/* Start MENU ACCARDION  */
	/********************************************************/
	$('.submenu > li > a').click(function(event) {
		event.preventDefault();
        $(this).next('ul').slideToggle(500);
        $(this).parent().siblings().children('ul').slideUp(500);
        $(this).parent().siblings().children('ul').prev('a').removeClass("activ");
        $(this).toggleClass("activ");
    }).next('ul').hide();
    /*********************************************************/
						/* End MENU ACCARDION  */
	/********************************************************/ 



	/*********************************************************/
						/* Start CATALOG ITEM  */
	/********************************************************/
		var add = $(".catalogList__add").outerHeight();
		$(".catalogList__item").css("padding-bottom", add);
		$(".catalogList__item").css("margin-bottom", -add+25);
	/*********************************************************/
						/* End CATALOG ITEM  */
	/********************************************************/


	/*********************************************************/
						/* Start PHONE MASK  */
	/********************************************************/
		$(".telephone").mask("+38 (999) 999-99-99");
	/*********************************************************/
						/* End PHONE MASK  */
	/********************************************************/


	/*********************************************************/
						/* Start COUNT  */
	/********************************************************/
		$('.number__down').click(function(event) {
			event.preventDefault(); 
			var count = $(this).parent().children('.number__count').val();
			$(this).parent().children('.number__count').val(--count);
    	});
    	$('.number__up').click(function(event) {
			event.preventDefault(); 
			var count = $(this).parent().children('.number__count').val();
			$(this).parent().children('.number__count').val(++count);
    	});

	/*********************************************************/
						/* End COUNT  */
	/********************************************************/  


	/*********************************************************/
						/* START FANCYBOX  */
	/********************************************************/
		$(".order__link--login").fancybox();
		$(".formRegFooter__link").fancybox();
		$(".forgot").fancybox();
		$(".backPass").fancybox();
		$(".addTocart").fancybox();
		$(".sendLetter").fancybox();
		$(".js-ressetPass").fancybox();
		$(".js-appreciation").fancybox();
	/*********************************************************/
						/* END FANCYBOX */
	/********************************************************/
	

	/*********************************************************/
						/* START HINT  */
	/********************************************************/
		$(".hint__icon").mouseenter(function() {
		  $(this).next('.hint__desc').fadeIn("fast");
		});
		$(".hint__icon").mouseleave(function() {
		  $(this).next('.hint__desc').fadeOut("fast");
		});
	/*********************************************************/
						/* END HINT */
	/********************************************************/


	/*********************************************************/
						/* START BXSLIDER  */
	/********************************************************/
		$('.bxslider').bxSlider({
		  pagerCustom: '#bx-pager'
		});
		
		if(device.desktop()) {	

			$(".bx-wrapper img").mouseenter(function(e) {
			  $(this).addClass("activ");
			});

			$(".bx-wrapper img").mouseleave(function() {
			   $(this).removeClass("activ");
			   $(this).animate({left: 0,top: 0},1); 
			});

			$('.bx-wrapper img').mousemove(function(e){ 
				var offset = $(this).parents(".bx-wrapper").offset();
				var parrent_height = $(this).parents(".bx-wrapper").height();
				var  x = e.pageX - offset.left;
				var  y = e.pageY - offset.top;
				$(this).animate({left: -x,top: -y},1);
			});

		}
	/*********************************************************/
						/* END BXSLIDER */
	/********************************************************/

	/*********************************************************/
						/* START VIEW  */
	/********************************************************/
		$(window).resize(onResize);
	    onResize();
	    function onResize() {
	        var wiw = window.innerWidth;
	        var cabinet = $('.js-sidebar');
	        if(wiw < 991) {
		       cabinet.prependTo('.cartWrap');
	        }
	        else
	        {
	            cabinet.appendTo('.cartWrap');
	        }
	    };
	/*********************************************************/
						/* END VIEW */
	/********************************************************/

	/*********************************************************/
						/* START VIEW  */
	/********************************************************/
	$(".upLink").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	/*********************************************************/
						/* END VIEW */
	/********************************************************/


	/*********************************************************/
						/* START ADAPTIVE  */
	/********************************************************/
		if(device.mobile()) {
	 		
	 		var nav =  $('.nav');
	        $('.mainSlider').after(nav);
		    nav.wrapAll('<div class="mobileNav" />');	

		    
		    var catalog = $('.mainPage').find(".catalog");
		    $('.content').after(catalog);	
		    
		}
		$('.navBox ul').prev('a').click(function(event) {
			event.preventDefault();
	        $(this).next('ul').slideToggle(500);
	        $(this).parent().siblings().children('ul').slideUp(500);
	    }).next('ul').hide();
	    $("#openPageslide").sideNav();
	/*********************************************************/
						/* START ADAPTIVE  */
	/********************************************************/

	/*********************************************************/
						/* Start CUSTOM SELECT  */
	/********************************************************/
		$('#search').tipuedrop();
	/*********************************************************/
						/* End CUSTOM SELECT  */
	/********************************************************/ 


	



	




	
	



	




	


	

	











	

	


});