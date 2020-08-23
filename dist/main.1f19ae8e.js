// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    // background: yellow;\n  }\n  .dog {\n    border:1px solid black;\n    margin:0 auto;\n    height: 50vh;\n    position: relative;\n    background:yellow;\n  }\n  .head {\n    width: 100px;\n    height: 80px;\n    border-radius: 40%;\n    background: white;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .head > .face {\n    position: absolute;\n    z-index: 4;\n    background: #f79e38;\n    width: 50px;\n    height: 40px;\n  }\n  .face_left {\n    top: -13px;\n    left: -17px;\n    border-radius: 30%;\n    transform: rotate(10deg);\n  }\n  \n  .face_right {\n    top: -10px;\n    right: -7px;\n    border-radius: 0 10%;\n  }\n  .head > .eye {\n    position: absolute;\n    top: 20px;\n    z-index: 5;\n    border: 1px solid black;\n    width: 8px;\n    height: 8px;\n    background: black;\n    border-radius: 50%;\n    animation: shinning 5s infinite;\n  }\n  @keyframes shinning {\n    0%,\n    100% {\n      animation-timing-function: step-end;\n    }\n    50%,\n    55% {\n      animation-timing-function: step-start;\n      opacity: 0;\n    }\n  }\n  .eye_left {\n    left: 32px;\n  }\n  .eye_right {\n    right: 30px;\n  }\n  .ear {\n    width: 40px;\n    height: 70px;\n    position: absolute;\n    z-index: 2;\n    background: #e88f36;\n    top: 50%;\n    left: 50%;\n    \n\n}\n  .ear_left {\n    border-radius: 20% 80%;\n    transform: translate(-130%, -115%);\n  }\n  .ear_right {\n    border-radius: 80% 20%;\n    transform: translate(30%,-115%);\n  }\n  .nose {\n     \n    position: absolute;\n    z-index:4;\n    // top: 245px;\n    // left: 185px;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-65%);\n    width: 100px;\n    height: 100px;\n  }\n  .nose_white {\n    position: absolute;\n    background: white;\n    z-index: 6;\n    top: -8px;\n    left: 0px;\n    width: 70px;\n    height: 40px;\n    border-radius: 10% 0 40% 30%/50%;\n    transform: rotateZ(20deg);\n  }\n  \n  .nose_black {\n    position: absolute;\n    z-index: 7;\n    top: -20px;\n    left: 0px;\n    width: 25px;\n    height: 20px;\n    background: black;\n    border-radius: 40% 50%;\n  }\n  \n  .head > .mouth {\n    border: 3px solid black;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    top: 18px;\n    left: 40px;\n    z-index: 5;\n    border-radius: 50%;\n    transform: rotateZ(30deg);\n    border-color: transparent black black transparent;\n  }\n  .body {\n\n    width: 250px;\n    height: 100px;\n    position: relative;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-10%,-90%);\n    border-radius: 10px 40px;\n    background: #f79e38;\n  }\n  .body > .neck {\n    width: 100px;\n    height: 100px;\n    position: relative;\n    z-index: 2;\n    border-radius: 30px 30px 30px 40px;\n    background: white;\n  }\n  .body > .neck_fur {\n    width: 8px;\n    height: 50px;\n    background: white;\n    border-radius: 40%;\n    position: absolute;\n  }\n  .fur1 {\n    top: 36px;\n    left: 0;\n  }\n  .fur2 {\n    top: 46px;\n    left: 10px;\n  }\n  \n  .legs {\n    width: 200px;\n    height: 100px;\n    position: relative;\n    z-index: 0;\n    top: -50%;\n    left: 50%;\n    transform: translateY(190px);\n  }\n  .leg_front {\n    width: 25px;\n    height: 60px;\n    position: absolute;\n    border-radius: 50%/20%;\n    background: #f79e38;\n  }\n  .front_left {\n    left:10px;\n    transform: rotate(30deg);\n    animation: left 1s ease infinite;\n  }\n  \n  .white {\n    position: absolute;\n    height: 18px;\n    width: 25px;\n    top: 42px;\n    border-radius: 0 0 50% 50%;\n    background: white;\n  }\n  \n  .front_right {\n    left: 60px;\n    transform:rotate(-30deg);\n    animation: right 1s ease infinite;\n  }\n  \n  .leg_back {\n    width: 25px;\n    height: 60px;\n    position: absolute;\n    z-index: 0;\n    border-radius: 50%/20%;\n    background: #f79e38;\n  }\n  .back_left {\n    left: 130px;\n    transform: rotate(30deg);\n    animation: left 1s ease infinite;\n  }\n  .back_right {\n    left: 180px;\n    transform:rotate(-30deg);\n    animation: right 1s ease infinite;\n  }\n  @keyframes left {\n    0%,\n    100% {\n      transform:rotate(30deg);\n    }\n    25%,\n    75% {\n      transform:rotate(0);\n    }\n    50% {\n      transform: rotate(-30deg);\n    }\n  }\n  @keyframes right {\n    0%,\n    100% {\n      transform: rotate(-30deg);\n    }\n    25%,\n    75% {\n      transform:rotate(0);\n    }\n    50% {\n      transform:rotate(30deg);\n    }\n  }\n  .tail {\n    width: 50px;\n    height: 25px;\n    border-radius: 30% 30% 60%/80% 40%;\n    position: absolute;\n    z-index: 0;\n    background: #f79e38;\n    top: 50%;\n    left: 50%;\n    transform: translate(200px,-5px) rotate(-30deg);\n    transform-origin: left center;\n    animation: wave 300ms ease infinite;\n  }\n  @keyframes wave {\n    0% {\n      transform:translate(200px,-5px) rotate(-30deg);\n    }\n    25% {\n      transform:translate(200px,-5px) rotate(-60deg);\n    }\n    50% {\n      transform:translate(200px,-5px) rotate(-30deg);\n    }\n    75% {\n      transform:translate(200px,-5px) rotate(0deg);\n    }\n    100% {\n      transform:translate(200px,-5px) rotate(-30deg);\n    }\n  }\n  \n";
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var n = 0;
var time = 100;
var id;
var player = {
  init: function init() {
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    var hashTable = {
      "#play": player.play,
      "#pause": player.pause,
      "#fast": player.fast,
      "#normal": player.normal,
      "#slow": player.slow
    };

    for (var key in hashTable) {
      document.querySelector(key).onclick = hashTable[key];
    }
  },
  run: function run() {
    n += 1;

    if (n > string.length) {
      window.clearInterval(id);
      return;
    }

    console.log(n + ":" + string.substring(0, n));
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = 9999;
  },
  play: function play() {
    id = setInterval(player.run, time); //没time ms调用一次play.run函数
  },
  pause: function pause() {
    window.clearInterval(id); //取消setInterval，不重复
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 100;
    player.play();
  },
  slow: function slow() {
    player.pause();
    time = 300;
    player.play();
  }
};
player.init();
},{}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53121" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map