$(function () {
	//Ефекты появления блоков
	if ($(window).width() > 1023) {
		new WOW().init();
	}

	// $('.s4__slider').slick({
	//   centerMode: true,
	//   autoplay: true,
	//   infinite: true,
	//   autoplaySpeed: 5000,
	//   speed: 1000,
	//   centerPadding: '10px',
	//   slidesToShow: 1,

	//   prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
	//   nextArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
	//   responsive: [
	//     {
	//       breakpoint: 1023,
	//       settings: {
	//         slidesToShow: 1,
	//         slidesToScroll: 1,
	//         centerMode: false
	//       }
	//     },
	//    ]

	// });
	if ($('.s4__slider').length) {
		$('.s4__slider').owlCarousel({
			item: 1,
			nav: true,
			loop: true,
			autoWidth: true,
			margin: 30,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplaySpeed: 1000,
			smartSpeed: 1000,
			center: true,
			dots: false,
			responsive: {
				1023: {
					singleItem: true,
					margin: 0
				}
			}

		});
		$(".owl-prev").html("<i class='fas fa-chevron-left'></i>");
		$(".owl-next").html("<i class='fas fa-chevron-right'></i>");
	}


	//плашка внизу в продуктах
	if ($('.produc__fix').length) {
		let s1h;
		let s5ToTop;

		if ($(window).width() > 767) {
			s1h = $('.s1').height()
			s5ToTop = $('.section5').offset().top - $('.section5').height() * 2
		} else {
			s1h = 0
			s5ToTop = $('.section5').offset().top - $('.section5').height() * 1
		}

		$(window).scroll(function () {
			if ($(this).scrollTop() > s1h && $(this).scrollTop() < s5ToTop) {
				$('.produc__fix').fadeIn()
			} else {
				$('.produc__fix').fadeOut()
			}


		});

	}

	//табы
	$('.s6__head__item').click(function () {
		$('.s6__head__item').removeClass('active')
		$(this).addClass('active')
	})

	$('.s6h1').click(function () {
		$('.s6b2').removeClass('active')
		setTimeout(function () {
			$('.s6b1').addClass('active')
		}, 100)
	})
	$('.s6h2').click(function () {
		$('.s6b1').removeClass('active')
		setTimeout(function () {
			$('.s6b2').addClass('active')
		}, 100)
	})


	// политика конвиденциальности адаптив	
	function politicaAppend() {
		if ($(window).width() < 1024) {
			$('.politica').prependTo($('.footer__bot'));
		}
		if ($(window).width() > 1023) {
			$('.politica').prependTo($('.footer__conf'));
		}
	}
	politicaAppend();
	$(window).resize(function () {
		politicaAppend();
	})


	//фиксация шапки
	$(window).scroll(function () {
		if ($(window).width() > 1023) {
			let wScrollTop = $(window).scrollTop()
			if (wScrollTop > 1) {
				$('.header').addClass('fix')
			}
			else {
				$('.header').removeClass('fix')
			}
		}
	})

	if ($(window).width() > 1023) {
		let wScrollTop = $(window).scrollTop()
		if (wScrollTop > 1) {
			$('.header').addClass('fix')
		}
		else {
			$('.header').removeClass('fix')
		}
	}


	//клик по пункту меню
	$('.header nav ul li span').hover(function () {
		if ($(window).width() > 1023) {
			$('.header nav ul li').removeClass('active')
			$(this).parent('li').addClass('active')
			$('.header').addClass('m-open')
		}

	})
	$('.header__level2').mouseleave(function () {
		if ($(window).width() > 1023) {
			$('.header nav ul li').removeClass('active')
			$('.header').removeClass('m-open')
		}
	})
	$('.header__top').hover(function () {
		if ($(window).width() > 1023) {
			$('.header nav ul li').removeClass('active')
			$('.header').removeClass('m-open')
		}
	})
	$('.header nav ul li').eq(4).hover(function () {
		if ($(window).width() > 1023) {
			$('.header nav ul li').removeClass('active')
			$('.header').removeClass('m-open')
		}
	})


	//Акордеон в футере
	$('.footer__menu__t').click(function () {
		if ($(window).width() < 768) {
			if ($(this).hasClass('active') == 0) {
				$('.footer__menu__t').removeClass('active')
				$('.footer__menu__c').slideUp()
				$(this).toggleClass('active')
				$(this).next().slideToggle()
			}
			else {
				$(this).toggleClass('active')
				$(this).next().slideToggle()
			}
		}
	})

	//клик пункт меню на мобильном
	$('.header nav ul li').click(function () {
		if ($(window).width() < 1024) {
			if ($(this).find('.header__level2').css('display') != 'block') {
				$('.header__level2').slideUp()
				$(this).find('.header__level2').slideDown()
			} else {
				$(this).find('.header__level2').slideUp()
			}
		}
	})

	$('.burger').click(function () {
		if ($(window).width() < 1024) {
			$('.burger').toggleClass('active')
			$('.header__right__sroll').fadeToggle()
		}
	})


	//tabs
	$(".wrapper .tab").click(function () {
		if ($(window).width() > 767) {
			$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn(600)
		}
	}).eq(0).addClass("active");

	$(".etab").click(function () {
		$(".etab").removeClass("active").eq($(this).index()).addClass("active");
		$(".econ").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	$('.tab_mobtitle').click(function () {
		$(this).toggleClass('active')
		$(this).next('.tab_item_wrap').slideToggle()
	})
	if ($('.tab_mobtitle').length) {
		if ($(window).width() < 768) {
			$('.tab_mobtitle').eq(0).click()
		}
	}

	//feadback
	$('.feedback label').click(function () {
		$('.feadback__wrap').addClass('active')
		$('.feedback label').removeClass('active')
		$(this).addClass('active')
		$('.feedback__content').fadeIn()
	})


	//акордеон доп возможности
	$('.dopv__item').click(function () {
		if ($(window).width() < 1024) {
			$(this).toggleClass('active')
			$(this).find('.drop__content').slideToggle()
		}
	})


	//чекнуть чекбокс
	$('.chekbox label').click(function () {
		$(this).parents('form').toggleClass('active-check');
	})


	//всплывающая форма
	$('.formshow').click(function () {
		$('.forma1').fadeIn(300)

		// $('body').addClass('noscroll')

	})
	$('.closesform').click(function () {
		$('.forma1').fadeOut(300)

		// $('body').removeClass('noscroll')

	})

	$('.forma1').mouseup(function (e) { // событие клика по веб-документу
		var div = $('.forma1 form'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.forma1').fadeOut(300)
			// $('body').removeClass('noscroll')
		}
	});

	//доп возможности
	$('.cardrdopva a').click(function () {
		$(this).toggleClass('active')
		$(this).parents('.dopv').find('.hidden').slideToggle(200)
	})

	//не активная кнопка формы
	$('.notactive .chekbox label').click(function () {

		$(this).parents('.notactive').toggleClass('active')
	})

	//фидбек счетчик
	let maxlenth = $('.feedback__content textarea').attr('maxlength')

	$('.feedback__content textarea').keyup(function () {

		let nowlenth = $('.feedback__content textarea').val().length
		if (nowlenth > 0) {
			$('.feadbtn').addClass('active')
		}
		if (nowlenth == 0) {
			$('.feadbtn').removeClass('active')
		}
		$('.feadbackcount span').html(maxlenth - nowlenth)
	})
	//автозаполнения поля по нажатию на кнопку

	$('.s5__input textarea').click(function () {
		if ($(this).val() == "") {
			$(this).val('Здравствуйте, ');

		}

	})

	$('.auto__wrap div').click(function () {
		let autotext = $(this).attr('data-text')
		let valtext = $(this).parents('.auto-text').find('textarea').val()
		$(this).parents('.auto-text').find('textarea').val(valtext + " \n" + autotext)

	})


	//показать больше текста мультипровайдер
	$('.tab_more_text.down').click(function () {
		let thisel = $(this)
		thisel.fadeOut(200)
		thisel.closest('.tab_item_wrap').find('.multi__img').fadeOut(200)
		setTimeout(function (e) {
			thisel.closest('.tab_item_wrap').find('.tab_item_more').slideDown()
		}, 200)
	})
	$('.tab_more_text.up').click(function () {
		let thisel = $(this)
		thisel.closest('.tab_item_wrap').find('.tab_more_text.down').fadeIn(200)
		thisel.closest('.tab_item_wrap').find('.tab_item_more').slideUp()
		setTimeout(function (e) {
			thisel.closest('.tab_item_wrap').find('.multi__img').fadeIn(200)

		}, 200)
	})



	//адаптив функциональность мультипровайдер
	function multifuncresize() {
		if ($(window).width() < 768) {
			$('.mobMultifunc').removeClass('multifunc')
		}
		if ($(window).width() > 767) {
			$('.mobMultifunc').addClass('multifunc')
		}
	}

	multifuncresize();

	$(window).resize(function () {
		multifuncresize();
	})

	//маски и валидация

	function formsub() {
		$('.forma1').removeClass('active')
		$('.carform__submite').fadeIn()
	}


	$(function () {
		$(".phone").mask("+7(999) 999-99-99");

		$(".formajax").validate({
			submitHandler: function (form) {
				formsub();
				//тут отправка аксом
			}
		});

		$(".section5 form").validate({
			submitHandler: function (form) {
				//тут отправка аксом
				$('.s5__form').addClass('active')
				$('.section5__sussces').fadeIn(500)
			}
		});
	})





	//страница документы
	$('.dtabs__level1').click(function () {
		let thisdtab = $(this)

		if ($(window).width() > 767) {
			if ($(this).hasClass('active') == 0) {
				$('.dtabs__level1').removeClass('active')
				$('.dtabs__head__wrap').slideUp(200)
				$(this).addClass('active')
				$(this).next('.dtabs__head__wrap').slideToggle(200)

				setTimeout(function (e) {
					thisdtab.next('.dtabs__head__wrap').find('.dtab').eq(0).click()
				}, 200)
			}
		} else {
			$(this).toggleClass('active')
			$(this).next('.dtabs__head__wrap').slideToggle(200)


		}

	})

	if ($(window).width() > 767) {
		$('.dcon').eq(0).fadeIn()
		$('.dtab').eq(0).addClass('active')
	}

	$('.dtab').click(function () {
		if ($(window).width() > 767) {
			let indextab = $(this).attr('data-tab')

			$('.dtab').removeClass('active')
			$(this).addClass('active')
			$('.dcon').fadeOut(200)

			setTimeout(function (e) {
				$('.dcon').eq(indextab).fadeIn(200)
			}, 200)
		}
	})
	$('.dtab span').click(function () {
		if ($(window).width() < 768) {
			$(this).toggleClass('active')
			$(this).next('.dmob-img').slideToggle()
		}
	})

	if ($('.dtabs__level1').length) {
		$('.dimg a').fancybox({
			btnTpl: {
				download:
					'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
					"</a>",
			},
			buttons: [
				"download",
				"close"
			]
		});
		$('.dmob-img a').fancybox({
			btnTpl: {
				download:
					'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
					"</a>",
			},
			buttons: [
				"download",
				"close"
			]
		});
	}
	if ($('.dtab').length) {
		let dtabLength = $('.dtab').length
		console.log(dtabLength)
		for (let i = 0; i <= dtabLength; i++) {
			$('.dtab').eq(i).attr('data-tab', i)
		}
	}

	//карьера
	$(".cartabs .cartab").click(function () {

		$(".cartabs .cartab").removeClass("active").eq($(this).index()).addClass("active");
		$(".carcon").hide().eq($(this).index()).fadeIn()

	}).eq(0).addClass("active");

	$('.carform .chekbox label').click(function () {
		$('.carform').toggleClass('active')
	})

	$('.file input').change(function () {
		$('.file input').each(function () {
			var fileName = $(this).val().split('/').pop().split('\\').pop();
			$('.file label').text('Изменить')
			$('.carform__link__first').removeAttr('required')
		});
	})




	$('.forma1').submit(function () {
		$(this).removeClass('active')
		return false
	});

	$('.carform__submite').mouseup(function (e) { // событие клика по веб-документу
		var div = $(".carform__sub"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.carform__submite').fadeOut()
		}
	});
	$('.carform__submite span').click(function () {
		$('.carform__submite').fadeOut()
	})


	//техподержка
	$('.supqa__item').click(function () {
		$(this).toggleClass('active')
		$(this).find('p').slideToggle(250)
	})
	if ($('.supqa__item').length) {
		if ($(window).width() < 560) {
			$('.supqa__item').eq(0).click()
		}
	}
	if ($('.supbot__t__r').length) {
		if ($(window).width() < 768) {
			$('.supbot__t__l').append($('.supbot__t__r'))
		}

		$(window).resize(function () {

			if ($(window).width() > 767) {
				$('.supbot__t').append($('.supbot__t__r'))
			}
			if ($(window).width() < 768) {
				$('.supbot__t__l').append($('.supbot__t__r'))
			}

		})
	}


	//криптопро
	if ($('.cripto').length) {

		$('.cripto__form').eq(0).fadeIn()
		//проставляем атрибуты
		let $ctabLenght = $('.ctab').length
		let $criptoCheckbox = $('.cripto__checkbox').length

		//cтавим автоматически метки
		for (let i = 0; i <= $criptoCheckbox; i++) {
			$('.cripto__checkbox').eq(i).find('input').attr('id', i)
			$('.cripto__checkbox').eq(i).find('label').attr('for', i)
		}

		for (let i = 0; i <= $ctabLenght; i++) {
			$('.ctab').eq(i).attr('data-tab', i)
		}

		//показываем первый
		$('.first').next('.ctab__wrap').slideDown(200)
		$('.first').addClass('active')
		$('.first').next('.ctab__wrap').find('.ctab').eq(0).click()

		//акорденон
		$('.ctab__item > span').click(function () {

			let ctabSpan = $(this)

			if (ctabSpan.hasClass('active') == 0) {

				$('.ctab__wrap').slideUp(200)

				setTimeout(function (e) {
					ctabSpan.next('.ctab__wrap').slideDown(200)
					ctabSpan.addClass('active')
				}, 200)

				$('.ctab__item > span').removeClass('active')
			}
		})


		//по клику показываем соответвующею таблицу
		$('.ctab').click(function () {

			if ($(this).hasClass('active') == 0) {
				$('.ctab').removeClass('active')
				$(this).addClass('active')

				let $dataTab = $(this).attr('data-tab')
				$('.cripto__form').fadeOut(200)
				setTimeout(function (e) {
					$('.cripto__form').eq($dataTab).fadeIn(200)
				}, 200)

			}

		})

		function criptoCounter() {
			if (criptoCount > 0) {
				$('.cripto__fix').fadeIn()
			}
			else {
				$('.cripto__fix').fadeOut()
			}
			$('.cripto__count').html(criptoCount)
			$('inpt.cripto__count').val(criptoCount)
			if (criptoCount == 1) {
				$('.count1').show()
				$('.count2').hide()
			}
			else {
				$('.count2').show()
				$('.count1').hide()
			}
		}

		//проставляем количество выбраных услуг
		let criptoCount = 0;
		$('.cripto__checkbox label').click(function () {
			$(this).toggleClass('active')

			if ($(this).hasClass('active')) {
				criptoCount++

			} else {
				criptoCount--
			}
			criptoCounter()
		})

		$('.cripto__fix-left button').click(function () {
			criptoCount = 0;
			$('.cripto__checkbox label').removeClass('active')
			$('.cripto__checkbox input').prop("checked", false);
			criptoCounter()
		})

	}


	//блог
	$('.blog__more a').click(function () {
		$(this).toggleClass('active')
		$(this).parents('.iblog').find('.hidden').slideToggle()
	})

	//о компанни слайдер
	if ($('.o-slider').length) {

		$('.o-slider__wrap').slick({
			slidesToShow: 3,

			arrows: true,
			draggable: true,
			slidesToScroll: 1,
			prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
			nextArrow: "<button type='button' class='slick-next pull-left'><i class='fas fa-chevron-right'></i></button>",
			infinite: false,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						variableWidth: false,
						arrows: false
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				}
			]

		});

		$('.o-slider_dots__li').click(function () {
			if ($(window).width() > 1199) {
				if ($(this).index() < 5) {
					console.log($(this).index())
					$('.o-slider__wrap').slick('slickGoTo', $(this).index() - 1);
				} else {
					$('.o-slider__wrap').slick('slickGoTo', 4);
				}
			}
			else {
				$('.o-slider__wrap').slick('slickGoTo', $(this).index());
			}

			slickClass()
		})

		$('.slick-arrow').click(function () {
			slickClass()
		})

		function slickClass() {
			$('.o-slider_dots__li').removeClass('ye')
			for (let i = 0; i < $('.slick-slide.slick-active').length; i++) {
				let slideIndex = $('.slick-slide.slick-active').eq(i).index()
				$('.o-slider_dots__li').eq(slideIndex).addClass('ye')
			}
		}

		$('.o-slider__wrap').on('swipe', function (event, slick, direction) {
			slickClass()

		});

		slickClass()


	}

})