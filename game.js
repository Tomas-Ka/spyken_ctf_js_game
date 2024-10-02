var _0x499ac7 = function () {
  var _0x49ce41 = true;
  return function (_0x41d230, _0x2b13ca) {
    var _0x285730 = _0x49ce41 ? function () {
      if (_0x2b13ca) {
        var _0x450cac = _0x2b13ca.apply(_0x41d230, arguments);
        _0x2b13ca = null;
        return _0x450cac;
      }
    } : function () {};
    _0x49ce41 = false;
    return _0x285730;
  };
}();
var _0x3598db = _0x499ac7(this, function () {
  return _0x3598db.toString().search("(((.+)+)+)+$").toString().constructor(_0x3598db).search("(((.+)+)+)+$");
});
_0x3598db();
var _0x176fdc = function () {
  var _0x3d4734 = true;
  return function (_0x423d71, _0xf8a627) {
    var _0x26cb31 = _0x3d4734 ? function () {
      if (_0xf8a627) {
        var _0x57186c = _0xf8a627.apply(_0x423d71, arguments);
        _0xf8a627 = null;
        return _0x57186c;
      }
    } : function () {};
    _0x3d4734 = false;
    return _0x26cb31;
  };
}();
(function () {
  _0x176fdc(this, function () {
    var _0x5a1f0b = new RegExp("function *\\( *\\)");
    var _0x1a70ae = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    var _0x9b33a9 = _0x24d4d4("init");
    if (!_0x5a1f0b.test(_0x9b33a9 + "chain") || !_0x1a70ae.test(_0x9b33a9 + "input")) {
      _0x9b33a9('0');
    } else {
      _0x24d4d4();
    }
  })();
})();
var _0x5e6dd7 = function () {
  var _0x4ece00 = true;
  return function (_0x3d70d1, _0x1668c9) {
    var _0x15aa7c = _0x4ece00 ? function () {
      if (_0x1668c9) {
        var _0x59e014 = _0x1668c9.apply(_0x3d70d1, arguments);
        _0x1668c9 = null;
        return _0x59e014;
      }
    } : function () {};
    _0x4ece00 = false;
    return _0x15aa7c;
  };
}();
var _0xd1fbf3 = _0x5e6dd7(this, function () {
  var _0x1c0df5 = function () {
    var _0x42f71e;
    try {
      _0x42f71e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x4c3a93) {
      _0x42f71e = window;
    }
    return _0x42f71e;
  };
  var _0x57e7ea = _0x1c0df5();
  var _0x387ab2 = _0x57e7ea.console = _0x57e7ea.console || {};
  var _0x2a841d = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var _0x59386c = 0; _0x59386c < _0x2a841d.length; _0x59386c++) {
    var _0x46f3ba = _0x5e6dd7.constructor.prototype.bind(_0x5e6dd7);
    var _0x26b1d3 = _0x2a841d[_0x59386c];
    var _0x11b576 = _0x387ab2[_0x26b1d3] || _0x46f3ba;
    _0x46f3ba.__proto__ = _0x5e6dd7.bind(_0x5e6dd7);
    _0x46f3ba.toString = _0x11b576.toString.bind(_0x11b576);
    _0x387ab2[_0x26b1d3] = _0x46f3ba;
  }
});
_0xd1fbf3();
import _0x2f0ed9 from './main_menu.js';
import _0x5569fd from './main_game.js';
import _0x126539 from './game_over.js';
var _0x430eef = {
  'type': Phaser.AUTO,
  'width': 0x320,
  'height': 0x258,
  'scale': {
    'mode': Phaser.Scale.FIT,
    'autoCenter': Phaser.Scale.CENTER_BOTH
  }
};
var _0x1404b7 = new Phaser.Game(_0x430eef);
_0x1404b7.scene.add("main_menu", _0x2f0ed9);
_0x1404b7.scene.add("main_game", _0x5569fd);
_0x1404b7.scene.add("game_over", _0x126539);
_0x1404b7.scale.pageAlignHorizontally = true;
_0x1404b7.scale.pageAlignVertically = true;
_0x1404b7.scale.refresh();
_0x1404b7.scene.start("main_menu");
function _0x24d4d4(_0x236738) {
  function _0x8e5827(_0x3f468d) {
    if (typeof _0x3f468d === "string") {
      return function (_0x4d629a) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x3f468d / _0x3f468d).length !== 1 || _0x3f468d % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x8e5827(++_0x3f468d);
  }
  try {
    if (_0x236738) {
      return _0x8e5827;
    } else {
      _0x8e5827(0);
    }
  } catch (_0x1128b2) {}
}
