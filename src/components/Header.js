/** @jsx jsx */

import { jsx } from '@emotion/core'
import {
    Image,
    Row,
    Col,
    Jumbotron,
    Container
} from 'react-bootstrap'
import Profile from '../assets/images/profile.png'
import HeaderBackground from '../assets/images/header-background.jpg'

export default function Header(props) {
    return (
        <Container
            as="header"
            fluid={true}
            className="d-flex align-items-center"
            css={{
                backgroundImage: `url(${HeaderBackground})`,
                backgroundSize: 'cover',
                height: '550px',
                marginTop: '68px',
                '@media (max-width: 768px)': {
                    '& h1': {
                        fontSize: '1em'
                    },
                    '& img': {
                        height: 'auto',
                        width: '150px'
                    }
                }
            }}
        >
            <Row>
                <Col md={{
                    span: 4,
                    order: 1
                }}>
                    <Image
                        roundedCircle={true}
                        id="image-profile"
                        src={Profile}
                        className="d-block mx-auto"
                        alt="profile"
                        css={{
                            height: '275px',
                            width: '275px'
                        }}
                    />
                </Col>
                <Col md={{
                    span: 6,
                    order: 2
                }}>
                    <Jumbotron
                        id="quote"
                        fluid={true}
                        className="font-italic"
                        css={{
                            backgroundColor: 'rgba(100, 100, 100, 0.8)',
                            borderRadius: '20px',
                            fontSize: '1.5em',
                            '&:hover': {
                                cursor: 'pointer',
                                backgroundColor: 'rgba(175, 175, 175, 1.0)'
                            }
                        }}
                    >
                        <h1 className="text-success">
                            "Just usually human who love coding, drawing, writing, and photography."
                            <br />
                            <span
                                id="name"
                                className="text-primary"
                                css={{
                                    fontFamily: 'Courgette'
                                }}
                            >
                                - Atallabela Yosua
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}