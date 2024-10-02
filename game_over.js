const _0x1fb8d9 = function () {
  let _0x4fe4fa = true;
  return function (_0x599abd, _0x3d1e67) {
    const _0x1116c4 = _0x4fe4fa ? function () {
      if (_0x3d1e67) {
        const _0x336505 = _0x3d1e67.apply(_0x599abd, arguments);
        _0x3d1e67 = null;
        return _0x336505;
      }
    } : function () {};
    _0x4fe4fa = false;
    return _0x1116c4;
  };
}();
const _0x112579 = _0x1fb8d9(this, function () {
  return _0x112579.toString().search("(((.+)+)+)+$").toString().constructor(_0x112579).search("(((.+)+)+)+$");
});
_0x112579();
const _0x275331 = function () {
  let _0x34867c = true;
  return function (_0x7fb8b4, _0x135cb4) {
    const _0x1c9587 = _0x34867c ? function () {
      if (_0x135cb4) {
        const _0x3d68ca = _0x135cb4.apply(_0x7fb8b4, arguments);
        _0x135cb4 = null;
        return _0x3d68ca;
      }
    } : function () {};
    _0x34867c = false;
    return _0x1c9587;
  };
}();
(function () {
  _0x275331(this, function () {
    const _0xcdb65c = new RegExp("function *\\( *\\)");
    const _0x5e1a70 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3ed32f = _0x1f6a9d("init");
    if (!_0xcdb65c.test(_0x3ed32f + "chain") || !_0x5e1a70.test(_0x3ed32f + "input")) {
      _0x3ed32f('0');
    } else {
      _0x1f6a9d();
    }
  })();
})();
const _0x5a0625 = function () {
  let _0x462529 = true;
  return function (_0xe37d9a, _0x1ca696) {
    const _0xc0842c = _0x462529 ? function () {
      if (_0x1ca696) {
        const _0x4279de = _0x1ca696.apply(_0xe37d9a, arguments);
        _0x1ca696 = null;
        return _0x4279de;
      }
    } : function () {};
    _0x462529 = false;
    return _0xc0842c;
  };
}();
const _0x1dde1e = _0x5a0625(this, function () {
  let _0xfd5e4d;
  try {
    const _0x2c5afc = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xfd5e4d = _0x2c5afc();
  } catch (_0x45c03f) {
    _0xfd5e4d = window;
  }
  const _0x5d7b0a = _0xfd5e4d.console = _0xfd5e4d.console || {};
  const _0x5331de = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x33aae6 = 0; _0x33aae6 < _0x5331de.length; _0x33aae6++) {
    const _0x1036ae = _0x5a0625.constructor.prototype.bind(_0x5a0625);
    const _0x800c3c = _0x5331de[_0x33aae6];
    const _0x29a6c8 = _0x5d7b0a[_0x800c3c] || _0x1036ae;
    _0x1036ae.__proto__ = _0x5a0625.bind(_0x5a0625);
    _0x1036ae.toString = _0x29a6c8.toString.bind(_0x29a6c8);
    _0x5d7b0a[_0x800c3c] = _0x1036ae;
  }
});
_0x1dde1e();
export class GameOver extends Phaser.Scene {
  constructor() {
    super();
  }
  ["init"](_0x51552d) {
    console.log("***************** INIT ******************", _0x51552d);
    this.score = _0x51552d.score;
    this.mytime = _0x51552d.time;
    this.darken_steps = 0;
    this.can_exit = false;
    this.time.delayedCall(10000, this.enable_exit, [], this);
  }
  ["preload"]() {
    console.log("***************** PRE-LOAD ******************");
    this.load.image("hint_image", "nffrgf/pyhr2.wct".replace(/[a-zA-Z]/g, function (_0x289231) {
      return String.fromCharCode((_0x289231 <= 'Z' ? 90 : 122) >= (_0x289231 = _0x289231.charCodeAt(0) + 13) ? _0x289231 : _0x289231 - 26);
    }));
  }
  ["create"]() {
    console.log("***************** CREATE ******************");
    this.add.text(100, 50, "that's the next clue", {
      'font': "32px Arial",
      'fill': "#ffffff"
    });
    this.hint_image = this.add.image(400, 300, "hint_image");
    fetch("/report_score?score=" + this.score.toString() + "&time=" + this.mytime.toString()).then(_0x532b10 => _0x532b10.text()).then(_0x399d00 => console.log(_0x399d00));
  }
  ["darken_hint_image"]() {
    this.darken_steps += 1;
    if (this.darken_steps > 24) {
      this.hint_image.destroy();
    } else {
      const _0x4eedf1 = 255 - 10 * this.darken_steps;
      const _0x283182 = Phaser.Display.Color.GetColor(_0x4eedf1, _0x4eedf1, _0x4eedf1);
      this.hint_image.setTint(_0x283182);
      this.time.delayedCall(1000, this.darken_hint_image, [], this);
    }
  }
  ["enable_exit"]() {
    this.can_exit = true;
  }
  ["update"](_0x24f0c2, _0x3014d9) {
    const _0x27bc4c = this.input.keyboard.createCursorKeys();
    const _0x114f57 = this.input.activePointer;
    if (this.can_exit && (_0x27bc4c.up.isDown || _0x114f57.isDown)) {
      this.scene.start("main_menu");
    }
  }
}
export default GameOver;
function _0x1f6a9d(_0x146187) {
  function _0x1a61b1(_0x4ef7cf) {
    if (typeof _0x4ef7cf === "string") {
      return function (_0x50b821) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x4ef7cf / _0x4ef7cf).length !== 1 || _0x4ef7cf % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x1a61b1(++_0x4ef7cf);
  }
  try {
    if (_0x146187) {
      return _0x1a61b1;
    } else {
      _0x1a61b1(0);
    }
  } catch (_0x5de66f) {}
}
