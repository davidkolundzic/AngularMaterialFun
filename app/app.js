﻿(function () {
    'use strict';

    angular
        .module('contactManagerApp', [
        // Angular modules
        //'ngRoute'

        // Custom modules

        // 3rd Party Modules
        'ngMaterial',

        ])
        .config(($mdIconProvider,$mdThemingProvider) => {
            $mdIconProvider
                .defaultIconSet('/Images/avatars.svg',128)
                .iconSet("action", "/Content/angular-material-icons/action.svg")
                .iconSet("alert", "/Content/angular-material-icons/alert.svg")
                .iconSet("av", "/Content/angular-material-icons/av.svg")
                .iconSet("communication", "/Content/angular-material-icons/communication.svg")
                .iconSet("content", "/Content/angular-material-icons/content.svg")
                .iconSet("device", "/Content/angular-material-icons/device.svg")
                .iconSet("editor", "/Content/angular-material-icons/editor.svg")
                .iconSet("file", "/Content/angular-material-icons/file.svg")
                .iconSet("hardware", "/Content/angular-material-icons/hardware.svg")
                .iconSet("image", "/Content/angular-material-icons/image.svg")
                .iconSet("maps", "/Content/angular-material-icons/maps.svg")
                .iconSet("navigation", "/Content/angular-material-icons/navigation.svg")
                .iconSet("notification", "/Content/angular-material-icons/notification.svg")
                .iconSet("soclal", "/Content/angular-material-icons/soclal.svg")
                .iconSet("toggle", "/Content/angular-material-icons/toggle.svg");
            $mdThemingProvider.theme('default')
                //.dark();
                .primaryPalette('indigo')
                .accentPalette('red');
        });
})();