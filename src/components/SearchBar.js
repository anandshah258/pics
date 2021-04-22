import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'cars' };

  componentDidMount() {
    this.props.onSubmit(this.state.term);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="text">Image Search</label>
            <input
              type="text"
              id="text"
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;