// ==UserScript==
// @name         mycourses-darkmode
// @namespace    Monkey Scripts
// @description  Dark mode comes to MyCourses!
// @author       Ethan Logue
// @version      1.0
// @match        https://mycourses.rit.edu/d2l/*
// @icon         https://mycourses.rit.edu/d2l/lp/web/faviconView?variant=0&version=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // custom css rules
    var style = document.createElement('style');
    style.innerHTML = `
        /* background color of the page */
        .d2l-tiles-container {
            background-color: #121212 !important;
        }

        /* background color of the navigation bar */
        .d2l-navigation-s * {
            background-color: #242424 !important;
            color: #eeeeee !important;
        }

        .d2l-navigation-s img {
            filter: invert(1);
        }

        /* background color of the tiles */
        .d2l-tile {
            background-color: #242424 !important;
        }

        /* text color */
        .d2l-typography {
            color: #eeeeee !important;
        }

        .d2l-tile.d2l-widget-padding-full > .d2l-widget-content * {
            background-color: #242424 !important;
        }
    `;

    document.head.appendChild(style);
})();