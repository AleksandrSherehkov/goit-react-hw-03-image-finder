import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    searchInput: '',
    modalInfo: null,
  };
  updateSearchInput = searchInput => {
    this.setState({ searchInput: searchInput });
  };

  setModalInfo = (modalInfo = null) => {
    this.setState({ modalInfo });
  };

  render() {
    const { searchInput, modalInfo } = this.state;
    return (
      <div className={s.App}>
        <Searchbar updateSearchInput={this.updateSearchInput} />
        <ImageGallery searchInput={searchInput} setModalInfo={this.setModalInfo} />
        {modalInfo && <Modal modalInfo={modalInfo} setModalInfo={this.setModalInfo} />}
      </div>
    );
  }
}

export default App;
