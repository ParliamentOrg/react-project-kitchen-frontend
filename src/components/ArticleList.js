import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';

const ArticleList = props => {
  const { t } = useTranslation()

  if (!props.articles) {
    return (
      <div className="article-preview">{t('Загрузка...')}</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        {t('Здесь нет статей ... пока.')}
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default ArticleList;
