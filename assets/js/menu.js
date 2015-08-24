/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $('#menu-top li').hover(function () {
        clearTimeout($.data(this, 'timer'));
        $(this).children('ul').slideDown(200);
    }, function () {
        $.data(this, 'timer', setTimeout($.proxy(function () {
            $(this).children('ul').slideUp(200);
        }, this), 100));
    });

    $('#menu-left li').hover(function () {
        clearTimeout($.data(this, 'timer'));
        $(this).children('ul').slideDown(200);
    }, function () {
        $.data(this, 'timer', setTimeout($.proxy(function () {
            $(this).children('ul').slideUp(200);
        }, this), 100));
    });

});


