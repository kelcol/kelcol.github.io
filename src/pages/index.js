import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import karls from '../assets/images/karls.gif'
import thisin from '../assets/images/thisy.png'
import blp from '../assets/images/blp.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About me</h2>
                            </header>
                            <p>I am a service-oriented librarian and web technologist based in the Seattle area but willing to relocate for the right role. I have over a decade of experience applying my technical and analytical skills and proclivities towards organizing information in both the public and private sectors.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                        <div className="col-12">
                        <p>While serving in the US Navy, I discovered a passion for supporting the efforts of professionals belonging to communities of practice. Some of the disciplines I've worked within include naval aviation and electronic warfare, architecture and design, consumer health research, and social media analytics. In my current role at ProQuest I serve professionals of my own ilk, librarians and other electronic resource managers.</p>
                        <p>I seek opportunities presenting interesting challenges that will allow me to continue to grow and make an impact on the lives of others. I am open to working for employers small to large, public or private.</p>
                        <p>Some of the topics I enjoy thinking about (in no particular order) are: olfactory interfaces, cake, knowledge organization in sports, lighthouses, JavaScript, metadata models, aural landscapes, linked data, wine, and other stuff.</p>
                        </div>

                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>What I can do</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Some projects I've worked on</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Lighthouses of Washington</h3>
                            <p>JavaScript, HTML, CSS, Vue.js, SPARQL</p>                            
                            <ul className="actions">
                                <li><a href="#" className="button">Demo</a></li>
                                <li><a href="#" className="button">Source</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Karl Sayagain</h3>
                            <p>JavaScript, HTML, CSS, Vue.js, Firebase, Google Analytics</p>      
                            <ul className="actions">
                                <li><a href="#" className="button">Demo</a></li>                                 <li><a href="#" className="button">Source</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={thisin} alt="" /></span>
                            <h3>Twitter Share URL Generator</h3>
                            <p>JavaScript, HTML, CSS, MVC design pattern</p>      
                            <ul className="actions">
                                <li><a href="#" className="button">Demo</a></li>                                 <li><a href="#" className="button">Source</a></li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={blp} alt="" /></span>
                            <h3>Body Listening Project Website</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Demo</a></li>                                 <li><a href="#" className="button">Source</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Branding and Logo Samples</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Demo</a></li>                                 <li><a href="#" className="button">Source</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Metadata Application Profiles</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Demo</a></li>                                 <li><a href="#" className="button">Source</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;