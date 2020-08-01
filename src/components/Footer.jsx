import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
    const year = new Date().getFullYear()
    
    return (
        <div>
            <div className="empty-container"></div>
            <footer>
                <div className="social-media">
                    <div className="social-icon-container grow">
                        <FacebookIcon style={{ fontSize: 25 }} />
                    </div>
                    <div className="social-icon-container grow">
                        <InstagramIcon style={{ fontSize: 25 }} />
                    </div>
                    <div className="social-icon-container grow">
                        <LinkedInIcon style={{ fontSize: 25 }} />
                    </div>
                    <div className="social-icon-container grow">
                        <GitHubIcon style={{ fontSize: 25 }} />
                    </div>    
                </div>
                <p className="footer-copyright">CHRISTINE ROSA <span className="year">©{year}</span></p>
            </footer>
        </div>
    );
}

export default Footer;