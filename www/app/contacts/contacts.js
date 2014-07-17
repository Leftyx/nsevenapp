(function () {

    'use strict';

    var contactsController = function ($scope, $state, $log) {

        var vm = this;

        $log.debug("CONTROLLER: contactsController");


    };

    var controllerId = 'contacts';

    angular.module(_APP_).controller(controllerId, ['$scope', '$state', '$log', contactsController]);


})();