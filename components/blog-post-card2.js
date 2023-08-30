import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard2 = (props) => {
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-post-card2-image"
        />
        <div className="blog-post-card2-container">
          <div className="blog-post-card2-container1">
            <span className="blog-post-card2-text">{props.level}</span>
            <span className="blog-post-card2-text1">{props.position}</span>
          </div>
          <h1 className="blog-post-card2-text2">{props.title}</h1>
          <span className="blog-post-card2-text3">{props.description}</span>
          <div className="blog-post-card2-container2">
            <div className="blog-post-card2-profile">
              <div className="blog-post-card2-container3">
                <h3 className="blog-post-card2-text4">{props.heading}</h3>
              </div>
              <span className="blog-post-card2-text5">{props.tech_stack}</span>
            </div>
            <span className="blog-post-card2-text6">Read More -&gt;</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-image {
            width: 243px;
            height: 395px;
            max-width: 100%;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card2-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card2-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .blog-post-card2-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .blog-post-card2-text2 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-text3 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-card2-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-profile {
            display: flex;
            align-items: center;
          }
          .blog-post-card2-container3 {
            width: 112px;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: flex-start;
          }
          .blog-post-card2-text4 {
            width: auto;
            align-self: center;
          }
          .blog-post-card2-text5 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card2-text6 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 500;
          }
          .blog-post-card2-root-class-name {
            background-color: #d9d9d9;
          }
          .blog-post-card2-root-class-name1 {
            background-color: #d9d9d9;
          }
          .blog-post-card2-root-class-name3 {
            background-color: #d9d9d9;
          }
          .blog-post-card2-root-class-name4 {
            background-color: #d9d9d9;
          }
          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card2-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card2-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-post-card2-text6 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard2.defaultProps = {
  tech_stack: 'Python , C#, tensorflow',
  title: 'Lorem ipsum dolor sit amet',
  level: 'ENTERPRISE',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
  heading: 'Tech Stack:',
  position: 'founder',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
}

BlogPostCard2.propTypes = {
  tech_stack: PropTypes.string,
  title: PropTypes.string,
  level: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
}

export default BlogPostCard2
