
var movies = [

    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodziejach',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3xCYs6Tbn-aDz1k_8obBFh9c6cZXQLqmtHhSF10AJcIqW3f2kQ'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Film o lwach',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg'
    },
    {
        id: 3,
        title: 'Ace Ventura',
        desc: 'Film o Jimie Carrey',
        image: 'http://images.genius.com/436b2e5013668782fbbed1c8bb5f084a.591x591x1.jpg'
    },
    {
        id: 4,
        title: 'Wojna Światow',
        desc: 'Film o inwazji obcych',
        image: 'https://lh6.ggpht.com/fOpyTFEutU6BfwiG0kzevES2pr1wLt42yIM4tSbQHtJZG4SyOOziNDvLhwm_c-53iD-MJw'
    }
];



var Movie = React.createClass({

    propTypes: {

        movieObject: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.movieObject.title),
                React.createElement('p', {}, this.props.movieObject.desc),
                React.createElement('img', { src: this.props.movieObject.image })
            )
        );
    },

});


var moviesElements = movies.map(function (movie) {
    
        return (
            React.createElement('li', {key: movie.id}),
            React.createElement(Movie, {key: movie.id, movieObject: movie})
        );
    
    });

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmow'),
        React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));