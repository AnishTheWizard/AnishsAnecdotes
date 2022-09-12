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
            <HeaderImage text={"post title here"} img={"https://cdn.britannica.com/88/129488-131-09AB5E83/Internet-blue-screen-blog-society-history-media-2009.jpg"}/>
            <Post title={details.title} body={details.desc} />
        </>
    );
}

export default BlogPost;