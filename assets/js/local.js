/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ( ) {
    if ($('#site').length > 0) {
        var PageHeight = $(window).height();
        var HeaderHeight = $('#header').height();
        var FooterHeight = $('#footer').height();
        var SiteHeight = PageHeight - HeaderHeight - FooterHeight + 40;
        $('#site').css('min-height', SiteHeight);
    }

   



});


