import React from 'react';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push("/login");
                    }
                },
            );
        }


        componentWillUnmount() {
            this.listener();
        }


        render() {
            return <Component {...this.props} />;
        }
    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;