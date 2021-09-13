function Footer() {
  return (
    <footer className="page-footer teal lighten-2">
      <div className="footer-copyright">
        <div className="container">
          {new Date().getFullYear()} © Copyright Text
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/AlekseyUA92/showcase-on-react"
            target='_blank'
            rel="noreferrer" >
            Repository
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
