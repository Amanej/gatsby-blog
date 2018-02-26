import React from "react";

export default ({data}) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      Hi, my name is Aman. I am 27 years old developer entrepreneur, and aspiring tinker.
      I want to tinker with the universe, and everything it has to offer.
    </p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
