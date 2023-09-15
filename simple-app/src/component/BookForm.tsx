export function BookForm(): JSX.Element {
  return (
    <form action=''>
      <div>
        <label htmlFor=''>Name</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor=''>Date</label>
        <input type='date' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
