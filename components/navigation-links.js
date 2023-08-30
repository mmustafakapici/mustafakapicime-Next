import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="#hero" className="navigation-links-link">
          {props.text}
        </a>
        <a href="#course" className="navigation-links-link1">
          {props.text1}
        </a>
        <a href="#skill" className="navigation-links-link2">
          {props.text2}
        </a>
        <a href="#brands" className="navigation-links-link3">
          {props.text3}
        </a>
        <a href="#mail" className="navigation-links-link4">
          {props.text4}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            text-decoration: none;
          }
          .navigation-links-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Projects',
  text3: 'Brands',
  text2: 'Skills',
  text: 'About',
  rootClassName: '',
  text4: 'Contact',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
