import { Card, Container, Row, Col, Image  } from "react-bootstrap"
import ts1Image from "../assets/image/tshirt/ts1.jpg"
import ts2Image from "../assets/image/tshirt/ts2.jpg"
import ts3Image from "../assets/image/tshirt/ts3.jpg"
import ts4Image from "../assets/image/tshirt/ts4.jpg"

const Tshirt =  () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="tshirt">Tshirt</h1>
                <Row>
                    <Col md={3} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={ts1Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Straight</Card.Title> 
                        <Card.Title className="text-center ">Vee T-Shirt</Card.Title>                      
                        <Card.Text className="text-left">Rp 299.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={ts2Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans T-shirt</Card.Title>
                        <Card.Title className="text-center ">OTW</Card.Title>                       
                        <Card.Text className="text-left">Rp 299.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={ts3Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Original</Card.Title> 
                        <Card.Title className="text-center ">Triangle T-Shirt</Card.Title>                      
                        <Card.Text className="text-left">Rp 299.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={ts4Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Print Box</Card.Title> 
                        <Card.Title className="text-center ">Youth T-shirt</Card.Title>                      
                        <Card.Text className="text-left">Rp 299.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Tshirt