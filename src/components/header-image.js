import {Card, CardImg} from "react-bootstrap";


function HeaderImage(props) {
    return (
        <>
            <Card style={{backgroundColor:"black", textAlign:"center"}}>
                <CardImg style={{width:"100%", height:"350px" ,objectFit:"cover", opacity:"40%"}} src={props.img} />
                <Card.ImgOverlay className={""}>
                    <div className={""} style={{color:"white", justifyContent:"center", transform:"translateY(200%)"}}>
                        <h1>
                            {props.text}
                        </h1>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default HeaderImage;