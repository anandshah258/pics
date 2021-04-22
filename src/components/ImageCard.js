import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setspans);
  }

  setspans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    const { urls, alt_description } = this.props.image;
    return (
      <img
        ref={this.imageRef}
        src={urls.regular}
        alt={alt_description}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      />
    );
  }
}

export default ImageCard;