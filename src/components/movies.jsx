import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
      movies: getMovies()
  };

handleDelete = (movie) => {
    const movies = this.state.movies.filter(film => film._id !== movie._id);
    console.log(movies);
    this.setState({ movies: movies});
};

  render(){
      const { length: count } = this.state.movies;
      if( count === 0){
          return <p>Det finns inga filmer i databasen...</p>;
          
    } 
    return (
        <React.Fragment>
    <p>Visar { count } filmer från databasen.</p>
    <table className="table">
        <thead>
            <tr>
                <th>Titel</th>
                <th>Genre</th>
                <th>Antal</th>
                <th>Betyg</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            { this.state.movies.map(movie =>(
            <tr key = {movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={ () => {this.handleDelete(movie)} } className="btn btn-danger btn-sm">Ta bort</button></td>
            </tr>
            ))}
            
        </tbody>
    </table>

        </React.Fragment>
    );
  }
}
export default Movies;