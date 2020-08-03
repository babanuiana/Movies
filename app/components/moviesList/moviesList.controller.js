(function() {
    function ListController(MovieService) {
        const ctrl = this;
        ctrl.movieService = MovieService;
        const qs = $location.search();
        console.log(qs);
        ctrl.$onInit = function() {
            ctrl.movieService.getMovies(this.type)
                .then((response) => {
                    this.moviesPath = response;
                })
        }
    }
    angular
        .module('list', [])
        .component('list', {
            templateUrl: 'components/moviesList/moviesList.view.html',
            bindings: { type: '@', title: '@' },
            controller: ListController,
        })
})()