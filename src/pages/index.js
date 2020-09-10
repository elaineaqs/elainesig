import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Elaine Aquino's Links" />
    <ol>
        <li>
            <a className="btn" href="https://calendly.com/elaineaquino/minicoaching">Free 15-min coaching sessions + content audit</a>
        </li>
        <li>
            <a className="btn" href="https://youtube.com/elaineaqs89">Watch the vlog</a>
        </li>
        <li>
            <a className="btn" href="https://anchor.fm/elaineaquino">Listen to the podcast</a>
        </li>
        <li>
            <a className="btn" href="https://gumroad.com/elaineaquino">Digital Content Creation ebook</a>
        </li>
        <li>
            <a className="btn" href="https://elaineaquino.com/subscribe">Subscribe to Weekly Mindset Mailing List</a>
        </li>
        <li>
            <a className="btn" href="https://elaineaquino.com/blog">Read the blog</a>
        </li>
    </ol>
  </Layout>
)

export default IndexPage
