angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://172.16.6.52:5000/sessions/:sessionId');
});
