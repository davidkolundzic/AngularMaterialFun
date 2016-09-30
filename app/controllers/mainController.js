(function () {
    'use strict';

    angular
        .module('contactManagerApp')
        .controller('mainController', mainController);

    mainController.$inject = ['userService','$mdSidenav'];

    function mainController(userService, $mdSidenav) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainController';
        vm.uers = [];
        vm.selected = null;
        vm.toggleSideNav = toggleSideNav;
        vm.selectUser = selectUser;
        vm.searchText = '';
        vm.tabIndex = 0;


        userService.loadAllUsers().then(
            function (data) {
                vm.users = data;
                vm.selected = vm.users[0];
            },
            function myfunction() {

            })

        function toggleSideNav() {
            $mdSidenav('left').toggle();
            //$mdSidenav('left').toggle();
        }
        function selectUser(user) {
            vm.selected = user;
            var sidenav = $mdSidenav('left');
            if (sidenav.isOpen) {
                sidenav.close();

            }
            vm.tabIndex = 0;
        }

        activate();
        function activate() { }
    }
})();
