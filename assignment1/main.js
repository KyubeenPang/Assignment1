
// This will get called AFTER the HTML document has been completed loaded and parsed 
// See: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event 
document.addEventListener('DOMContentLoaded', function() {
   // You can write your JavaScript code here that is dependent on the page being loaded
   console.log("This will appear in the developer console in Chrome AFTER the page is loaded")
}, false);

// You can have code anywhere in this file, but if you try to modify HTML elements
// before the page is loaded, it may not work as expected (typically it will just not work).
console.log("This gets run immediately upon the JavaScript file being loaded");