
var movies = [

    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodziejach',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3xCYs6Tbn-aDz1k_8obBFh9c6cZXQLqmtHhSF10AJcIqW3f2kQ'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Film o lwach',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg'
    },
    {
        id: 3,
        title: 'Ace Ventura',
        desc: 'Film o Jimie Carrey',
        imageSrc: 'http://images.genius.com/436b2e5013668782fbbed1c8bb5f084a.591x591x1.jpg'
    },
    {
        id: 4,
        title: 'Wojna Światow',
        desc: 'Film o inwazji obcych',
        imageSrc: 'https://lh6.ggpht.com/fOpyTFEutU6BfwiG0kzevES2pr1wLt42yIM4tSbQHtJZG4SyOOziNDvLhwm_c-53iD-MJw'
    }
];



var Movie = React.createClass({

    propTypes: {

        movieObject: React.PropTypes.object.isRequired,
    },

    render: function () {
        //this = self; 
        return (
            React.createElement('div', {},
                React.createElement(MovieTitle, {title: this.props.movieObject.title}),
                React.createElement(MovieDescription, {desc: this.props.movieObject.desc}),
                React.createElement(MovieImage, {imageSrc: this.props.movieObject.imageSrc})
            )
        );
    },

});


var MovieTitle = React.createClass({

    propTypes: {

        title: React.PropTypes.string.isRequired,
    },

    render: function() {

        return (
            React.createElement('h2', {}, this.props.title)
        );
    },
});


var MovieDescription = React.createClass({

    propTypes: {

        desc: React.PropTypes.string.isRequired,    
    },

    render: function() {

        return (
            React.createElement('p', {}, this.props.desc)
        );
    },
});


var MovieImage = React.createClass({

    propTypes: {

        imageSrc: React.PropTypes.string.isRequired, 
    },

    render: function() {

        return (
            React.createElement('img', {src: this.props.imageSrc})
        );
    },
});




var MoviesList = React.createClass({

    propTypes: {

        moviesArray: React.PropTypes.array.isRequired,
    },

    render: function () {

        return (
            
            React.createElement('ul', {}, // w render zawsze musimy zwracac tylko jeden element, dlatego tutaj 
                                                                // na gorze dajemy 'ul' ktore jednoczesnie bedzie wrapperem dla mapowanych elementow
                                                                // (ten "tylko jeden element" moze zawierac wiele innych w sobie)
                movies.map(function(movie){

                    return(
                        React.createElement('li', {key: movie.id},
                            React.createElement(Movie, {movieObject: movie})
                        )

                    );
                })
            )
        );

    },

}); 


var moviesElements = movies.map(function (movie) {

    return React.createElement('li', {key: movie.id},
        React.createElement(Movie, {movieObject: movie})
    );
});

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmow'),
        React.createElement(MoviesList, {moviesArray: movies})
);

ReactDOM.render(element, document.getElementById('app'));