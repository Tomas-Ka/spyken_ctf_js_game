var _0x5f3283 = function () {
  var _0x539fa8 = true;
  return function (_0xa5ea12, _0x6c2579) {
    var _0x408367 = _0x539fa8 ? function () {
      if (_0x6c2579) {
        var _0x28ae20 = _0x6c2579.apply(_0xa5ea12, arguments);
        _0x6c2579 = null;
        return _0x28ae20;
      }
    } : function () {};
    _0x539fa8 = false;
    return _0x408367;
  };
}();
var _0x29fe71 = _0x5f3283(this, function () {
  return _0x29fe71.toString().search("(((.+)+)+)+$").toString().constructor(_0x29fe71).search("(((.+)+)+)+$");
});
_0x29fe71();
var _0xdcd937 = function () {
  var _0x199c8d = true;
  return function (_0x1f62a4, _0x415900) {
    var _0x3d7f41 = _0x199c8d ? function () {
      if (_0x415900) {
        var _0x4869d1 = _0x415900.apply(_0x1f62a4, arguments);
        _0x415900 = null;
        return _0x4869d1;
      }
    } : function () {};
    _0x199c8d = false;
    return _0x3d7f41;
  };
}();
(function () {
  _0xdcd937(this, function () {
    var _0x2c8c5c = new RegExp("function *\\( *\\)");
    var _0x2068ec = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    var _0x59214b = _0x30bd26("init");
    if (!_0x2c8c5c.test(_0x59214b + "chain") || !_0x2068ec.test(_0x59214b + "input")) {
      _0x59214b('0');
    } else {
      _0x30bd26();
    }
  })();
})();
var _0x3e87cf = function () {
  var _0x1ce9ea = true;
  return function (_0x35d746, _0x4a128e) {
    var _0x404757 = _0x1ce9ea ? function () {
      if (_0x4a128e) {
        var _0x650348 = _0x4a128e.apply(_0x35d746, arguments);
        _0x4a128e = null;
        return _0x650348;
      }
    } : function () {};
    _0x1ce9ea = false;
    return _0x404757;
  };
}();
var _0x340343 = _0x3e87cf(this, function () {
  var _0x5396e8;
  try {
    var _0xf8eea = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5396e8 = _0xf8eea();
  } catch (_0x3c2722) {
    _0x5396e8 = window;
  }
  var _0x28838c = _0x5396e8.console = _0x5396e8.console || {};
  var _0x1f8e46 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var _0x34d68d = 0; _0x34d68d < _0x1f8e46.length; _0x34d68d++) {
    var _0x207997 = _0x3e87cf.constructor.prototype.bind(_0x3e87cf);
    var _0x2b16b1 = _0x1f8e46[_0x34d68d];
    var _0x658df3 = _0x28838c[_0x2b16b1] || _0x207997;
    _0x207997.__proto__ = _0x3e87cf.bind(_0x3e87cf);
    _0x207997.toString = _0x658df3.toString.bind(_0x658df3);
    _0x28838c[_0x2b16b1] = _0x207997;
  }
});
_0x340343();
export class MainMenu extends Phaser.Scene {
  constructor() {
    super();
  }
  ["preload"]() {
    this.load.image("particle", "assets/green.png");
    this.load.image("logo", "assets/logo.png");
    this.load.image("faster", "assets/but_faster2.png");
    this.load.audio("bkg_music2", "./assets/scary.mp3");
  }
  ["init"]() {
    this.can_exit = false;
  }
  ["enable_exit"]() {
    this.can_exit = true;
  }
  ["add_but_faster"]() {
    this.add.image(550, 400, "faster");
    this.music.play();
  }
  ["create"]() {
    this.event_timeout = false;
    this.sprites = [];
    this.scroll_dx = Math.random();
    this.scroll_dy = Math.random();
    this.t = 300;
    for (var _0x215c6e = 0; _0x215c6e < 100; _0x215c6e++) {
      var _0x40ae07 = Phaser.Math.Between(-100, 900);
      var _0xa3ccd2 = Phaser.Math.Between(-100, 700);
      var _0x33fc08 = this.add.image(_0x40ae07, _0xa3ccd2, "particle");
      this.sprites.push({
        's': _0x33fc08,
        'r': 0.4 * (1 + Math.random() * 6)
      });
    }
    this.add.image(400, 300, "logo");
    this.time.delayedCall({
      'delay': 0xbb8,
      'callback': function _0x188753() {
        this.event_timeout = true;
      },
      'callbackScope': this
    });
    this.music = this.sound.add("bkg_music2", {
      'volume': 0.2,
      'loop': true
    });
  }
  ["update"](_0x5cde90, _0xe12b83) {
    this.t += 1;
    for (var _0x3ea074 = 0; _0x3ea074 < this.sprites.length; _0x3ea074++) {
      var _0x4f8a23 = this.sprites[_0x3ea074].s;
      _0x4f8a23.y -= this.scroll_dy * this.sprites[_0x3ea074].r;
      _0x4f8a23.x -= this.scroll_dx * this.sprites[_0x3ea074].r;
      if (_0x4f8a23.y < -100) {
        _0x4f8a23.y = 700;
      }
      if (_0x4f8a23.y > 700) {
        _0x4f8a23.y = -100;
      }
      if (_0x4f8a23.x < -100) {
        _0x4f8a23.x = 900;
      }
      if (_0x4f8a23.x > 900) {
        _0x4f8a23.x = -100;
      }
    }
    const _0x4e9cd3 = this.input.keyboard.createCursorKeys();
    const _0x352744 = this.input.activePointer;
    if (_0x4e9cd3.up.isDown || _0x352744.isDown) {
      this.add_but_faster();
      this.time.delayedCall(1000, this.enable_exit, [], this);
    }
    if (this.can_exit && (_0x4e9cd3.up.isDown || _0x352744.isDown)) {
      this.music.stop();
      this.scene.start("main_game", {
        'level_nbr': 0x1
      });
    }
  }
}
export default MainMenu;
function _0x30bd26(_0x13f392) {
  function _0x45c2b7(_0x22da84) {
    if (typeof _0x22da84 === "string") {
      return function (_0x37d9b3) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x22da84 / _0x22da84).length !== 1 || _0x22da84 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        false;
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x45c2b7(++_0x22da84);
  }
  try {
    if (_0x13f392) {
      return _0x45c2b7;
    } else {
      _0x45c2b7(0);
    }
  } catch (_0x5dbebf) {}
}
