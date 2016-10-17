/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";

                

                $scope.subscribe = function (author) {
                    $scope.data.subscribedAuthors.push(author);
                    $scope.saveSubscriptions();
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