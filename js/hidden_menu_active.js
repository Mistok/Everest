/*show hidden menu button*/
jQuery(document).ready(function($) {
			$('.hidden_menu_button').click(function(event) {
				$('.main_content,.menu_list,.main_menu').toggleClass('active');
			});
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