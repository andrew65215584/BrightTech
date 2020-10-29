import React from 'react';
import { useDispatch } from 'react-redux';
import '../Header/navigation.css';
import { logOut } from '../../redux/auth/authOperations';

function AvatarAndName() {
  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className="avatar-container">
      <span style={{color : "white", marginRight : "30px"}}>Вы вошли как Гость </span>
      <button onClick={handleClick}>Выйти</button>
    </div>
  );
}

export default AvatarAndName;
