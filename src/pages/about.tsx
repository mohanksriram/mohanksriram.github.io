import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import profilePic from '../content/avatars/mohan.jpg';
import {Link} from 'gatsby';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
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

const About: React.FunctionComponent = () => (
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
                I'm a software engineer interested in the application of artificial intelligence in the context of robotics and healthcare.
                Have a look at my <a href="https://github.com/mohankumarSriram/cv/blob/master/cv.pdf"> resume </a>
                 for more
                information.
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
