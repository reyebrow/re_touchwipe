/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the jquery cycle plugin in the re_contextlibraries module.
 *
 * Originally developed for use with the re_slideshow feature. You can override
 * this file in the context where the library is invoked.
 *
 * @see http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
 */
(function ($) {
  Drupal.behaviors.re_jquerytouchwipe = {
    attach: function(context) {
    var $slideshow_container =  $('.slideshow .slides > ul');
    $slideshow_container
      .touchwipe({
        wipeLeft: function() {
          $slideshow_container.cycle("next");
        },
        wipeRight: function() {
          $slideshow_container.cycle("prev");
        }
      });
    }
  }; /* Drupal.behaviors.re_jquerytouchwipe */
})(jQuery);