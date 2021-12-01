import { Typography } from '@mui/material';
import AvatarForm from 'components/forms/profileForms/AvatarForm';
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const data = useSelector( state => state.userReducer )
  const [user, setUser] = useState({username: "", email: ""})

  useEffect (() => {
    if (data.user){
      setUser(data.user)
    }
  },
  [data]
  )

  return (
    <div className="Profile">
      <h2>Profile</h2>
      <Typography variant="h6" component="p">
        Username: {user.username}
      </Typography>
      <Typography variant="h6" component="p">
        Email: {user.email}
      </Typography>
    </div> 
  );
};

export default Profile;