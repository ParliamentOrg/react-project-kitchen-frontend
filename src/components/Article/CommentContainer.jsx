import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const CommentContainer = (props) => {
  const { t } = useTranslation();

  if (props.currentUser) {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div>
          <list-errors errors={props.errors} />
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
        />
      </div>
    );
  }
  return (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <p>
        <Link to="/login">{t('Войти')}</Link>
        &nbsp;
        {t('или')}
        &nbsp;
        <Link to="/register">{t('Зарегистрироваться')}</Link>
        &nbsp;
        {t('чтобы добавить комментарии к этой статье.')}
      </p>

      <CommentList
        comments={props.comments}
        slug={props.slug}
        currentUser={props.currentUser}
      />
    </div>
  );
};

export default CommentContainer;
