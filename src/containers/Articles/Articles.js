import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview';
import ArticleView from '../../components/ArticleView/ArticleView';
import SendMessage from '../SendMessage/SendMessage';
import * as actions from '../../store/actions/index';

class Articles extends Component {
  state = {
    selectedId: ''
  };

  componentDidMount() {
    this.props.onGetArticles();
  }

  onArticleClick = id => {
    this.setState({ selectedId: id });
  };

  render() {
    const articles = this.props.articles;
    const selectedId = this.state.selectedId;
    return (
      <>
        {articles.length > 0 ? (
          <section className="articles">
            <div className="articles-preview">
              {articles.map(article => (
                <ArticlePreview
                  key={article.id}
                  name={article.name}
                  text={article.text}
                  click={() => this.onArticleClick(article.id)}
                />
              ))}{' '}
            </div>
            <div className="articles-view">
              {selectedId.length > 0 ? (
                articles
                  .filter(article => article.id === selectedId)
                  .map(article => (
                    <ArticleView
                      key={article.id}
                      name={article.name}
                      text={article.text}
                      date={article.date}
                      url={article.cover_url}
                    />
                  ))
              ) : (
                <div className="articles-view-item">No article selected</div>
              )}
              <SendMessage />
            </div>
          </section>
        ) : (
          <div className="articles-no-preview">
            No articles fetched. Please make sure the server is running.
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articlesReducer.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetArticles: url => dispatch(actions.getArticles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
