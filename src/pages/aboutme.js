import React from "react";
import HeaderImage from "../components/header-image";
import Post from "../components/post";

class AboutMe extends React.Component {
    render() {
        return (
            <>
                <HeaderImage text={"All About Me!"} img={"family.png"}/>
                <Post title={"About Me"} body={
                    <>
                        Hi! I'm Anish
                        <br/>
                        - I like to play video games
                        <br/>
                        - I enjoy spending my time programming
                        <br/>
                        - I'm apart of the robotics team and I love it there (pic related)
                        <br/>
                        <br/>
                        <img src={"https://live.staticflickr.com/65535/52287900918_99348a1113_4k.jpg"} style={{width:"200px", height:"200px", objectFit:"cover"}} />
                        <br/>
                        <br/>
                        PS: I made this website from scratch as a bet, so it doesn't look the nicest, but its functional
                        <br/> I'll make it look nicer as the year goes on and improve its usability

                    </>
                }/>
            </>
        );
    }
}

export default AboutMe;