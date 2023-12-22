import { Card, Container, Row, Col, Image  } from "react-bootstrap"
import sb1Image from "../assets/image/snapbag/sb1.jpg"
import sb2Image from "../assets/image/snapbag/sb2.jpg"
import sb3Image from "../assets/image/snapbag/sb3.jpg"
import sb4Image from "../assets/image/snapbag/sb4.jpg"

const Snapbag =  () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="hat">Hat</h1>
                <Row>
                    <Col md={3} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={sb1Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Classic Patch</Card.Title> 
                        <Card.Title className="text-center ">Trucker Hat 2021</Card.Title>                      
                        <Card.Text className="text-left">Rp 205.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sb2Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Courtside</Card.Title>
                        <Card.Title className="text-center ">Hat</Card.Title>                       
                        <Card.Text className="text-left">Rp 205.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sb3Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Drop V</Card.Title> 
                        <Card.Title className="text-center ">Snapback Hat</Card.Title>                      
                        <Card.Text className="text-left">Rp 205.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sb4Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Flying V</Card.Title> 
                        <Card.Title className="text-center ">Bucket Hat</Card.Title>                      
                        <Card.Text className="text-left">Rp 389.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Snapbag