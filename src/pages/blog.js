import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Blogs = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <div>
      {edges.map(blog => {
        const { frontmatter } = blog.node
        return (
          <Link to={frontmatter.path}>
            <h1>{frontmatter.title}</h1>
          </Link>
        )
      })}
    </div>
  )
}

export default Blogs

export const query = graphql`
  query AllBlogs {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            templateKey
          }
        }
      }
    }
  }
`
