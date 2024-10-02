var _0x5cb667 = function () {
  var _0x3b05a0 = true;
  return function (_0x218048, _0x373fa1) {
    var _0x15cffb = _0x3b05a0 ? function () {
      if (_0x373fa1) {
        var _0x2bce70 = _0x373fa1.apply(_0x218048, arguments);
        _0x373fa1 = null;
        return _0x2bce70;
      }
    } : function () {};
    _0x3b05a0 = false;
    return _0x15cffb;
  };
}();
var _0x170d96 = _0x5cb667(this, function () {
  return _0x170d96.toString().search("(((.+)+)+)+$").toString().constructor(_0x170d96).search("(((.+)+)+)+$");
});
_0x170d96();
var _0x5e8d09 = function () {
  var _0x40ee8e = true;
  return function (_0x129daa, _0x5a1446) {
    var _0x34e87c = _0x40ee8e ? function () {
      if (_0x5a1446) {
        var _0x5d97c4 = _0x5a1446.apply(_0x129daa, arguments);
        _0x5a1446 = null;
        return _0x5d97c4;
      }
    } : function () {};
    _0x40ee8e = false;
    return _0x34e87c;
  };
}();
(function () {
  _0x5e8d09(this, function () {
    var _0x271265 = new RegExp("function *\\( *\\)");
    var _0x5853d9 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    var _0x3e0ced = _0x8e7b2a("init");
    if (!_0x271265.test(_0x3e0ced + "chain") || !_0x5853d9.test(_0x3e0ced + "input")) {
      _0x3e0ced('0');
    } else {
      _0x8e7b2a();
    }
  })();
})();
var _0x4e30b6 = function () {
  var _0x5a8a8d = true;
  return function (_0x5534c3, _0x5bc94a) {
    var _0x4fc930 = _0x5a8a8d ? function () {
      if (_0x5bc94a) {
        var _0xcf40cf = _0x5bc94a.apply(_0x5534c3, arguments);
        _0x5bc94a = null;
        return _0xcf40cf;
      }
    } : function () {};
    _0x5a8a8d = false;
    return _0x4fc930;
  };
}();
var _0x47087d = _0x4e30b6(this, function () {
  var _0x463df8 = function () {
    var _0x2791aa;
    try {
      _0x2791aa = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x882860) {
      _0x2791aa = window;
    }
    return _0x2791aa;
  };
  var _0x2f5dd1 = _0x463df8();
  var _0x34976a = _0x2f5dd1.console = _0x2f5dd1.console || {};
  var _0x5c1a72 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var _0x56a9e9 = 0; _0x56a9e9 < _0x5c1a72.length; _0x56a9e9++) {
    var _0x3a7ab4 = _0x4e30b6.constructor.prototype.bind(_0x4e30b6);
    var _0x473822 = _0x5c1a72[_0x56a9e9];
    var _0x599dde = _0x34976a[_0x473822] || _0x3a7ab4;
    _0x3a7ab4.__proto__ = _0x4e30b6.bind(_0x4e30b6);
    _0x3a7ab4.toString = _0x599dde.toString.bind(_0x599dde);
    _0x34976a[_0x473822] = _0x3a7ab4;
  }
});
_0x47087d();
import { makeMap } from './levels.js';
var _0x16cbd7;
var _0x360771;
var _0x28fb93;
var _0x3d6862;
var _0x58ae2e;
var _0x6143b4;
var _0xa25917;
var _0x410bd3;
var _0x15bb71;
var _0x362008;
var _0x30a308;
var _0x5e4bf9 = {
  'left': false,
  'up': false,
  'down': false,
  'right': false
};
var _0x10fd7;
var _0x4505af;
var _0x4b7661;
var _0x1d789a;
var _0x3dd18a = 0;
var _0x522f42 = null;
function _0x42b56d(_0x40817a, _0x4f18f5) {
  _0x360771.play();
  _0x3dd18a += 1;
  if (!_0x522f42) {
    _0x522f42 = new Date();
  }
  const _0x331347 = new Date();
  const _0x5d31c0 = _0x331347 - _0x522f42;
  const _0x403738 = "/report_death?level=" + this.level_nbr.toString() + "&deaths=" + _0x3dd18a.toString() + "&time=" + _0x5d31c0.toString() + "&success=0";
  fetch(_0x403738).then(_0x252e40 => _0x252e40.text()).then(_0x261e6d => console.log(_0x261e6d));
  _0x522f42 = null;
  _0x40817a.setPosition(_0x6143b4, _0xa25917);
}
function _0x16c2a5(_0x4aab01, _0x4f29fa) {
  _0x30a308 = true;
  if (!_0x522f42) {
    _0x522f42 = new Date();
  }
  const _0x7b4562 = new Date();
  const _0x38a28c = _0x7b4562 - _0x522f42;
  const _0x711dd6 = "/report_death?level=" + this.level_nbr.toString() + "&deaths=" + _0x3dd18a.toString() + "&time=" + _0x38a28c.toString() + "&success=1";
  fetch(_0x711dd6).then(_0x4a608f => _0x4a608f.text()).then(_0x12be61 => console.log(_0x12be61));
}
export class MainGame extends Phaser.Scene {
  constructor() {
    super({
      'physics': {
        'default': "arcade",
        'arcade': {
          'gravity': {
            'y': 0x0
          },
          'debug': false
        }
      }
    });
  }
  ["init"](_0xc2953b) {
    console.log("***************** INIT ******************", _0xc2953b);
    this.level_nbr = _0xc2953b.level_nbr;
  }
  ["preload"]() {
    this.load.image("sky", "./assets/sky.png");
    this.load.image("goal", "./assets/donut.png");
    this.load.image("dude", "./assets/gem2.png");
    this.load.image("ground", "./assets/platform.png");
    this.load.audio("ping", "./assets/ping.mp3");
    this.load.audio("bkg_music", "./assets/autoarp_fast.mp3");
    this.load.audio("applause", "./assets/applause.wav");
  }
  ["create"]() {
    _0x362008 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    this.input.addPointer(3);
    _0x16cbd7 = this.sound.add("bkg_music", {
      'volume': 0.2,
      'loop': true
    });
    _0x16cbd7.play();
    _0x360771 = this.sound.add("ping");
    _0x28fb93 = this.sound.add("applause");
    this.add.image(400, 300, "sky");
    this.add.text(10, 0, "Level: " + this.level_nbr.toString() + " / 3", {
      'font': "32px Arial",
      'fill': "#000000"
    });
    [_0x410bd3, _0x3d6862, _0x6143b4, _0xa25917, _0x58ae2e] = makeMap(this.level_nbr, this, _0x410bd3, _0x3d6862, _0x58ae2e);
    _0x3d6862.setBounce(0.1);
    _0x3d6862.setCollideWorldBounds(true);
    _0x58ae2e.setImmovable(true);
    _0x30a308 = false;
    _0x522f42 = null;
    _0x15bb71 = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(_0x3d6862, _0x410bd3, _0x42b56d, null, this);
    this.physics.add.collider(_0x3d6862, _0x58ae2e, _0x16c2a5, null, this);
    _0x10fd7 = this.add.rectangle(0, 0, 450, 1200, "#000000", 0).setInteractive();
    _0x4505af = this.add.rectangle(450, 0, 250, 600, "#000000", 0).setInteractive();
    _0x4b7661 = this.add.rectangle(450, 600, 250, 600, "#000000", 0).setInteractive();
    _0x1d789a = this.add.rectangle(850, 0, 300, 1200, "#000000", 0).setInteractive();
    this.input.on("gameobjectdown", function (_0x819ad4, _0x346897, _0x5a7b5b) {
      console.log("gameobjectdown");
      if (_0x346897 == _0x10fd7) {
        _0x5e4bf9.left = true;
      } else {
        if (_0x346897 == _0x4505af) {
          _0x5e4bf9.up = true;
        } else {
          if (_0x346897 == _0x4b7661) {
            _0x5e4bf9.down = true;
          } else {
            if (_0x346897 == _0x1d789a) {
              _0x5e4bf9.right = true;
            }
          }
        }
      }
    });
    this.input.on("gameobjectup", function (_0x3a18c2, _0x413221) {
      console.log("gameobjectup");
      if (_0x413221 == _0x4505af) {
        _0x5e4bf9.up = false;
      } else {
        if (_0x413221 == _0x1d789a) {
          _0x5e4bf9.right = false;
        }
      }
    });
    this.input.on("gameobjectout", function (_0x436332, _0x1c8ac7) {
      console.log("gameobjectout");
      if (_0x1c8ac7 == _0x4505af) {
        _0x5e4bf9.up = false;
      } else {
        if (_0x1c8ac7 == _0x1d789a) {
          _0x5e4bf9.right = false;
        }
      }
    });
  }
  ["update"]() {
    const _0x3dad2d = this.input.activePointer;
    if (Math.hypot(_0x6143b4 - _0x3d6862.x, _0xa25917 - _0x3d6862.y) > 50) {
      if (!_0x522f42) {
        _0x522f42 = new Date();
      }
    }
    if (_0x15bb71.right.isDown || false && _0x3dad2d.isDown && Phaser.Geom.Rectangle.Contains(_0x1d789a, _0x3dad2d.x, _0x3dad2d.y) || false) {
      _0x3d6862.setVelocityX(225);
    } else {
      _0x3d6862.setVelocityX(-225);
    }
    if (_0x15bb71.up.isDown || false && _0x3dad2d.isDown && Phaser.Geom.Rectangle.Contains(_0x4505af, _0x3dad2d.x, _0x3dad2d.y) || false) {
      _0x3d6862.setVelocityY(-225);
    } else {
      _0x3d6862.setVelocityY(225);
    }
    if (_0x30a308) {
      _0x16cbd7.stop();
      if (this.level_nbr == 3) {
        _0x28fb93.play();
        this.scene.start("game_over", {
          'score': 0x0,
          'time': 0x0
        });
      } else {
        this.scene.start("main_game", {
          'level_nbr': this.level_nbr + 1
        });
      }
    }
    if (_0x362008.isDown) {
      _0x16cbd7.stop();
      this.scene.start("main_menu");
    }
  }
}
export default MainGame;
function _0x8e7b2a(_0x3b63f9) {
  function _0x62af6a(_0x301e96) {
    if (typeof _0x301e96 === "string") {
      return function (_0xd2f724) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x301e96 / _0x301e96).length !== 1 || _0x301e96 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x62af6a(++_0x301e96);
  }
  try {
    if (_0x3b63f9) {
      return _0x62af6a;
    } else {
      _0x62af6a(0);
    }
  } catch (_0x5d0f47) {}
}
