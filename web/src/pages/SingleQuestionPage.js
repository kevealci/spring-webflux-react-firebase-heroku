import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuestion } from '../actions/questionActions';

import { Question } from '../components/Question';
import { Answer } from '../components/Answer';
import { Link } from 'react-router-dom';

const SingleQuestionPage = ({ match }) => {
  const { uid: userId } = useSelector((state) => state.auth);
  const { hasErrors, loading, question } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(fetchQuestion(id));
  }, [dispatch, id]);

  const renderQuestion = () => {
    if (loading.question) return <p>Loading question...</p>;
    if (hasErrors.question) return <p>Unable to display question.</p>;

    return <Question key={question.id} question={question} />;
  };

  const renderAnswers = () => {
    return question.answers && question.answers.length ? (
      question.answers.map((answer) => <Answer key={answer.answerId} answer={answer} />)
    ) : (
      <p>Empty answers!</p>
    );
  };

  return (
    <section className="mt-3">
      {renderQuestion()}
      {userId && (
        <Link to={'/answer/' + id} className="button right">
          Reply
        </Link>
      )}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  );
};

export default SingleQuestionPage;
