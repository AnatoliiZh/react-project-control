import React from 'react'
import './SocialProfiles.scss'

type Props = {}

const SocialProfiles = (props: Props) => {
    return (
        <div className="social-profiles">
            <div className="social-profiles-heading">
                <div className="social-profiles-title">Social Profiles</div>
                <div className="social-profiles-line"></div>
            </div>
            <div className="social-profiles-box">
                <div className="box">
                    <a href="https://www.facebook.com/">
                        <img
                            src="/images/facebook.svg"
                            width="100%"
                            alt="facebook"
                        />
                    </a>
                </div>
                <div className="box">
                    <a href="https://www.instagram.com/">
                        <img
                            src="/images/instagram.svg"
                            width="100%"
                            alt="instagram"
                        />
                    </a>
                </div>
                <div className="box">
                    <a href="https://www.twitter.com/">
                        <img
                            src="/images/twitter.svg"
                            width="100%"
                            alt="twitter"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialProfiles
