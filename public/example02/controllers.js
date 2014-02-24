var aMailServices = angular.module('AMail', ['ngRoute'],
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller : ListController,
                templateUrl: 'list.html',
            })
            .when('/view/:id', {
                controller : DetailController,
                templateUrl: 'detail.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);

/*
aMailServices.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.default.headers.common['X-Requested-With'];
    }
]);
*/

var messages = [
    {
        id: 0,
        sender: 'jean@company.com',
        subject: 'Hi there, old friend',
        date: 'Dec 7',
        recipients: ['greg@somecompany.com'],
        message: 'Hey everybody men!'
    },
    {
        id: 1,
        sender: 'leo@comercius.com',
        subject: 'We are the best',
        date: 'Dec 10',
        recipients: ['fede@comercius.com'],
        message: 'Yeah!'
    },
];

function ListController($scope) {
    $scope.messages = messages;
}

function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}
