import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteAnswer, fetchQuestion } from '../actions/questionActions';

export const Answer = ({ answer, match }) => {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleClick = () => {
    Swal.fire({
      title: 'Do you want to delete the answer?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteAnswer(answer.answerId));
        dispatch(fetchQuestion(id));
        Swal.fire('Deleted!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Answer not deleted', '', 'info');
      }
    });
  };

  return (
    <aside className="answer">
      <p>{answer.answer}</p>
      {uid === answer.userId && <button onClick={handleClick}>Eliminar</button>}
    </aside>
  );
};
