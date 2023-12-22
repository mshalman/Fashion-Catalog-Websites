import { Card, Container, Row, Col, Image  } from "react-bootstrap"
import hd1Image from "../assets/image/hoodie/hd1.jpg"
import hd2Image from "../assets/image/hoodie/hd2.jpg"
import hd3Image from "../assets/image/hoodie/hd3.jpg"
import hd4Image from "../assets/image/hoodie/hd4.jpg"

const Jacket =  () => {
    return(
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="jacket">Hoodie</h1>
                <Row>
                    <Col md={3} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={hd1Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Overgrown</Card.Title> 
                        <Card.Title className="text-center ">off the wall</Card.Title>                      
                        <Card.Text className="text-left">Rp 349.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={hd2Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Boy's 8-20</Card.Title>
                        <Card.Title className="text-center ">Graphic Pullover</Card.Title>                       
                        <Card.Text className="text-left">Rp 349.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={hd3Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Classic</Card.Title> 
                        <Card.Title className="text-center ">Pullover Hoodie</Card.Title>                      
                        <Card.Text className="text-left">Rp 349.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>

                    <Col md={3} className="movieWrapper">
                    <Card className="movieImage">
                    <Image src={hd4Image} alt="Vans OS" className="images"/> 
                    <div className="bg-dark"> 
                        <div className="p-2 m-1 text-white">                                                                                                                              
                        <Card.Title className="text-center ">Vans Core Basic</Card.Title> 
                        <Card.Title className="text-center ">Bluestone</Card.Title>                      
                        <Card.Text className="text-left">Rp 349.000</Card.Text>
                        </div>  
                    </div>                                             
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Jacket