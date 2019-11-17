/** @jsx jsx */

import { jsx, keyframes } from '@emotion/core'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Boy from '../assets/images/boy.png'
import googleMap from '../assets/images/google-map.png'
import Indonesia1 from '../assets/images/indonesia-1.png'
import Indonesia2 from '../assets/images/indonesia-2.png'
import UnitedKingdom from '../assets/images/united-kingdom.png'
import Toilet from '../assets/images/toilet.png'
import Rings from '../assets/images/rings.png'
import Marker from '../assets/images/marker.png'
import Email1 from '../assets/images/email-1.png'
import Email2 from '../assets/images/email-2.png'
import Smartphone from '../assets/images/smartphone.png'
import Mailbox from '../assets/images/mailbox.png'
import Facebook from '../assets/images/facebook.png'
import GitHub from '../assets/images/github.png'
import Deviantart from '../assets/images/deviantart.png'
import Wattpad from '../assets/images/wattpad.png'
import Wordpress from '../assets/images/wordpress.png'
import ShepeBlue1 from '../assets/images/shepe-blue-1.png'
import Divider from '../assets/images/divider.png'

export default function AboutMe(props) {
    const A = keyframes`
        0% {
            transform: scale(1.0);
        }
        100% {
            border: 6px solid #00ffff;
            transform: scale(1.25);
        }
    `
    return (
        <Container as={'main'} fluid={true} id="about-me" css={{
            boxSizing: 'border-box',
            padding: '25px',
            '& > div': {
                width: '100%'
            },
            '& .carousel': {
                margin: '20px 0'
            },
            '& .carousel > a': {
                backgroundColor: '#808080',
                padding: '15px'
            },
            '& .carousel-item': {
                textAlign: 'center'
            },
            '& .bio': {
                fontWeight: 900,
                fontFamily: 'Sriracha'
            },
            '& .bio-details': {
                fontWeight: 700,
                fontFamily: 'Kalam'
            },
            '& #boy, & #email': {
                height: 'auto',
                width: '150px'
            },
            '& .section': {
                fontFamily: 'Pacifico',
                fontSize: '2em',
                fontWeight: 900,
                textAlign: 'center',
                width: '100%'
            },
            '& #map': {
                backgroundImage: `url(${ShepeBlue1})`,
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            },
            '& #map img': {
                height: 'auto',
                width: '500px'
            },
            '& .icon': {
                height: 'auto',
                width: '50px'
            },
            '& #row-1, & #row-2, & #row-3': {
                backgroundImage: `url(${Divider})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            },
            '& #row-2, & #row-3': {
                marginBottom: '75px'
            },
            '& #row-3 div': {
                fontSize: '1.5em',
                fontWeight: 900,
                margin: '20px',
                textAlign: 'center'
            },
            '& #row-3 img': {
                boxSizing: 'border-box',
                height: 'auto',
                padding: '10px',
                width: '150px'
            },
            '& #row-3 img:hover': {
                animationFillMode: 'forwards',
                animationDuration: '1s',
                animationName: `${A}`
            },
            '& #special': {
                fontFamily: 'Pacifico'
            },
            '& #row-1 .carousel-control-prev, & #row-2 .carousel-control-next': {
                display: 'none'
            },
            '& #row-1, & #row-2': {
                boxSizing: 'border-box',
                padding: '100px 0'
            },
            '@media (max-width: 768px)': {
                '.icon': {
                    height: 'auto',
                    width: '40px'
                },
                '& #row-3': {
                    fontSize: '0.5em'
                },
                '& #row-3 img': {
                    height: 'auto',
                    width: '100px'
                },
                '& h1': {
                    fontSize: '2em'
                },
                '& .section': {
                    fontSize: '1.5em'
                },
                '& h2': {
                    fontSize: '1em'
                },
                '& .bio-details': {
                    fontSize: '0.75em'
                }
            }
        }}>
            <Row id="row-1">
                <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} className="d-flex align-items-center justify-content-center">
                    <Row>
                        <Col className="section text-info">
                            <Image className="d-block mx-auto" src={Boy} id="boy" alt="Boy" />
                            PERSONAL
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 2 }}>
                    <Carousel id="carousel-1" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Name
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="text-primary bio-details">
                            <h2>
                                Atallabela Yosua
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-2" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Born
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Image src={Marker} thumbnail className="icon" alt="Marker" />
                            <h2>
                                9<sup>th</sup> June 2001, Palangka Raya City
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-3" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Gender
                                </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Image src={Toilet} thumbnail alt="Gender" className="icon" />
                            <h2>
                                Male
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-4" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Marital Status
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Image src={Rings} thumbnail className="icon" alt="rings" />
                            <h2>
                                Single
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-5" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Nationality
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Image thumbnail className="bg-dark icon" src={Indonesia1} alt="Indonesia Flag" />
                            <h2>
                                Indonesia
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-6" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Languages
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Row>
                                <Col xs={{ span: 8, order: 1 }} className="mx-auto">
                                    <Row>
                                        <Col>
                                            <Image thumbnail className="bg-dark icon" src={Indonesia2} alt="Indonesia Flag" />
                                            <h2>
                                                Indonesia (Native)
                                            </h2>
                                        </Col>
                                        <Col>
                                            <Image thumbnail className="bg-dark icon" src={UnitedKingdom} alt="United Kingdom Flag" />
                                            <h2>
                                                English (Passive and Listening)
                                            </h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row id="map">
                <Col>
                    <Image roundedCircle={true} fluid={true} className="d-block mx-auto" src={googleMap} alt="Map" />
                </Col>
            </Row>
            <Row id="row-2">
                <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 1 }}>
                    <Carousel id="carousel-7" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Address
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="text-primary bio-details">
                            <h2>
                                Tampung Penyang Street Number 3,<br />Palangka Raya City
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-8" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Postal Code
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Image thumbnail src={Mailbox} className="icon" alt="Marker" />
                            <h2>
                                73112
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-9" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Phone Number
                            </h2>
                        </Carousel.Item>

                        <Carousel.Item className="bio-details text-primary">
                            <Image thumbnail src={Smartphone} alt="Gender" className="icon" />
                            <h2>
                                +62 812 - 7885 - 1450
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                    <Carousel id="carousel-10" indicators={false} interval={0}>
                        <Carousel.Item className="bio text-success">
                            <h2>
                                Email
                            </h2>
                        </Carousel.Item>
                        <Carousel.Item className="bio-details text-primary">
                            <Image thumbnail src={Email2} className="icon" alt="rings" />
                            <h2>
                                atallabela.yosua.pky@gmail.com
                            </h2>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }} className="d-flex align-items-center justify-content-center">
                    <Row>
                        <Col className="section text-info">
                            <Image className="d-block mx-auto" src={Email1} id="email" alt="Contact" />
                            CONTACT
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h1 id="special" className="text-primary">
                MY ONLINE PROFILE
            </h1>
            <Row id="row-3">
                <Col xs={{ span: 12, order: 1 }} className="d-flex justify-content-center align-items-center">
                    <Row noGutters={true}>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 'auto', order: 1 }}>
                            <a href="https://justanaivedreamer.wordpress.com/">
                                <Image src={Wordpress} roundedCircle={true} fluid={true} className="d-block mx-auto" alt="Wordpress Logo" />
                                Wordpress
                            </a>
                        </Col>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 'auto', order: 2 }}>
                            <a href="https://learn-api-in-impact-byte.netlify.com/">
                                <Image src={GitHub} roundedCircle={true} fluid={true} className="d-block mx-auto" alt="GitHub Logo" />
                                GitHub
                            </a>
                        </Col>
                        <Col xs={{ span: 12, order: 3 }} md={{ span: 'auto', order: 3 }}>
                            <a href="https://web.facebook.com/atallabela.yosua.77">
                                <Image src={Facebook} roundedCircle={true} fluid={true} className="d-block mx-auto" alt="Facebook Logo" />
                                Facebook
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 12, order: 2 }} className="d-flex justify-content-center align-items-center">
                    <Row noGutters={true}>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 'auto', order: 1 }}>
                            <a href="https://www.wattpad.com/user/justanaivedreamer">
                                <Image src={Wattpad} roundedCircle={true} fluid={true} className="d-block mx-auto" alt="Wattpad Logo" />
                                Wattpad
                            </a>
                        </Col>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 'auto', order: 2 }}>
                            <a href="https://www.deviantart.com/a-naive-dreamer">
                                <Image src={Deviantart} roundedCircle={true} fluid={true} className="d-block mx-auto" alt="Deviantart Logo" />
                                Deviantart
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}