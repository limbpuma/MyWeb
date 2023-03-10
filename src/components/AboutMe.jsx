import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { titleSection, socialLinks, card } from '../data';
import Card from './Card';
import SocialLink from './SocialLinks';
import TitleSection from './TitleSection';


const AboutMe = () => {
  return (
    <div className='container-fluid container-aboutme'>
      <div className='container-title-section'>
        {titleSection.slice(0, 1).map((link) => (
          <div className='' key={link.id}>
            <TitleSection {...link} />
          </div>
        ))}
      </div>
      <Row className='aboutme mx-auto justify-content-center align-items-center mb-3'>
        <Col className='aboutme-left col-12 col-md-8 col-lg-6 p-5'>
          <div className="row row-cols-md-2 mx-auto w-100 g-5">
            {card.slice(0, 4).map((link) => (
              <div className='' key={link.id}>
                <Card {...link} />
              </div>
            ))}
          </div>
        </Col>
        <Col className='aboutme-right col-12 col-md-4 col-lg-3 mx-auto'>
          {card.slice(3,4).map((link) => (
            <div className='w-100 border mb-3 p-2 border-0' key={link.id}>
              <Card {...link} />
              <div className="d-flex justify-content-center">
                {socialLinks.slice(0, 1).map((link) => (
                  <ul key={link.id}>
                    <SocialLink {...link} />
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
