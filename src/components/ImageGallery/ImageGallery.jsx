import { Component } from 'react';
import { Loader } from 'rsuite';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from './../Button/Button';
import s from './ImageGallery.module.css';
import { getFotos, getSearchFotos } from 'utils/fotosApi';

class ImageGallery extends Component {
  state = {
    fotos: [],
    total: 0,
    page: 1,
    searchInput: '',
    isLoading: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchInput !== prevState.searchInput) {
      return {
        page: 1,
        searchInput: nextProps.searchInput,
      };
    }
    return null;
  }

  componentDidMount() {
    const { page } = this.state;
    this.setState({ isLoading: true });

    getFotos(page)
      .then(({ hits, total }) => {
        this.setState({ fotos: hits, total });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, searchInput } = this.state;

    if (this.state.page !== prevState.page && searchInput) {
      this.setSearchFotos();
    }

    if (this.state.page !== prevState.page && !searchInput) {
      this.setState({ isLoading: true });

      getFotos(page)
        .then(({ hits }) => this.setState(prev => ({ fotos: [...prev.fotos, ...hits] })))
        .catch(err => console.log(err))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  setSearchFotos = () => {
    const { page, searchInput } = this.state;
    this.setState({ isLoading: true });
    getSearchFotos(page, searchInput)
      .then(({ hits, total }) => {
        this.setState(prev => ({
          fotos: page === 1 ? hits : [...prev.fotos, ...hits],
          total,
        }));
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  updatePage = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    const { fotos, total, isLoading } = this.state;
    const { setModalInfo } = this.props;
    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem fotos={fotos} setModalInfo={setModalInfo} />
        </ul>
        {isLoading && <Loader size="lg" content="loading..." />}
        {fotos.length > 0 && fotos.length < total && <Button cbOnClick={this.updatePage} />}
      </>
    );
  }
}

export default ImageGallery;
