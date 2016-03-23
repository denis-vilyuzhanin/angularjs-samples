var phonecatApp = angular.module('phonecatApp', []);

var SEQUENCE = 0;

phonecatApp.controller('PhoneListCtrl', function($scope) {
    console.log($scope.controllerId);
    $scope.controllerId = SEQUENCE++;
    $scope.phones = [{
        'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S.',
        'age' : "a",
        'details':[
            {
                "title": 'OS',
                'value': 'Android'
            },
            {
                "title": 'Netwokr',
                'value': 'WI-FI, Bluetooth'
            }
        ]
    }, {
        'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.',
        'age' : "b",
        'details':[
            {
                "title": 'OS',
                'value': 'Windows 8.1'
            },
            {
                "title": 'Netwokr',
                'value': 'WI-FI, Bluetooth'
            },
            {
                'title': 'HDD',
                'value': 'SSD'
            }
        ]
    }, {
        'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.',
        'age' : "c"
    }];
    
    $scope.orderProp = 'age';
});