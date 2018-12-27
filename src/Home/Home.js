import React from 'react';
import {SignOutButton} from '../SignOut'
import {withAuthorization} from '../Session'

const Home = ()=>
    <div>
      <h1>Welcome Home</h1>
        <p>if you see this page you are signed in</p>
        <SignOutButton/>
    </div>;

const condition = authUser => !!authUser;
console.log('here is home page condition');
console.log(condition);

export default withAuthorization(condition)(Home);

