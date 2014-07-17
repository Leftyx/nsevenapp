(function () {

    'use strict';

    var app = angular.module(_APP_);

    app.config(function ($compileProvider) {
        // Needed for routing to work
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })

    .config(['$httpProvider', function ($httpProvider) {
           //Enable cross domain calls
           $httpProvider.defaults.useXDomain = true;
           //Remove the header containing XMLHttpRequest used to identify ajax call that would prevent CORS from working
           delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

}());