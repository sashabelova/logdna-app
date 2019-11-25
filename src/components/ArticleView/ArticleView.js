import React, { Component } from 'react';

class ArticleView extends Component {
  render() {
    const { name, text, date, url } = this.props;
    return (
      <div className="articles-view-item">
        <h4>{name}</h4>
        <span>Published: {date}</span>
        <p>{text}</p>
        {url ? <img alt="article-cover" src={url} /> : ''}
      </div>
    );
  }
}

export default ArticleView;
