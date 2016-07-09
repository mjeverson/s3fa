var s3fa = angular.module('s3fa', [
    'ngRoute'
]);

s3fa.
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '/components/home/home_template.html',
                    controller: 'HomeController'
                }).
                when('/phones', {
                    templateUrl: '/components/phone/phone_template.html',
                    controller: 'PhoneController'
                }).
                when('/phones/:phoneId', {
                    template: '<phone-detail></phone-detail>'
                }).
                otherwise('/');
        }
    ]);