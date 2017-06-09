import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}> 首页 </a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}> 关于我们 </a>
        </Link>
    </div>
)

export default Header
