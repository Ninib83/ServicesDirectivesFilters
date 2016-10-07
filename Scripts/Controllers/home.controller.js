/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";
            $scope.newPost = {};

                console.log($scope.subscribedAuthors);

                $scope.subscribe = function (author) {
                    $scope.subscribedAuthors.push(author);
                };

                $scope.upVote = function (post) {
                    post.upvotes++;
                    postsApi.updateUpvote(post);

                };

                $scope.downVote = function (post) {
                    post.downvotes++;
                    postsApi.updateDownvote(post);
                };
        }
    ]);