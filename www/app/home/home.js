(function () {

    'use strict';

    var homeController = function ($scope, $state, $log, $cordovaCamera) {

        var vm = this;

        $log.debug("CONTROLLER: homeController");

        vm.takePicture = function () {

            $log.debug("CONTROLLER: homeController => taking picture");

            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options)
                .then(function (imageData) {
                    // Success! Image data is here
                    $log.debug(imageData);
                })
                .catch(function (e) {
                    $log.error(e);
                });
        }

    };

    var controllerId = 'home';

    angular.module(_APP_).controller(controllerId, ['$scope', '$state', '$log', '$cordovaCamera', homeController]);


})();