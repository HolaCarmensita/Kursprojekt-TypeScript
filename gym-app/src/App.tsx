import React from 'react';
import Form from './components/loginForm';

function App() {
  function handelSumbit(Formdata: { Username: string; Password: string }) {
    console.log(Formdata);
  }

  return (
    <div>
      <Form onSubmit={handelSumbit}></Form>
    </div>
  );
}

export default App;
