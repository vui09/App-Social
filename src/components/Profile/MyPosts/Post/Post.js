import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return  (
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/a/AATXAJzI_K3ue92O11YpECaj4F2pOwWa8lFs4syvhnXy=s900-c-k-c0xffffffff-no-rj-mo'/>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>    
    ) 
}

export default Post;