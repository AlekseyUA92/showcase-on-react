function Header() {
  return (
    <nav className="amber darken-2">
      <div className="nav-wrapper ">
        <a href="/" className="brand-logo">
          React Showcase
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://alekseyua92.github.io/showcase-on-react/" target='_blank' rel="noreferrer" >Repository</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
