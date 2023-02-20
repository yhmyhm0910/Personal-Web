import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

const Home:React.FC = () => {
  return (
    <Container fluid> {/*fluid = 100% width*/}
        <Row>
            <Col>
                <Figure>
                    <Figure.Image
                        height={90}
                        width={200}
                        src='https://i.pinimg.com/564x/39/86/fe/3986fed5bc314b3ea37701b328c2485d.jpg'/>
                    <Figure.Caption>
                        This is a leaf.
                    </Figure.Caption>
                </Figure>
            </Col>
        </Row>
        <Row>
            <Col>Photo</Col>
            <Col xs={10}>
                Infossssss
            </Col>
        </Row>
    </Container>
  )
}

export default Home