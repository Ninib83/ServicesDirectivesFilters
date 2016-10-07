angular.module("mainModule")
    .controller("CMSController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "CMS";

            $scope.deletePost = function (post) {
                postsApi.deletePost(post.id)
                    .then(function () {
                        var index = $scope.posts.map(function (post) {
                            return post.id;
                        }).indexOf(post.id);

                        $scope.posts.splice(index, 1);
                    });
            };

        }
    ]);