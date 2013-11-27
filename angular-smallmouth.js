/*! Angular SmallMouth v0.1.0 - MIT License Copyright Bret Little 2013 */
angular.module('angular-smallmouth', []);

angular.module('angular-smallmouth').factory('AngularSmallMouth', function($timeout) {
	return {
		watchResource: function(reference, scope, attr) {

			var timeout;

			function updateScope(snapshot, options) {
				$timeout(function() {
					scope[attr] = snapshot.val();
				});
			}

			reference.on('value', updateScope);

			scope.$watch(attr, function(newValue, oldValue) {
				if(typeof newValue !== 'undefined' && newValue !== null) {
					if(timeout) $timeout.cancel(timeout);
					timeout = $timeout(function() {
						reference.set(scope[attr]);
					}, 500);
				}
			}, true);

			scope.$on('$destroy', function() {
				reference.off('value', updateScope);
			});

		}
	}
});