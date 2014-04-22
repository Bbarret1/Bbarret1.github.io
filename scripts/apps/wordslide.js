$(document).ready(function(){
  $('.inspiration').wordSlider({
  mode: 'fade',                       // 'horizontal', 'vertical', 'fade'
  infiniteLoop: false,                // true, false - display first slide after last
  hideControlOnEnd: false,            // true, false - if true, will hide 'next' control on last slide and 'prev' control on first
  speed: 1000,                        // integer - in ms, duration of time slide transitions will occupy
  auto: true,                         // true, false - make slideshow change automatically
  autoDirection: 'next',              // 'next', 'prev' - direction in which auto show will traverse
  autoControls: false,                // true, false - show 'start' and 'stop' controls for auto show
  autoControlsSelector: null,         // jQuery selector - element to contain the auto controls. ex: '#auto-controls'
  autoStart: true,                    // true, false - if false show will wait for 'start' control to activate
  autoHover: false,                   // true, false - if true show will pause on mouseover
  autoDelay: 2000,                    // integer - in ms, the amount of time before starting the auto show
  pause: 2000,                        // integer - in ms, the duration between each slide transition
  pager: false,                       // true / false - display a pager
  nextText: '',						  // string - text displayed for 'next' control
  prevText: '',						  // string - text displayed for 'prev' control
  });
});