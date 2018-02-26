import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Helmet from 'react-helmet';
//import favicon from './static/favicon.ico'

import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <div>
    <Helmet
      title="Amans Blog"
      meta={[
        { name: 'description', content: 'My personal blog' },
        { name: 'keywords', content: 'aman, mender, aman mender, thinker, creator' },
      ]}
      link={[
        {rel:'icon', href:'favicon.ico', type:'image/x-icon'}
      ]}
    />
    <g.Div
      margin={`0 auto`}
      maxWidth={700}
      padding={rhythm(2)}
      paddingTop={rhythm(1.5)}
    >
      <Link to={`/`}>
        <g.H3
          marginBottom={rhythm(2)}
          display={`inline-block`}
          fontStyle={`normal`}
        >
          {data.site.siteMetadata.title}
        </g.H3>
      </Link>
      <Link className={linkStyle} to={`/about/`}>
        About
      </Link>
      {children()}
    </g.Div>
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
