import React from 'react';

const UserProfile = (props) => {
    return(
        <div>
            <h3>id: {props.user.id}</h3>
            <p>
                {props.user.email}, 
                {props.user.product}, 
                {props.user.country}
            </p>
        </div>
    );
}

export default UserProfile;