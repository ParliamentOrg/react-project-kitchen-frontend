import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import agent from '../../agent';
import { ADD_COMMENT } from '../../constants/actionTypes';

const CommentInput = (props) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const { t } = useTranslation();

  const onChange = (ev) => {
    setBody(ev.target.value);
  };

  const createComment = (ev) => {
    ev.preventDefault();
    const payload = agent.Comments.create(props.slug,
      { body });
    setBody('');
    dispatch({ type: ADD_COMMENT, payload });
  };

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder={t('Написать комментарий...')}
          value={body}
          onChange={onChange}
          rows="3"
        />
      </div>
      <div className="card-footer">
        <img
          src={props.currentUser.image}
          className="comment-author-img"
          alt={props.currentUser.username}
        />
        <button
          className="btn btn-sm btn-primary"
          type="submit"
        >
          {t('Оставить комментарий')}
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
