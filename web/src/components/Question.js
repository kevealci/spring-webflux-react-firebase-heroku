import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Question = ({ question, excerpt, onDelete }) => {
  const history = useHistory();

  const handleUpdate = () => {
    if (question?.answers?.length) {
      Swal.fire(
        'Atento',
        'La pregunta contiene respuestas por lo que se creara una nueva pregunta',
        'info'
      );
      history.push('/new');
    }

    //console.log(pregunta?.answers);
    //pregunta?answers?.lenght > 0 ? console.log('hola') : console.log('f')
    //history.push(`/update-question/${question.id}`);
  };

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

      <div className="d-flex">
        {excerpt && (
          <Link to={`/question/${question.id}`} className="button">
            View Question
          </Link>
        )}
        {onDelete && (
          <div className="ms-3">
            <button className="btn btn-primary me-2" onClick={handleUpdate}>
              Update
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(question.id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
