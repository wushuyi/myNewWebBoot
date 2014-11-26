//define(
//    [
//        'modernizr'
//        //, 'jquery'
//        , 'domReady'
//        , 'apps/mybook'
//        , 'apps/book'
//        , 'apps/testAjax'
//    ],
//    function (
//        modernizer
//        //, $
//        , domReady
//        , mybook
//        , book
//        , ajax
//    ) {
//        mybook.addToCart();
//        domReady(function () {
//            console.log(arguments);
//        });
//        domReady(function () {
//            console.log(book);
//            ajax.getData({
//                apiURL: 'http://localhost/myNewWebBoot/',
//                successCallback: function (data) {
//                    console.log('ajaxTest ok!');
//                }
//            });
//        });
//    }
//);

define(function (require) {
    var modernizr = require('modernizr'),
        jquery = require('jquery'),
        domReady = require('domReady'),
        mybook = require('apps/mybook'),
        book = require('apps/book'),
        ajax = require('apps/testAjax');

    mybook.addToCart();
    domReady(function () {
        console.log(arguments);
    });
    domReady(function () {
        console.log(book);
        ajax.getData({
            apiURL: 'http://localhost/myNewWebBoot/',
            successCallback: function (data) {
                console.log('ajaxTest ok!');
            }
        });
    });
});