
'use strict';

console.log('jquery版本' + $.fn.jquery);

window.onload = function () {
    alert("Welcome window.onload")
}

$(document).ready(function () {
   $('a').click(function (event) {
       //alert('thanks for visiting');
       alert( "As you can see, the link no longer took you to jquery.com" );
       event.preventDefault();
   });
});