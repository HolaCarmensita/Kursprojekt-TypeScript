import React from 'react';
import { PageBanner } from './component/PageBanner';
import { User } from './types/User';

function App() {
  const user: User = { role: 'USER', username: 'Greta' };

  return (
    <div>
      <PageBanner theme='light' user={user} />
    </div>
  );
}

export default App;
