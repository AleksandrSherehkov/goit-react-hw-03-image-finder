import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({ input: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    this.props.updateSearchInput(input);
  };

  render() {
    const { input } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
