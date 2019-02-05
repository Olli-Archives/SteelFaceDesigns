import React from 'react';


import {withFirebase} from '../Firebase';
import {User} from '../Context/User-Context';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {

        render() {
            return (
                <User.Consumer>
                    {
                        ({user}) => <Component {...this.props} auth={user}/>
                    }
                </User.Consumer>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;