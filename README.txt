Provides the jQuery Touch Wipe plugin (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library) to the RE Context Libraries module - http://drupal.org/project/re_contextlibraries. 

The TouchWipe library can be found at /js/jquery.touchwipe.min.js

Allows you to obtain the wipe event on an iPhone, iPad or iPod Touch which can be used for example to scroll through an image gallery.

Please note that the javascript is looking to find a container with an class of "slideshow" containing a <ul> with the class "slides", this can be achieved using the Semantic Views module, http://drupal.org/project/semanticviews.

<div class="slideshow">
  <ul class="slides">
    <li>Slide1</li>
  </ul>
</div>