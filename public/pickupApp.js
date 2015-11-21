angular.module('pickUp', ['ui.router', 'ui.bootstrap', 'ngDialog'])

.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider.state('/', {
			url: '/',
			templateUrl: 'views/list.html',
			controller: 'AppCtrl',
			resolve: {
				itemPromise: ['list', function (list){
					return list.getAll();
				}]
			}
		});

		$urlRouterProvider.otherwise('/');

}]);