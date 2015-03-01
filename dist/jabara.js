(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Jabara = (function () {
    function Jabara(options) {
        var _this = this;
        this._contentHeightData = [];
        this._classNames = {
            arrowNone: "js-jabara-arrow-none",
            title: "js-jabara-title",
            content: "js-jabara-content",
            open: "is-open"
        };
        this._titleElms = document.getElementsByClassName(this._classNames.title);
        this._contentElms = document.getElementsByClassName(this._classNames.content);
        var opts = this._setupOptions(options);
        if (!opts.arrow) {
            [].forEach.call(this._titleElms, function (_titleE) {
                _this._arrowNone(_titleE);
            });
        }
        [].forEach.call(this._contentElms, function (_contentE) {
            _this._contentHeightData.push(_this._getElementHeight(_contentE));
            _contentE.style.transitionDuration = _this._toSeconds(opts.duration);
        });
    }
    Jabara.prototype.toggle = function (toriggerE) {
        var index = this._indexOfElement(toriggerE);
        this._titleE = this._titleElms[index];
        this._contentE = this._contentElms[index];
        if (toriggerE.classList.contains(this._classNames.open)) {
            this._close();
            this._contentE.style.height = "0";
        }
        else {
            this._open();
            this._contentE.style.height = this._contentHeightData[index];
        }
    };
    Jabara.prototype._open = function () {
        this._titleE.classList.add(this._classNames.open);
        this._contentE.classList.add(this._classNames.open);
    };
    Jabara.prototype._close = function () {
        this._titleE.classList.remove(this._classNames.open);
        this._contentE.classList.remove(this._classNames.open);
    };
    Jabara.prototype._setupOptions = function (options) {
        if (!options) {
            return {
                arrow: true,
                duration: 200
            };
        }
        options.arrow = (options.arrow !== undefined) ? options.arrow : true;
        options.duration = (options.duration !== undefined) ? options.duration : 200;
        return options;
    };
    Jabara.prototype._arrowNone = function (targetE) {
        targetE.classList.add(this._classNames.arrowNone);
    };
    Jabara.prototype._toSeconds = function (milliseconds) {
        return (milliseconds / 1000) + "s";
    };
    Jabara.prototype._getElementHeight = function (targetE) {
        var style = targetE.style;
        var height = "0";
        style.height = "auto";
        height = targetE.clientHeight + "px";
        style.height = "0";
        return height;
    };
    Jabara.prototype._indexOfElement = function (targetE) {
        var parentE4TargetE = targetE.parentElement;
        var parentE = parentE4TargetE.parentElement;
        return [].indexOf.call(parentE.children, parentE4TargetE);
    };
    return Jabara;
})();
window.Jabara = Jabara;
module.exports = Jabara;

},{}]},{},[1]);
