(function () {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$q', '$http', '$localStorage', 'usersService'];

    function authenticationService($q, $http, $localStorage, usersService) {
        var currentUser = null;

        var accessToken = {
            set: function (accessToken) {
                $localStorage.accessToken = accessToken;
            },
            get: function () {
                return (!!$localStorage.accessToken ? $localStorage.accessToken : false);
            }
        };

        return {
            authenticate: authenticate,
            isAuthenticated: isAuthenticated,
            getCurrentUser: getCurrentUser,
            requestCurrentUser: requestCurrentUser,
            logout: logout
        };

        /**
         * @param {Object} credentials
         * @returns {Object}
         */
        function authenticate(credentials) {
            return requestAccessToken(credentials.username, credentials.password).then(function (response) {
                accessToken.set(response.data.access_token);
                return requestCurrentUser();
            });
        }

        /**
         *
         * @returns {Boolean}
         */
        function isAuthenticated() {
            return !!currentUser;
        }


        /**
         *
         * @returns {Object}
         */
        function getCurrentUser() {
            return currentUser;
        }


        /**
         *
         * @returns {Object|Boolean}
         */
        function requestCurrentUser() {
            var deferred = $q.defer();

            console.log(accessToken.get());
            if (accessToken.get() !== false) {
                // @todo Check whether this part of code is needed
                currentUser = {
                    username: null
                };

                usersService.me().then(function (response) {
                    if (response.data.error) {
                        deferred.reject();
                    }

                    currentUser = {
                        username: response.data.surname + ' ' + response.data.lastname
                    };

                    deferred.resolve();
                });
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }

        /**
         * @param {String} username
         * @param {String} password
         * @returns {Object}
         */
        function requestAccessToken(username, password) {
            return $http.post('http://gateway.procvic.cz/auth/authenticate', {
                grant_type: 'password',
                client_id: 'demoapp',
                client_secret: 'demopass',
                username: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        }

        /**
         * Remove access token and current user
         * @returns {Object}
         */
        function logout() {
            var deferred = $q.defer();

            accessToken.set(null);
            currentUser = null;

            deferred.resolve();

            return deferred.promise;
        }
    }
})
();
