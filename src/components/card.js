import {Card, CardImg} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {CardGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

function BlogTile(props) {

    return(
        <CardGroup style={{display:"flex", flexDirection:"row"}}>
            <Card className="shadow" style={{ width: '18rem', margin: "15px", flex: 1}}>
                <CardImg style={{height:"150px", objectFit:"cover"}} src={props.img} />
                <Card.Body style={{marginTop:"15px", marginBottom:"15px"}}>
                    <Card.Title >{props.title}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    {/*<Button className={"stretched-link"} variant="primary">Read Post</Button>*/}
                    <Link to={{pathname: props.postID}}>
                        <Button className={"stretched-link"} variant="primary">
                            Read Post
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default BlogTile;