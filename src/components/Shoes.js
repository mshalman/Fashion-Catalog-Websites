import { Card, Container, Row, Col, Image  } from "react-bootstrap"
import sh1Image from "../assets/image/shoes/sh1.jpg"
import sh2Image from "../assets/image/shoes/sh2.jpg"
import sh3Image from "../assets/image/shoes/sh3.jpg"
import sh4Image from "../assets/image/shoes/sh4.jpg"

const Shoes =  () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="shoes">SHOES</h1>
                <Row>
                    <Col md={3} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={sh1Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans OldSkool</Card.Title> 
                        <Card.Title className="text-center ">Black and White</Card.Title>                      
                        <Card.Text className="text-left">Rp 999.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sh2Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Slip On</Card.Title>
                        <Card.Title className="text-center ">Checkerboard</Card.Title>                       
                        <Card.Text className="text-left">Rp 999.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sh3Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans OldSkool</Card.Title> 
                        <Card.Title className="text-center ">Checkerboard</Card.Title>                      
                        <Card.Text className="text-left">Rp 1.199.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={sh4Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans OldSkool</Card.Title> 
                        <Card.Title className="text-center ">OTW SideWall</Card.Title>                      
                        <Card.Text className="text-left">Rp 1.2000.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Shoes