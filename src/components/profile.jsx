import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

const Profile = () => (
    <div>
        {/* THIS SHOWS ON THE SMALL ONLY */}
        <div className="row" className="d-sm-block d-md-none" style={{ marginTop: "40%", color: "white" }}>
            <div className="col-1"><img src="https://avatars3.githubusercontent.com/u/39469800?s=400&u=be7ccfa082d7bc7c924bb0cb18e6c3becf99c000&v=4" width="100px" style={{ borderRadius: "35px" }} alt="" /></div>
            <div className="col-lg-4 col-sm-7">
                <div style={{ paddingLeft: "4%", paddingTop: "2%", fontSize: "14px" }}>
                    <h3>Daniel Don</h3>
                    <p>JavaScript Developer, NodeJs, React, Gatsby. Teens' In Tech advocate. I LOVE FUN! ⚡⚡</p>
                    <span style={{ fontSize: "25px", marginLeft: "2%"}}>
                        <a href="https://twitter.com/spillcode"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a style={{ marginLeft: "3%"}} href="https://web.facebook.com/spillcode"><FontAwesomeIcon icon={faFacebook} /></a>
                    </span>
                </div>
            </div>
        </div>

        <div className="row" className="d-none d-lg-block" style={{ marginTop: "14%", color: "white" }}>
            <div className="col-1"><img src="https://avatars3.githubusercontent.com/u/39469800?s=400&u=be7ccfa082d7bc7c924bb0cb18e6c3becf99c000&v=4" width="100px" style={{ borderRadius: "35px" }} alt="" /></div>
            <div className="col-lg-4 col-sm-7">
                <div style={{ paddingLeft: "4%", paddingTop: "2%" }}>
                    <h3>Daniel Don</h3>
                    <p>JavaScript Developer, NodeJs, React, Gatsby. Teens' In Tech advocate. I LOVE FUN! ⚡⚡</p>
                    <span style={{ fontSize: "25px", marginLeft: "2%"}}>
                        <a href="https://twitter.com/spillcode"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a style={{ marginLeft: "3%"}} href="https://web.facebook.com/spillcode"><FontAwesomeIcon icon={faFacebook} /></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default Profile