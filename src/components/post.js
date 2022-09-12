import {Component} from "react";
import {Button, Card, CardImg} from "react-bootstrap";
import {Link} from "react-router-dom";

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"row", paddingLeft:"20%", paddingRight:"20%"}}>
                <Card className="shadow" style={{ width: '18rem', margin: "15px", flex: 1}}>
                    <Card.Header>
                        <Card.Title  style={{textAlign:'center'}}>
                            <h2>
                                {this.props.title}
                            </h2>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body style={{marginTop:"15px", marginBottom:"15px"}}>
                        <Card.Text>
                            <p style={{fontSize:"20px", paddingLeft:"10%", paddingRight:"10%"}}>
                                {this.props.body}
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Post;