import React, { Component } from 'react';

class ArticlePreview extends Component {
  render() {
    const { name, text, id } = this.props;
    return (
      <div className="articles-preview-item" onClick={() => this.props.click(id)}>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    );
  }
}

export default ArticlePreview;
