import { Card, Container, Row, Col, Image  } from "react-bootstrap"
import ba1Image from "../assets/image/bag/ba1.jpg"
import ba2Image from "../assets/image/bag/ba2.jpg"
import ba3Image from "../assets/image/bag/ba3.jpg"
import ba4Image from "../assets/image/bag/ba4.jpg"

const Bag =  () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="bag">Bag</h1>
                <Row>
                    <Col md={3} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={ba1Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Blank Canvas </Card.Title> 
                        <Card.Title className="text-center ">Crossbody Bag</Card.Title>                      
                        <Card.Text className="text-left">Rp 542.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={ba2Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Bail shoulder</Card.Title>
                        <Card.Title className="text-center "> bag in red</Card.Title>                       
                        <Card.Text className="text-left">Rp 186.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={ba3Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Peanuts</Card.Title> 
                        <Card.Title className="text-center ">Old Skool Ii</Card.Title>                      
                        <Card.Text className="text-left">Rp 930.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={ba4Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Realm</Card.Title> 
                        <Card.Title className="text-center ">Black Backpack</Card.Title>                      
                        <Card.Text className="text-left">Rp 699.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Bag