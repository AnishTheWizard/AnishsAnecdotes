import {Component} from "react";
import HeaderImage from "../components/header-image";
import Post from "../components/post";

import {useLocation, useParams} from "react-router-dom";
import {onValue, ref} from "firebase/database";
import {database} from "../utils/firebase";

function BlogPost(props) {
    const {post} = useParams();
    let details = {};
    onValue(
        ref(
            database, 'posts/'+post
        ),
        (snapshot) => {
            details = snapshot.val();
        }
    );
    //ping firebase for post

    return(
        <>
            <HeaderImage text={details.desc} img={details.img}/>
            <Post title={details.title} body={details.body} />
        </>
    );
}

export default BlogPost;