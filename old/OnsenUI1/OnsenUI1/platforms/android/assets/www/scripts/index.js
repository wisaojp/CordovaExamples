// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        /*navigator.globalization.getPreferredLanguage(
            function (language) { console.log('language: ' + language.value + '\n'); },
            function () { console.log('Error getting language\n'); }
        );*/
        angular.bootstrap(document, ['myApp']);

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

/*document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});*/


var myApp = angular.module('myApp', ['pascalprecht.translate']);
myApp.config(['$translateProvider', function ($translateProvider) {
    console.log(findLanguage());
    $translateProvider.useStaticFilesLoader({
        prefix: 'scripts/translate/lang_',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage(findLanguage());
    $translateProvider.fallbackLanguage("en");
    /*$translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useSanitizeValueStrategy('escaped');*/
    console.log("preferredLanguage was set");
}]);

myApp.controller('Ctrl', ['$scope', function ($scope) {
    console.log("Ctrl called");
}]);

function findLanguage() {
    try {
        return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2)
    } catch (e) {
        return "en";
    }
}
