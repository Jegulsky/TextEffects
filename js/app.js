$(function() {
  $('.tlt-marquee').textillate({
    loop: true,
    initialDelay: 0,
    minDisplayTime: 0,
    autoStart: true,
    in: {
      effect: 'marqueeIn',
      delayScale: 1.5,
      delay: 0,
      sync: true
    },
    out: {
      effect: 'marqueeOut',
      delayScale: 1.5,
      delay: 0,
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
      effect: 'middleOutIn',
      bothSides: true,
      delayScale: 1,
      delay: 50,
    },
    out: {
      effect: 'middleOutOut',
      bothSides: true,
      revers: true,
      delayScale: 1,
      delay: 50,
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
