import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { postQuestion } from '../actions/questionActions';
import { useSelector, useDispatch } from 'react-redux';

const FormPage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const { uid: userId, photoURL, name } = useSelector((state) => state.auth);
  const { loading, redirect } = useSelector((state) => state.question);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.userId = userId;
    data.photoURL = photoURL;
    data.userName = name;
    dispatch(postQuestion(data));
  };

  useEffect(() => {
    if (redirect) {
      history.push(redirect);
    }
  }, [redirect, history]);

  return (
    <section>
      <h1>New Question</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="type">Type</label>
          <select {...register('type')} id="">
            <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
            <option value="OPINION (SHORT OPEN BOX)">OPINION (SHORT OPEN BOX)</option>
            <option value="WITH RESULT (OPEN BOX WITH LINK)">
              WITH RESULT (OPEN BOX WITH LINK)
            </option>
            <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">
              WITH EVIDENCE (OPEN BOX WITH VIDEO)
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select {...register('category')} id="category">
            <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
            <option value="SCIENCES">SCIENCES</option>
            <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
            <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
            <option value="LANGUAGE">LANGUAGE</option>
          </select>
        </div>

        <div>
          <label htmlFor="question">Question</label>
          <textarea id="question" {...register('question', { required: true, maxLength: 300 })} />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Saving ....' : 'Save'}
        </button>
      </form>
    </section>
  );
};

export default FormPage;
