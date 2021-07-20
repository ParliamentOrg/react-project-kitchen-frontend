import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const ArticlePreview = ({ article }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

  const handleClick = (ev) => {
    ev.preventDefault();

    if (article.favorited) {
      dispatch({
        type: ARTICLE_UNFAVORITED,
        payload: agent.Articles.unfavorite(article.slug),
      });
    } else {
      dispatch({
        type: ARTICLE_FAVORITED,
        payload: agent.Articles.favorite(article.slug),
      });
    }
  };

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button type="button" className={favoriteButtonClass} onClick={handleClick}>
            <i className="ion-heart" />
            {' '}
            {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>{t('Читать далее...')}</span>
        <ul className="tag-list">
          {
            article.tagList.map((tag) => (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            ))
          }
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
