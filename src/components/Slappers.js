import { Card, Container, Row, Col, Image  } from "react-bootstrap"
import sp1Image from "../assets/image/slappers/sp1.jpg"
import sp2Image from "../assets/image/slappers/sp2.jpg"
import sp3Image from "../assets/image/slappers/sp3.jpg"
import sp4Image from "../assets/image/slappers/sp4.jpg"

const Slappers =  () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="slappers">Slappers</h1>
                <Row>
                    <Col md={3} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={sp1Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Slide On</Card.Title> 
                        <Card.Title className="text-center ">Black</Card.Title>                      
                        <Card.Text className="text-left">Rp 589.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sp2Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Slide</Card.Title>
                        <Card.Title className="text-center ">Preto Vendita</Card.Title>                       
                        <Card.Text className="text-left">Rp 589.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sp3Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Flame</Card.Title> 
                        <Card.Title className="text-center ">Slide</Card.Title>                      
                        <Card.Text className="text-left">Rp 465.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sp4Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Slide On</Card.Title> 
                        <Card.Title className="text-center ">Checkerboard</Card.Title>                      
                        <Card.Text className="text-left">Rp 310.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Slappers