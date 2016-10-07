angular.module("mainModule")
    .service("postsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var posts = api + "/posts";
            var upvotes = posts + "/upvote";
            var Downvotes = posts + "/Downvote";

            this.getPosts = function () {
                var deferred = $q.defer();

                $http.get(posts)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addPost = function (newPost) {
                var deferred = $q.defer();

                $http.post(posts, newPost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updatePost = function (updatedPost) {
                var deferred = $q.defer();

                $http.put(posts + "/" + updatedPost.id, updatedPost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateUpvote = function (updatedUpvote) {
                var deferred = $q.defer();

                $http.put(upvotes + "/" + updatedUpvote.id, updatedUpvote)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateDownvote = function (updateDownvote) {
                var deferred = $q.defer();

                $http.put(Downvotes + "/" + updateDownvote.id, updateDownvote)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deletePost = function (id) {
                var deferred = $q.defer();

                $http.delete(posts + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };
        }
    ]);