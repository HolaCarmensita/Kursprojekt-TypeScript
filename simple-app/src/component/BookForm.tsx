import { ChangeEvent, useState } from 'react';

interface BookData {
  name?: string;
  date?: Date;
}

type inputEvent = ChangeEvent<HTMLInputElement>;

export function BookForm(): JSX.Element {
  const [bookData, setBookData] = useState<BookData>(); //använd Bookdata i setBookdata

  const handleNameChange = (event: inputEvent) => {
    setBookData({ ...bookData, name: event.target.value });
  };

  const handleDateChange = (event: inputEvent) => {
    const date = new Date(event.target.value);
    setBookData({ ...bookData, date });
  };

  return (
    <form action=''>
      <div>
        <label htmlFor=''>Name</label>
        <input type='text' onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor=''>Date</label>
        <input type='date' onChange={handleDateChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
