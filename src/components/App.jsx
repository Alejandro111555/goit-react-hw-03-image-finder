import React from "react";
import axios from "axios";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {
  state = {
    movies: [],
    currentImg: null,
    isShown: false,
    page: 1,
    isLoading: false,
    error: null,
  };

  deleteMovies = id => {
    this.setState(prevState => {
      return { movies: prevState.movies.filter(movie => movie.id !== id) };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { isShown, page } = this.state;
    if ((isShown && prevState.isShown !== isShown) || prevState.page !== page) {
      this.getMovies();
    }
  }

  openModal = data => {
    this.setState({
      currentImg: data,
    });
  };

  closeModal = () => {
    this.setState({
      currentImg: null,
    });
  };

  showFilms = () => {
    this.setState(prevState => {
      return { isShown: !prevState.isShown };
    });
  };

  getMovies = () => {
    this.setState({ isLoading: true });
    fetchMovies(this.state.page)
      .then(({ data: { results } }) => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...results],
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => {
        this.setState({ isLoading: true });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
   

    return (
      <>
    
      </>
    );
  }
}
