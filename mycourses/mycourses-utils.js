// ==UserScript==
// @name         mycourses-utils
// @namespace    Monkey Scripts
// @description  Quality of life improvements for RIT MyCourses
// @author       Ethan Logue
// @version      1.0
// @match        https://mycourses.rit.edu/*
// @icon         https://mycourses.rit.edu/d2l/lp/web/faviconView?variant=0&version=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = `
        .d2l-offscreen {
            position: relative !important;
            left: 0 !important;
        }
    `;

    document.head.appendChild(style);
})();