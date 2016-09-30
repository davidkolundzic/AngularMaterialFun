(function () {
    'use strict';

    angular
        .module('contactManagerApp')
        .constant('settings',{
            'tabindex':1
        })
        .controller('mainController', mainController);

    mainController.$inject = ['userService','$mdSidenav','$mdToast','settings'];

    function mainController(userService, $mdSidenav,$mdToast,settings) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainController';
        vm.uers = [];
        vm.selected = null;
        vm.toggleSideNav = toggleSideNav; 
        vm.selectUser = selectUser;
        vm.searchText = '';
        vm.tabIndex = settings.tabindex;
        vm.removeNote=removeNote;
        vm.openToast=openToast;
        vm.showCustomToast=showCustomToast;


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
            vm.tabindex = settings.tabindex;
        }
        function removeNote(note) {
            var index=vm.selected.notes.indexOf(note);
            vm.selected.notes.splice(index,1);  
            //vm.openToast("Note was removed");
            vm.showCustomToast(); 
        }
        function showCustomToast(){
            $mdToast.show({
                hideDelay:5000,
                position:'topright',
                templateUrl:'/app/view/custom-toast.html'
            });
        }
        function openToast(message) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        }
        activate();
        function activate() { }
    }
})();
