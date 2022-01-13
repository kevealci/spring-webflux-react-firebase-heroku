import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { fetchQuestion, postAnswer } from '../actions/questionActions';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from '../components/Question';

const FormPage = ({ match }) => {
  const { register, handleSubmit } = useForm();
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();

  const { uid: userId, photoURL, name } = useSelector((state) => state.auth);
  const { loading, redirect, hasErrors, question } = useSelector((state) => state.question);

  const onSubmit = (data) => {
    data.userId = userId;
    data.questionId = id;
    data.answerId = Date.now();
    data.photoURL = photoURL;
    data.userName = name;

    dispatch(postAnswer(data));
  };

  useEffect(() => {
    dispatch(fetchQuestion(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (redirect) {
      history.push(redirect);
    }
  }, [redirect, history]);

  const renderQuestion = () => {
    if (loading.question) return <p>Loading question...</p>;
    if (hasErrors.question) return <p>Unable to display question.</p>;

    return <Question question={question} />;
  };

  return (
    <section>
      {renderQuestion()}
      <h1>New Answer</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="answer">Answer</label>
          <textarea id="answer" {...register('answer', { required: true, maxLength: 300 })} />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Saving ....' : 'Save'}
        </button>
      </form>
    </section>
  );
};

export default FormPage;
