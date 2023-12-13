/*
Template: Sofbox - Responsive Bootstrap 4 Admin Dashboard Template
Author: iqonicthemes.in
Design and Developed by: iqonicthemes.in
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Tooltip
:: Sidebar Widget
:: Ripple Effect
:: Accordion
:: Ticket Booking
:: Owl Carousel
:: Search input
:: Scrollbar
:: Progress Bar
:: Page Loader
:: Page Menu
:: Mail Inbox

------------------------------------------------
Index Of Script
----------------------------------------------*/

import $ from 'jquery';
import Scrollbar from './smooth-scrollbar';

(function () {
  "use strict";
  $(document).ready(function () {

    /*---------------------------------------------------------------------
    Tooltip
    -----------------------------------------------------------------------*/
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    /*---------------------------------------------------------------------
    Sidebar Widget
    -----------------------------------------------------------------------*/
    function checkClass(ele, type, className) {
      switch (type) {
        case 'addClass':
          if (!ele.hasClass(className)) {
            ele.addClass(className);
          }
          break;
        case 'removeClass':
          if (ele.hasClass(className)) {
            ele.removeClass(className);
          }
          break;
        case 'toggleClass':
          ele.toggleClass(className);
          break;
      }
    }
    $('.iq-sidebar-menu .active').each(function (ele, index) {
      $(this).addClass('active');
      $(this).find('.iq-submenu').addClass('show');
    })
  
    /*---------------------------------------------------------------------
    Ripple Effect
    -----------------------------------------------------------------------*/
    $(document).on('click', ".iq-waves-effect", function (e) {
      // Remove any old one
      $('.ripple').remove();
      // Setup
      let posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();

      // Add the element
      $(this).prepend("<span class='ripple'></span>");


      // Make it round!
      if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight;
      }

      // Get the center of the element
      let x = e.pageX - posX - buttonWidth / 2;
      let y = e.pageY - posY - buttonHeight / 2;


      // Add the ripples CSS and start the animation
      $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
      }).addClass("rippleEffect");
    });

    /*---------------------------------------------------------------------
    FullScreen
    -----------------------------------------------------------------------*/
    $(document).on('click', '.iq-full-screen', function () {
      let elem = $(this);
      if (!document.fullscreenElement &&
        !document.mozFullScreenElement && // Mozilla
        !document.webkitFullscreenElement && // Webkit-Browser
        !document.msFullscreenElement) { // MS IE ab version 11

        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');
    });



    $('.iq-accordion .iq-accordion-block .accordion-details').hide();
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
    $(document).on("click", '.iq-accordion .iq-accordion-block', function () {
      if ($(this).children('div.accordion-details ').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
        $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
      }
    });
  });


  $(window).on('load', function (e) {

    /*---------------------------------------------------------------------
    Page Loader
    -----------------------------------------------------------------------*/
    $("#load").fadeOut();
    $("#loading").delay().fadeOut("");

    /*---------------------------------------------------------------------
   Ticket Booking
   -----------------------------------------------------------------------*/
    $(document).on('click', '.iq-booking-screen .iq-booking-no .list-inline-item .iq-seat ', function (e) {
      e.preventDefault();
      let sheet = 0;
      if (!$(this).hasClass('bg-secondary')) {
        $(this).toggleClass('active');
        sheet = $('.iq-booking-screen').find('.iq-seat.active').length;
        $('.iq-film-block').find('span').text(sheet);
      }
    });
    $(document).on('click', '.ri-close-circle-line', function () {
      $(this).parent().parent().parent().parent().parent().removeClass('film-side');
    });

    $(document).on('click', '.iq-film-block', function () {
      if (parseInt($(this).find('span').text()) > 0) {
        $('.iq-sidebar-right-menu').addClass('film-side');
      }
    });


    /*---------------------------------------------------------------------
   Owl Carousel
   -----------------------------------------------------------------------*/
    $('.owl-carousel').each(function () {
      let jQuerycarousel = $(this);
      jQuerycarousel.owlCarousel({
        items: jQuerycarousel.data("items"),
        loop: jQuerycarousel.data("loop"),
        margin: jQuerycarousel.data("margin"),
        nav: jQuerycarousel.data("nav"),
        dots: jQuerycarousel.data("dots"),
        autoplay: jQuerycarousel.data("autoplay"),
        autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
        navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
        responsiveClass: true,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: jQuerycarousel.data("items-mobile-sm"),
            nav: false,
            dots: true
          },
          // breakpoint from 480 up
          480: {
            items: jQuerycarousel.data("items-mobile"),
            nav: false,
            dots: true
          },
          // breakpoint from 786 up
          786: {
            items: jQuerycarousel.data("items-tab")
          },
          // breakpoint from 1023 up
          1023: {
            items: jQuerycarousel.data("items-laptop")
          },
          1199: {
            items: jQuerycarousel.data("items")
          }
        }
      });
    });

    /*---------------------------------------------------------------------
    Search input
    -----------------------------------------------------------------------*/
    $(document).on('click', function (e) {
      let myTargetElement = e.target;
      let selector, mainElement;
      if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
        if ($(myTargetElement).hasClass('search-toggle')) {
          selector = $(myTargetElement).parent();
          mainElement = $(myTargetElement);
        } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
          selector = $(myTargetElement).parent().parent();
          mainElement = $(myTargetElement).parent();
        } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
          selector = $(myTargetElement).parent().parent().parent();
          mainElement = $(myTargetElement).parent().parent();
        }
        if (!mainElement.hasClass('active') && $(".navbar-list li").find('.active')) {
          $('.navbar-list li').removeClass('iq-show');
          $('.navbar-list li .search-toggle').removeClass('active');
        }

        selector.toggleClass('iq-show');
        mainElement.toggleClass('active');

        e.preventDefault();
      } else if ($(myTargetElement).is('.search-input')) { } else {
        $('.navbar-list li').removeClass('iq-show');
        $('.navbar-list li .search-toggle').removeClass('active');
      }
    });

    /*---------------------------------------------------------------------
    Scrollbar
    -----------------------------------------------------------------------*/
    if ($('#sidebar-scrollbar').length) {
      Scrollbar.init(document.querySelector('#sidebar-scrollbar'));
    }
    let Scrollbar1 = window.Scrollbar;
    if ($('#right-sidebar-scrollbar').length) {
      Scrollbar1.init(document.querySelector('#right-sidebar-scrollbar'));
    }

    /*---------------------------------------------------------------------
    Progress Bar
    -----------------------------------------------------------------------*/
    $('.iq-progress-bar > span').each(function () {
      let progressBar = $(this);
      let width = $(this).data('percent');
      progressBar.css({
        'transition': 'width 2s'
      });

      setTimeout(function () {
        progressBar.appear(function () {
          progressBar.css('width', width + '%');
        });
      }, 100);
    });


    /*---------------------------------------------------------------------
    Page Menu
    -----------------------------------------------------------------------*/
    $(document).on('click', '.wrapper-menu', function () {
      $(this).toggleClass('open');
    });

    $(document).on('click', ".wrapper-menu", function () {
      $("body").toggleClass("sidebar-main");
    });

    /*---------------------------------------------------------------------
    Mailbox
    -----------------------------------------------------------------------*/
    $(document).ready(function () {
      $('ul.iq-email-sender-list li').click(function () {
        $(this).next().addClass('show');
      });

      $('.email-app-details li h4').click(function () {
        $('.email-app-details').removeClass('show');
      });
    });

    /*---------------------------------------------------------------------
    chatuser
    -----------------------------------------------------------------------*/
    $(document).ready(function () {
      $('.chat-head .chat-user-profile').click(function () {
        $(this).parent().next().toggleClass('show');
      });
      $('.user-profile .close-popup').click(function () {
        $(this).parent().parent().removeClass('show');
      });
    });

    /*---------------------------------------------------------------------
    chatuser main
    -----------------------------------------------------------------------*/
    $(document).ready(function () {
      $('.chat-search .chat-profile').click(function () {
        $(this).parent().next().toggleClass('show');
      });
      $('.user-profile .close-popup').click(function () {
        $(this).parent().parent().removeClass('show');
      });
    });

    /*---------------------------------------------------------------------
    Chat start
    -----------------------------------------------------------------------*/
    $(document).ready(function () {
      $('#chat-start').click(function () {
        $('.chat-data-left').toggleClass('show');
      });
      $('.close-btn-res').click(function () {
        $('.chat-data-left').removeClass('show');
      });
      $('.iq-chat-ui li').click(function () {
        $('.chat-data-left').removeClass('show');
      });
      $('.sidebar-toggle').click(function () {
        $('.chat-data-left').addClass('show');
      });
    });

    /*---------------------------------------------------------------------
    todo Page 
    -----------------------------------------------------------------------*/
    $(document).ready(function () {
      $('.todo-task-list > li > a').click(function () {
        $('.todo-task-list li').removeClass('active');
        $('.todo-task-list .sub-task').removeClass('show');
        $(this).parent().toggleClass('active');
        $(this).next().toggleClass('show');
      });
      $('.todo-task-list > li li > a').click(function () {
        $('.todo-task-list li li').removeClass('active');
        $(this).parent().toggleClass('active');
      });
    });
    /*---------------------------------------------------------------------
    Form Validation
    -----------------------------------------------------------------------*/

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict';
      window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

    /*---------------------------------------------------------------------
    Sidebar Widget
    -----------------------------------------------------------------------*/
    $(document).ready(function () {
      $('.todo-task-lists li').click(function () {
        if ($(this).find('input:checkbox[name=todo-check]').is(":checked")) {

          $(this).find('input:checkbox[name=todo-check]').attr("checked", false);
          $(this).removeClass('active-task');
        }
        else {
          $(this).find('input:checkbox[name=todo-check]').attr("checked", true);
          $(this).addClass('active-task');
        }
        // $(this).addClass('active-task');
      });
    });

    /*---------------------------------------------------------------------
        checkout
     -----------------------------------------------------------------------*/

    $(document).ready(function () {
      $('#place-order').click(function () {
        $('#cart').removeClass('show');
        $('#address').addClass('show');
        $('#step1').removeClass('active');
        $('#step1').addClass('done');
        $('#step2').addClass('active');
      });
      $('#deliver-address').click(function () {
        $('#address').removeClass('show');
        $('#payment').addClass('show');
        $('#step2').removeClass('active');
        $('#step2').addClass('done');
        $('#step3').addClass('active');
      });
    });

    /*---------------------------------------------------------------------
       Scroll up menu
    -----------------------------------------------------------------------*/
    var position = $(window).scrollTop();
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      //  console.log(scroll);

      if (scroll < position) {
        $('.tab-menu-horizontal').addClass('menu-up');
        $('.tab-menu-horizontal').removeClass('menu-down');
      }
      else {
        $('.tab-menu-horizontal').addClass('menu-down');
        $('.tab-menu-horizontal').removeClass('menu-up');
      }
      if (scroll == 0) {
        $('.tab-menu-horizontal').removeClass('menu-up');
        $('.tab-menu-horizontal').removeClass('menu-down');
      }
      position = scroll;
    });



  });
})();







