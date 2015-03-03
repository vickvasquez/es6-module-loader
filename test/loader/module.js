(function(global) {
  run = global.run ? 'second' : 'first';

  global.run = true;
})(typeof window == 'undefined' ? global : window);

export var run;