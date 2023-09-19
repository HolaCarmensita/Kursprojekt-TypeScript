import React from 'react';
import { PageBanner } from './component/PageBanner';
import { User } from './types/User';
import { BookForm } from './component/BookForm';
function App() {
  const user: User = { role: 'USER', username: 'Greta' };

  return (
    <div>
      <PageBanner theme='light' user={user} />
      <BookForm></BookForm>
    </div>
  );
}

export default App;
