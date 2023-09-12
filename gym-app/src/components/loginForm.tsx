import React from 'react';
import './loginForm.css';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  Username: string;
  Password: string;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    Username: '',
    Password: '',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.Username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='number'
          name='password'
          value={formData.Password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
