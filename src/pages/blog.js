import {Component} from "react";
import BlogTile from "../components/card";
import {Card, CardGroup, CardImg, Col, Row} from "react-bootstrap";

import {database} from "../utils/firebase";
import {ref, set, get, child, onValue} from 'firebase/database';
import HeaderImage from "../components/header-image";

class Blog extends Component {


    constructor(props) {
        super(props);
        this.state= {
            tiles: []
        }
    }

    componentDidMount() {
        onValue(
            ref(
                database, 'posts/'
            ),
            (snapshot) => {
                this.updateTiles(snapshot.val());
            }
        );
    }

    updateTiles(posts) {
        const newTiles = [];
        for(const [postID, post] of Object.entries(posts)) {
            newTiles.push([postID, post]);
        }
        this.setState({tiles:newTiles});
    }

    render() {
        const output = [];
        this.state.tiles.forEach(e => {
            output.push(
                <BlogTile title={e[1].title} desc={e[1].desc} img={e[1].img} postID={e[0]} />
            );
        })
        output.reverse();

        return (
            <>
                <HeaderImage text={"Welcome to My Blog!"} img={"https://cdn.britannica.com/88/129488-131-09AB5E83/Internet-blue-screen-blog-society-history-media-2009.jpg"}/>
                <div className={""} style={{paddingLeft:"20%", paddingRight:"20%"}}>
                    {output}
                </div>
            </>
        );
    }
}


export default Blog;