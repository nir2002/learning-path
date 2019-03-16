import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops'
import FrontendRoadMap from './Roadmaps/FrontendRoadMap'

const Header = props => {
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      {/* <div className="logo">
      <span className="icon fa-diamond" />
    </div> */}
      <div>
        <h1>Ready to be at your best?</h1>
        <h3>Learn Better. Be Better.</h3>
      </div>
      <div className="content">
        <div className="inner">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6vMO3XmNXe4?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1000}>
        {props => (
          <div style={{ ...props, width: '220%', marginTop: 20 }}>
            <h3>Choose a skill to acquire!</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center',
                marginTop: 50,
              }}
            >
              <div style={{ width: '30%' }}>
                <h4>Frontend</h4>
                {/* <img src={FrontendImg} style={{ height: 250, width: '100%' }} /> */}
                <FrontendRoadMap />
              </div>
              <div style={{ width: '30%' }}>
                <h4>Backend</h4>
                {/* <img src={BackendImg} style={{ height: 250, width: '100%' }} /> */}
              </div>
              <div style={{ width: '30%' }}>
                <h4>Devops</h4>
                {/* <img src={FrontendImg} style={{ height: 250, width: '100%' }} /> */}
              </div>
            </div>
          </div>
        )}
      </Spring>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
