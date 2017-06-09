
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import Layout from '../components/Layout.js'

class getData extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()

    return { data: json }
  }

  transfer(){
    return JSON.stringify(this.props.data)
  }
  render () {
    return (
      <Layout>
        <div>
          <p>ssr-next 仓库目前 star 数量： {this.transfer()} ⭐️</p>
          <Link prefetch href='/about'><a>前往围观</a></Link>
        </div>
      </Layout>
    )
  }
}

export default getData
