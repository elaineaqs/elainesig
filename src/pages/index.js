import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Elaine Aquino's Links" />
    <ol>
        <li>
            <a className="btn" href="https://gumroad.com/l/elaineaquino-ebook">Grab a FREE copy of Content Creation Foundations to kickstart your online content eco-system </a>
        </li>
        <li>
            <a className="btn" href="https://elaineaquino.com/blog">Read the EA blog</a>
        </li>
        <li>
            <a className="btn" href="https://youtube.com/elaineaqs89">Watch the the Beautiful Things and Memories vlog</a>
        </li>
        <li>
            <a className="btn" href="https://anchor.fm/elaineaquino">Listen to the Beautiful Things and Memories podcast</a>
        </li>
        <li>
            <a className="btn" href="https://elaineaquino.com/">Elaine Aquino Official Site</a>
        </li>
    </ol>
  </Layout>
)

export default IndexPage
