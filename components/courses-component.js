import React from 'react'

import PropTypes from 'prop-types'

const CoursesComponent = (props) => {
  return (
    <>
      <div className="courses-component-container">
        <img src={props.image_src} className="courses-component-image" />
        <div className="courses-component-container1">
          <h1 className="courses-component-text">{props.heading}</h1>
          <h1 className="courses-component-text1">{props.heading1}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .courses-component-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .courses-component-image {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            object-position: center;
          }
          .courses-component-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .courses-component-text {
            width: 100%;
            font-size: 32px;
            align-self: flex-start;
            margin-top: 0px;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            margin-left: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
          .courses-component-text1 {
            font-size: x-large;
            font-style: normal;
            margin-top: 0px;
            font-family: Inter;
            font-weight: 300;
            line-height: 1.15;
            margin-left: var(--dl-space-space-twounits);
            text-transform: none;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

CoursesComponent.defaultProps = {
  heading: 'Python',
  image_src: '/external/kaggle-200h.png',
  heading1: 'Kaggle',
}

CoursesComponent.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
}

export default CoursesComponent
