
/*show hidden menu button*/

jQuery(document).ready(function($) {
			$('.hidden_menu_button').click(function(event) {
				$('.main_content,.menu_list,.main_menu').toggleClass('active');
			});
		});

/* search form script*/

jQuery(document).ready(function($) {
				$('.search_form').click(function(event) {
					$('.search').toggleClass('active');
				});
			});

/*slick slider setting */

$('.sl').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

/*close hidden menu button */

jQuery(document).ready(function($) {
			$('.close').click(function(event) {
				$('.main_content,.menu_list,.main_menu').removeClass('active');
			});
		});

/* calendar script */

$("#calendar_in,#calendar_out").datetimepicker({
				timepicker:false,
 				format:'d.m.Y'
			});

