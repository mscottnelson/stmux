#!/usr/bin/env node

/*!
**  stmux -- Simple Terminal Multiplexing for Node Environments
**  Copyright (c) 2017-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _es = _interopRequireDefault(require("aggregation/es6"));

var _stmux0Info = _interopRequireDefault(require("./stmux-0-info"));

var _stmux1Options = _interopRequireDefault(require("./stmux-1-options"));

var _stmux2Parser = _interopRequireDefault(require("./stmux-2-parser"));

var _stmux3Screen = _interopRequireDefault(require("./stmux-3-screen"));

var _stmux4Title = _interopRequireDefault(require("./stmux-4-title"));

var _stmux5Terminal = _interopRequireDefault(require("./stmux-5-terminal"));

var _stmux6Border = _interopRequireDefault(require("./stmux-6-border"));

var _stmux7Help = _interopRequireDefault(require("./stmux-7-help"));

var _stmux8Errors = _interopRequireDefault(require("./stmux-8-errors"));

var _stmux9Keys = _interopRequireDefault(require("./stmux-9-keys"));

class STMUX extends (0, _es.default)(_stmux0Info.default, _stmux1Options.default, _stmux2Parser.default, _stmux3Screen.default, _stmux4Title.default, _stmux5Terminal.default, _stmux6Border.default, _stmux7Help.default, _stmux8Errors.default, _stmux9Keys.default) {
  main() {
    this.parseOptions();
    this.parseSpec();
    this.establishScreen();
    this.provisionInitially();
    this.establishHelp();
    this.handleErrors();
    this.handleKeys();
    this.renderScreen();
  }

  fatal(msg) {
    process.stderr.write(`${this.my.name}: ERROR: ${msg}\n`);
    process.exit(1);
  }

  terminate() {
    this.screen.destroy();
    process.exit(0);
  }

}

const stmux = new STMUX();
stmux.main();
