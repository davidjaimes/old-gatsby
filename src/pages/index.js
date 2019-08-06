import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "#24292e", fontSize: 50, fontWeight: 'bold'}}>
            Husband. Scientist. Trail Runner.
          </p>
          <h3>Creativity and imagination are great starting places, but hard-headed thinking and extreme attention to detail are essential to success.</h3>
          <h5>Jet Propulsion Laboratory</h5>
          <br/>
          <Link to="/astro/eclipsing-binaries">
            <Button type="primary" size="large" style={{marginRight: 10}}>astro</Button>
          </Link>
          <Link to="/docs/get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Docs</Button>
          </Link>
          <Link to="/blog">
            <Button type="primary" size="large" style={{marginRight: 10}}>Blog</Button>
          </Link>
          {/* <Button type="primary" size="large" href="https://github.com/davidjaimes">Github: @davidjaimes</Button> */}
          <br/><br/><br/>
          <p>© 2019 David Jaimes.</p>
          <p>Made with <a href="https://www.gatsbyjs.org">Gatsby</a>. Hosted with <a href="https://github.com">Github</a>.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage