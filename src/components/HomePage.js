import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import SignUpForm from './SignUpForm';

const HomePage = () => (
  <div>
    <Card className="container">
      <CardTitle title="Nick's Home" subtitle="Welcome aboard!" />
    </Card>
    <SignUpForm onSubmit={(e) => console.log('submitted')}
      onChange={(e) => console.log('changed')}
      errors={{ email: 'Invalid' }}
      user={{ email: 'nick@norman.com', name: 'Nick Norman' }}/>
  </div>

);

export default HomePage;
