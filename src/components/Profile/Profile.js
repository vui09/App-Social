import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <div>
        <img src="https://i.ytimg.com/vi/zmX24E_kyhM/maxresdefault.jpg" alt=""/>
        </div>
        <div>
        ava + description
        </div> 
        <MyPosts/> 
    </div>
}

export default Profile;