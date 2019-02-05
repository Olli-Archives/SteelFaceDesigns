import React, {Component} from 'react';
import {withFirebase} from "../Firebase";
import withAuthorization from "../Session/withAuthorization";
import MessageHandler from "../DataHandling/MessageHandler";


class AdminPageBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: false
        }
    }


    componentDidMount() {
        this.setState({loading: true});




        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            console.log(`admin snapshot of key value pairs`,usersObject);

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            console.log('map through keys***',usersList);//2.now the key has been generated into a predictable number, and the iud is fed inside the object under the key of uid


            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }


    render() {

        const {loading, users} = this.state;
        return (
            <div className="admin_intro">


                {loading && <div>Loading ...</div>}

                <UserList users={users}/>


            </div>
        )
    }


}

const UserList = ({users}) => {

    return (
        <ul>
            <li><h1>Customer Messages</h1></li>
            <li><MessageHandler users={users}/></li>
        </ul>

    )
};


const AdminPage = withFirebase(AdminPageBase);


const condition = firebaseAuth => firebaseAuth && firebaseAuth.roles.includes('ADMIN');


export default withAuthorization(condition)(AdminPage);


