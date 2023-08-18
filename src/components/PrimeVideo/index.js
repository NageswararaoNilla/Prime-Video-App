import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  //   state = {activeId: ''}

  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    // console.log(actionMoviesList)
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <div className="movies-list-container">
          <div>
            <h1 className="heading">Action Movies</h1>
            <div className="slider-container">
              <MoviesSlider moviesList={actionMoviesList} />
            </div>
          </div>
          <div>
            <h1 className="heading">Comedy Movies</h1>
            <div className="slider-container">
              <MoviesSlider moviesList={comedyMoviesList} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
