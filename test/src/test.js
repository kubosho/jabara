/*global describe, before, beforeEach, after, afterEach, it, assert */

"use strict";

var assert = require("power-assert");
var jsdom = require("jsdom").jsdom;
var htmlStr = '<div class="js-jabara-container">\
               <section class="js-jabara">\
               <h1 class="js-jabara-title">\
               [Title]\
               </h1>\
               <div class="js-jabara-content">\
               <div class="inner">\
               [Content]\
               </div>\
               </div>\
               </section>\
               </div>';
global.document = jsdom(htmlStr, {
  scripts: "https://cdnjs.cloudflare.com/ajax/libs/classlist/2014.01.31/classList.min.js"
});
global.window = document.defaultView;

var Jabara = require("../../src/jabara");
var classList = require("../lib/classList");

describe("Jabara", function() {
  before(function() {
    this.jabara = new Jabara();
  });

  describe("#toggle", function() {
    it("should be .js-jabara-title element contains is-open class", function() {
      var titleE = global.document.querySelector(".js-jabara-title")

      this.jabara.toggle(titleE);
      assert.equal(titleE.classList.contains("is-open"), true);
    });
  });
});
