import {ReactFragment} from 'react';

function Profile(props) {
    return(
        <ReactFragment>
            <h1>Welcome {props.name}</h1>
            <h2>Your attendence</h2>
            
        </ReactFragment>
    );
};

export default Profile;

//props: name