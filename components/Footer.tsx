import React from 'react'

function Footer({data}) {
  return (
    <footer>
    <div className="container">
      <div className="grp">
        <div className="social">
          <a href="#">
            <i className="ph-light ph-facebook-logo" />
          </a>
          <a href="#">
            <i className="ph-light ph-instagram-logo" />
          </a>
          <a href="#">
            <i className="ph-light ph-linkedin-logo" />
          </a>
        </div>
        <p className="fix">{data.footer}</p>
      </div>
      <a className="mail" href={`mailto:${data.adminEmail}`}>
        {data.adminEmail}
      </a>
    </div>
  </footer>
  )
}

export default Footer