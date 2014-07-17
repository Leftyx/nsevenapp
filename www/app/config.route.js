(function () {

    'use strict';

    var app = angular.module(_APP_);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'home as vm'
            })

            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                controller: 'contacts as vm'
            });

        $urlRouterProvider.otherwise('/');

    }]);

    app.run(['$rootScope', '$state', '$log', '$ionicPlatform', function ($rootScope, $state, $log, $ionicPlatform) {

        'use strict';

        $log.debug("APPLICATION => RUN");

        $ionicPlatform.ready(function () {

            $log.info("Ionic is ready!");

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            $log.info('PLATFORM: ' + ionic.Platform.platform());
            $log.info('DEVICE:');
            $log.info(ionic.Platform.device());

        });

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            $log.info("$rootScope => $stateChangeStart => " + toState.name || '');

        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.error("$rootScope => $stateChangeError");
            $log.error(toState);
            $log.error(fromState);
            $log.error(error);
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $log.debug('$stateChangeSuccess to [' + toState.name + '] => fired once the state transition is complete.');
        });

    }]);

}());