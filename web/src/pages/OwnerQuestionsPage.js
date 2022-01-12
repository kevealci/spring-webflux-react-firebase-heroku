import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import { fetchOwnerQuestions, deleteQuestion } from '../actions/questionActions';
import { Question } from '../components/Question';

const OwnerQuestionsPage = ({ dispatch, loading, questions, hasErrors, redirect, userId }) => {
  useEffect(() => {
    dispatch(fetchOwnerQuestions(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (redirect) {
      dispatch(fetchOwnerQuestions(userId));
    }
  }, [redirect, dispatch, userId]);

  const onDelete = (id) => {
    Swal.fire({
      title: 'Do you want to delete the question?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteQuestion(id));
        Swal.fire('Deleted!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Question not deleted', '', 'info');
      }
    });
  };

  const renderQuestions = () => {
    if (loading) return <p>Loading questions...</p>;
    if (hasErrors) return <p>Unable to display questions.</p>;

    return questions.map((question) => (
      <Question key={question.id} question={question} excerpt onDelete={onDelete} />
    ));
  };

  return (
    <section>
      <h1>Questions</h1>
      {renderQuestions()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.question.loading,
  questions: state.question.questions,
  hasErrors: state.question.hasErrors,
  redirect: state.question.redirect,
  userId: state.auth.uid
});

export default connect(mapStateToProps)(OwnerQuestionsPage);
