import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby-plugin-modal-routing'
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

export default ({ data }) => (
  <Layout>
    <SEO />
    <Link
      to="/modal/"
      asModal
    >
      Login
    </Link>
    <section className="food">
      <div className="container">
        <Row>
          {data.works.edges.map((e) => {
            return (
              <Col xs={12} sm={4} lg={3} xl={2}>
                <figure style={{ maxWidth: "200px" }}>
                  <Image filename={e.node.thumbnail_name} alt="" />
                </figure>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  </Layout >
)


export const query = graphql`
query {
  works: allWorksJson {
    edges {
      node {
        image_name
        name
        thumbnail_name
        description
      }
    }
  }
}
`