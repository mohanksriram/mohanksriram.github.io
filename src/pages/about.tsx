import IndexLayout from '../layouts';
import { Wrapper } from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import React from 'react';
import { css } from '@emotion/react';

import { PostFullHeader, PostFullTitle, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
import profilePic from '../content/avatars/mohan_profile.jpg';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const profileImage = css`
  border-radius: 0%;
  border: 0;
  padding: 0;
  margin-top: 0;
  width: 350px;
  height: 360px;
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
          <img src={profilePic} css={profileImage}>
            </img>

            <div className="post-content">
              <p>
                I'm a software engineer primarily interested in building autonomous systems and agents which deliver reliable performance in the real world. Currently, I work as a perception software engineer at <a href="https://www.cynlr.com">CynLr</a>. 
                Previously, I had co-founded a company named <a href="https://neospec.in/">Neospec Labs</a>, where we built a medical device for the rapid detection of jaundice in neonates.
                Prior to that, I worked at <a href="https://www.newmindrobotics.com/">Newmind Robotics</a> and <a href="https://www.myslingstudio.com/">SlingMedia </a>.
                Have a look at my <a href="https://github.com/mohankumarSriram/cv/blob/master/cv.pdf"> resume </a> for more information.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
