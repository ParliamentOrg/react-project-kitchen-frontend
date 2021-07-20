/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import agent from '../../agent';
import { DELETE_COMMENT } from '../../constants/actionTypes';

const DeleteButton = (props) => {
  const dispatch = useDispatch();

  const del = () => {
    const payload = agent.Comments.delete(props.slug, props.commentId);
    dispatch({ type: DELETE_COMMENT, payload, commentId: props.commentId });
  };

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del} />
      </span>
    );
  }
  return null;
};

export default DeleteButton;
