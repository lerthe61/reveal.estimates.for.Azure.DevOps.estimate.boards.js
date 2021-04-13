// ==UserScript==
// @name         reveal.estimates.for.Azure.DevOps.estimate.boards.js
// @namespace    https://github.com/lerthe61/reveal.estimates.for.Azure.DevOps.estimate.boards.js
// @version      0.1
// @description  Revealing other votes on Estimate Board in Azure DevOps
// @author       lerthe61
// @match        https://ms-devlabs.gallerycdn.vsassets.io/extensions/ms-devlabs/estimate/*/build/index.html
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// @updateURL    https://github.com/lerthe61/reveal.estimates.for.Azure.DevOps.estimate.boards.js/raw/main/reveal.estimates.for.Azure.DevOps.estimate.boards.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     /* globals jQuery */
    var $_new = jQuery.noConflict(true);

    function flipOne(node) {
        if (!node.classList.contains('vote-container')) { return; }

        var backValue = node.querySelector('.card--back').innerText;
        var frontNode = node.querySelector('.card--front');
        // Put 'hidden' score in parentheses
        frontNode.innerText = '(' + backValue +')';
    };

    function flipAll() {
        let list = window.document.querySelectorAll("div.vote-container");
        list.forEach(flipOne);
     };

    function watcher(){
        let list = window.document.querySelectorAll("div.vote-container");
        if (!NodeList.prototype.isPrototypeOf(list)) {
            window.setTimeout(watcher, 500);
        } else {
            flipAll();
            window.setTimeout(watcher, 500);
        }
    };
    watcher();
})();