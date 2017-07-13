import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';

const cardStyle = { 'backgroundColor' : 'lightblue' }

const HomePage = () => (
  <div>
    <Card className="container">
      <CardTitle title="Nick's Home" subtitle="Welcome aboard!" style={cardStyle} />
    </Card>
    <br/>
    <div style={{ 'textAlign' : 'center'}}>
      <div>
        <Link to='/signup'>No account? Signup now!</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  </div>


);

export default HomePage;
