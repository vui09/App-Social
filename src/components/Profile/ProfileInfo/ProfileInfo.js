import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profileImg} src="https://i.ytimg.com/vi/zmX24E_kyhM/maxresdefault.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>    
    )
}

export default ProfileInfo;
 