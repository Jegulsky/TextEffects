$(function() {
  $('.tlt-marquee').textillate({
    loop: true,
    initialDelay: 0,
    minDisplayTime: 0,
    autoStart: true,
    in: {
      effect: 'marqueeIn',
      delayScale: 1.5,
      delay: 50,
      sync: true
    },
    out: {
      effect: 'marqueeOut',
      delayScale: 1.5,
      delay: 50,
      sync: true
    },
    type: 'line'
  });
  $('.tlt-middleOut').textillate({
    loop: true,
    initialDelay: 0,
    minDisplayTime: 0,
    autoStart: true,
    in: {
      effect: 'fadeIn',
      reverse: true
    },
    out: {
      effect: 'fadeOut',
      reverse: true
    },
    type: 'char'
  });
  $('.tlt-zoomMiddle').textillate({
    loop: true,
    initialDelay: 0,
    minDisplayTime: 1000,
    autoStart: true,
    in: {
      effect: 'zoomMiddleIn',
      sync: true
    },
    out: {
      effect: 'zoomMiddleOut',
      sync: true
    },
    type: 'line'
  });
});
