import React from 'react'
import codeImage from '../static/code.jpg'
function Home() {
    return (
        <div className="container d-flex " data-aos="fade-up" style={{ justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
          <div className="row justify-content-center">
            <div className="col-md-7 pt-5">
              <div className="content pb-4 text-center">Great Repositories</div>
              
              <div className="content gray text-center">Deserve Great Reach</div>
            </div>
            <br />
            <div className="col-md-5 pt-5">
              <center>
                <div className="card p-0" style={{ width: '30rem', border: 'none'}}>
                  <img src={codeImage} className="card-img-top" alt="..." />
                </div>
              </center>
            </div>
          </div>
        </div>
          
    )
}

export default Home
