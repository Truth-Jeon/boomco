import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Input, Button, Text } from 'antd';
import api from 'lib/api';
import { Container, Row, Col, Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../Images/temp.png';
import copy from '../Images/icon_copy.png';
import link from '../Images/icon_link.png';
import './App.css';
import login from '../Images/logo.png';
import pattern from '../Images/std_pattern.png';
import logo1 from '../Images/logo1.png';
import arrow from '../Images/arrow_up.png';
import notarrow from '../Images/arrow_down.png';
import logo2 from '../boomco.org/write/ad_logo.png';
import apple from '../boomco.org/boomco/btn_apple.png';
import google from '../boomco.org/boomco/btn_google.png';
import service from '../boomco.org/write/ad_service03.png';
import global from '../boomco.org/boomco/icon_global.png';
import heart from '../boomco.org/boomco/icon_heart_main.png';
import facebook from '../boomco.org/boomco/icon_facebook.png';
import illunex from '../boomco.org/boomco/pt_illunex.png';
import nucnc from '../boomco.org/boomco/pt_nucnc.png';
import gatos from '../boomco.org/boomco/pt_hello_gatos.png';
import everywhere from '../boomco.org/boomco/pt_team_everywhere.png';
import newyork from '../boomco.org/boomco/pt_newyork_trader.png';
import miso from '../boomco.org/boomco/pt_miso.png';
import mark from '../boomco.org/boomco/pt_mark.png';
import air42 from '../boomco.org/boomco/pt_42air.png';
import d99 from '../boomco.org/boomco/pt_99d.png';
import fiscal from '../boomco.org/boomco/pt_fiscal.png';
import devi from '../boomco.org/boomco/pt_devialet.png';
import blue from '../boomco.org/boomco/pt_bluefeel.png';
import smart from '../boomco.org/boomco/pt_smart_study.png';
import sopoong from '../boomco.org/boomco/pt_sopoong.png';
import aeol from '../boomco.org/boomco/pt_aeol.png';
import banner01 from '../boomco.org/boomco/banner_01.png';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkList: [],
            arrow: 0,
        }
    }

    componentDidMount() {
        // this.state.arrow;
        // this.setState({arrow:1});
        const self = this;
        const refcode = this.props.match.params.refcode;
        api.post('/users/list', { url_code: refcode })
            .then(function (results) {
                self.setState({ linkList: results.data });
            })
            .catch(err => {

            })
    }

    onChangeUrl = (e) => {
        if (e.target.value.length < 6) {
            this.setState({ countResult: -1 });
            return
        }

        const self = this;
        this.setState({ countResult: 0 });

        api.post('/supporter/referrer/code', { code: e.target.value })
            .then(function (item) {
                let setData = item.data;
                let count = setData.data ? setData.data : 0;
                self.setState({ countResult: count });
            })
            .catch(err => {
                self.setState({ countResult: -1 });
            })
    }

    onSelectAco = (e) => {
        console.log("aaaaaaa: ", e)
        this.setState({ arrow: e})
    }

    render() {
        console.log("list: ", this.state.linkList)
        let self = this;
        let LayoutList = [];
        let name= copy;
        this.state.linkList.forEach(function (item, index) {
            
            if( self.state.arrow == index + 1 ){
                name = notarrow;
            } else {
                name = arrow;
            }
            let newItem = (
                <Card style={{backgroundColor:'white', borderRadius:20, margin:20, width:1000, margin:'0 auto'}}>
                    <Card.Header className="back2">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={index+1} className="back2">
                            <Row>
                                <Col lg={1} className="back2">
                                    <img src={first} alt='img_url' style={{ borderRadius: 20, boxShadow: '1px 1px 3px 4px #ccc'}}></img>
                                </Col>
                                <Col className="rounded" lg={10}>
                                    <h3>{item.title}</h3>
                                    <br />
                                    <p>{item.contents}</p>
                                </Col>
                                {/* <Col lg={1} className={name}>
                                </Col> */}
                                <Col lg={1}>
                                <img src={name} alt='img_url' style={{width:50}}></img>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index+1} className="back3">
                        <Card.Body className="back3">
                            <Container>
                                <Row>
                                    <Col lg={6} className="rounded">
                                        <div className="shadow">
                                            <Container>
                                                <Row>
                                                    <Col lg={10} style={{ borderRight: 'solid 0.5px #d3d3d3' }}>
                                                        <p>REFERRAL CODE</p>
                                                        <h5 style={{ color: 'orange' }}>{item.referral_code}</h5>
                                                    </Col>
                                                    <Col lg={2} style={{ textAlign: 'center' }} className="my-auto">
                                                        <link rel="stylesheet" href="./App.css"></link>
                                                        <img src={copy} alt='copy' style={{ width: 25, height: 30 }}></img>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="rounded">
                                        <div className="shadow">
                                            <Container>
                                                <Row>
                                                    <Col lg={10} style={{ borderRight: 'solid 0.5px #d3d3d3' }}>
                                                        <p>REFERRAL LINK</p>
                                                        <p style={{ color: 'orange' }}>{item.referral_link}</p>
                                                    </Col>
                                                    <Col lg={2} style={{ textAlign: 'center' }} className="my-auto">
                                                        <img src={link} alt='link' style={{ width: 25, height: 30 }}></img>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                                <Col className="rounded">
                                    <br />
                                    <Button style={{ backgroundColor: '#2d323b', color: 'white', borderRadius: '20px' }}>Go to Site</Button>
                                </Col>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
            LayoutList.push(newItem);
        })

        return (
            <div id="wrap" >
                <div className="header1">
                    <img src={logo2} alt='logo2' style={{height:50}}></img>
                </div>
                <div className="header2">
                    <ul>
                        <li><a href="#" style={{color:'red'}}>About</a></li>
                        <li><a href="#" style={{color:'black'}}>Press</a></li>
                    </ul>
                </div>
                <div style={{ flex:1, maxWidth: 1400, margin: '0 auto' }}>
                    <div style={{ flex: 1 }} />
                    {/* <div className="main">
                        {LayoutList}
                    </div> */}
                            <div className="main1">
                                <h3>Have fun studying Korean</h3>
                                <h1>With </h1><h1 style={{color:'red', fontWeight:'bolder'}}>boomco</h1>
                                <p></p>
                                <h6 style={{color:'#808080'}}>Learn the most trendy Korean fastest,</h6>
                                <h6 style={{color:'#808080'}}>Study Korean with my favorite KPOP or K-Drama!</h6>
                                <p></p>
                                <img src={apple} style={{marginTop:'20px'}}></img>
                                <img src={google} style={{marginTop:'20px', marginLeft:'15px'}}></img>
                            </div>
                            <div className="main2">
                                <img src={service}></img>
                            </div>
                            <Row className="sub">
                                <Col md={4}>
                                    <img src={global}></img>
                                    <p></p>
                                    <h5 style={{color:'white'}}>4 languages</h5>
                                    <h6 style={{color:'white'}}>English incl. 3</h6>
                                </Col>
                                <Col md={4}>
                                    <img src={heart}></img>
                                    <p></p>
                                    <h5 style={{color:'white'}}>4.6</h5>
                                    <h6 style={{color:'white'}}>Google App Score</h6>
                                </Col>
                                <Col md={4}>
                                <img src={facebook}></img>
                                <p></p>
                                <h5 style={{color:'white'}}>5,012</h5>
                                <h6 style={{color:'white'}}>Facebook Follower</h6>
                                </Col>
                            </Row>
                            <div className="partners">
                                <h1 style={{fontWeight:'bolder'}}>Partners</h1>
                                <img src={illunex}></img>
                                <img src={nucnc}></img>
                                <img src={gatos}></img>
                                <img src={everywhere}></img>
                                <img src={newyork}></img>
                                <img src={miso}></img>
                                <img src={mark}></img>
                                <img src={air42}></img>
                                <img src={d99}></img>
                                <img src={fiscal}></img>
                                <img src={devi}></img>
                                <img src={blue}></img>
                                <img src={smart}></img>
                                <img src={sopoong}></img>
                                <img src={aeol}></img>
                            </div>
                            <div className="partners2">
                                <h6 style={{color:'#d3d3d3'}}>boomco is joined by domestic and international companies</h6>
                            </div>
                            <Row className="videos">
                                <Col md={6} className="videos2">
                                    <p>Everyday Enjoy learning</p>
                                    <h1 style={{color:'red', fontWeight:'bolder'}}>Daily Updates</h1>
                                    <h1>of Hally Videos</h1>
                                </Col>
                                <Col md={6}>
                                    <img src={banner01}></img>
                                </Col>
                            </Row>
                    <div style={{ flex: 1 }} >
                    <Accordion defaultActiveKey="0" onSelect={(e) => this.onSelectAco(e)}>
                            {LayoutList}
                        </Accordion>
                    </div>
                    <div style={{ flex: 1 }} />
                </div>
            </div>
        );
    }
}



let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

