import React from 'react';
// import './styles/styles.css';
// import Sidebar from './components/Sidebar';
// import Form from './components/PostForm.js';
// import Preview from './components/Preview.js'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig)
const App = () => {
  return (
      <Authenticator>
                {({ signOut, user }) => (
                  <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                      </main>
                )}
              </Authenticator>
  );
};

export default withAuthenticator(App);
