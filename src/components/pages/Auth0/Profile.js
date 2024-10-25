import React from 'react';
import "./Profile.css";
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="profile-header">
        <div className="col-md-2">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md">
          <h2>{name}</h2>
          <p className="lead">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;