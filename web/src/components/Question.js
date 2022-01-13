import React from 'react';
import { Link } from 'react-router-dom';

export const Question = ({ question, excerpt, onDelete }) => {
  return (
    <article className={excerpt ? 'question-excerpt' : 'question'}>
      <div className="d-flex">
        <div className="me-4">
          {question.photoURL ? (
            <img src={`${question.photoURL}`} />
          ) : (
            <img style={{ width: '100px' }} src="/avatar.jpg" />
          )}

          <p> {question.userName} </p>
        </div>

        <div>
          <h2>{question.question}</h2>
          <p>
            {question.category} - <small>{question.type}</small>
          </p>
        </div>
      </div>

      {onDelete && (
        <button className="button right" onClick={() => onDelete(question.id)}>
          DELETE
        </button>
      )}
      {excerpt && (
        <Link to={`/question/${question.id}`} className="button">
          View Question
        </Link>
      )}
    </article>
  );
};
