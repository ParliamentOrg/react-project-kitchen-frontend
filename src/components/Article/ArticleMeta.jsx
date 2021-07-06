import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ArticleActions from './ArticleActions';

const ArticleMeta = (props) => {
  const { article } = props;
  return (
    <div className="article-meta">
      <Link to={`/@${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} />
      </Link>

      <div className="info">
        <Link to={`/@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {format(new Date(article.createdAt), 'dd.MMM.yyyy HH:mm')}
        </span>
      </div>

      <ArticleActions canModify={props.canModify} article={article} />
    </div>
  );
};

export default ArticleMeta;
