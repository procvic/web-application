describe('Unit: authenticationService', function() {
    beforeEach(module('app'));

    var authenticationService;

    beforeEach(inject(function($injector) {
        authenticationService = $injector.get('authenticationService');
    }));

    it('should throw error due to missing credentials', function() {
        expect(authenticationService.authenticate()).toBe(false);
    });
});
