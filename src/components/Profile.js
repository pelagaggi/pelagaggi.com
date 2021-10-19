import React from 'react';
import { spacee_week } from '../images';
import { Container, Col, Row } from 'reactstrap';
import { Typography } from '@material-ui/core';

const Profile = () => {
    return (
        <Container style={{ paddingBottom: "3vh", textAlign: "left" }}>
            <Row>
                <Col sm='12' md='6' lg='7'>
                    <Typography style={{ marginBottom: '24px' }} variant='h4' children='Alexandre Rodrigues Pelagaggi Nunes' />
                    <div className='headline'>
                        <Typography variant='h6' className='headline-item'>
                            B.Eng.in Electronics
                            <a target='_blank' href="https://www.linkedin.com/school/cefetrjoficial/">CEFET/RJ</a> (2019)
                        </Typography>
                        <Typography variant='h6' className='headline-item'>
                            M.Eng in Industrial Electronics
                            <a target='_blank' href="http://portal3.ipb.pt/index.php/en/guiaects/degree-programmes/master-programmes-mestre-degree/course?cod_escola=3043&cod_curso=9572">
                                IPB
                            </a>
                            (2019)
                        </Typography>                        
                        <Typography variant='h6' className='headline-item'>
                            Security Engineer
                            <a target='_blank' href="https://www.linkedin.com/in/alexandre-pelagaggi/detail/treasury/education:735202642/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACKvzuUBfzrHhtrkx_c33qFVo5Sh0vH31HE%2C1635463137267)&section=education%3A735202642&treasuryCount=2&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOieFEwquSraUvnpO0PZbTA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell">
                                Nanodegree
                            </a> (2021)
                        </Typography>
                    </div>
                    <Typography style={{ overflow: 'auto', margin: "16px auto" }}
                        variant='body1' >
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/pelagaggi"> Github </a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexandre-pelagaggi"> Linkedin</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="mailto://alexandre@pelagaggi.com"> pelagaggialex @gmail.com </a></li>
                        </ul>
                    </Typography>
                </Col>
                <Col sm='12' md='6' lg='5'>
                    <img style={{ width: "100%", 'border-radius': '6%', textAlign: 'right' }} src={spacee_week} alt="Card cap" />

                </Col>
            </Row>
        </Container>
    )
}

export default Profile;