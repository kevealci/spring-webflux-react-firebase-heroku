import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { firebase } from './firebase/firebaseConfig';
import { login } from './actions/authActions';

import { PublicNavbar, PrivateNavbar } from './components/Navbar';
import HomePage from './pages/HomePage';
import SingleQuestionPage from './pages/SingleQuestionPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionFormPage from './pages/QuestionFormPage';
import AnswerFormPage from './pages/AnswerFormPage';
import OwnerQuestionsPage from './pages/OwnerQuestionsPage';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import Perfil from './pages/Perfil';

const App = () => {
  const dispatch = useDispatch();
  const { uid, password } = useSelector((state) => state.auth);

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        //console.log(user);
        dispatch(login(user.email, user.uid, user.displayName));
      }

      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <Loader />;
  }

  return (
    <Router>
      {uid ? (
        <>
          <PrivateNavbar />
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <HomePage>{/* <SignOut dispatch={dispatch} /> */}</HomePage>;
              }}
            />

            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Route exact path="/perfil" component={Perfil} />
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
        <>
          <PublicNavbar />
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <HomePage>{/* <SignIn dispatch={dispatch} /> */}</HomePage>;
              }}
            />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Redirect to="/" />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;
