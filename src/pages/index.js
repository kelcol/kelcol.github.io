import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/headshot.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import karl from '../assets/images/karl.png'
import thisin from '../assets/images/thisin-that.png'
import blp from '../assets/images/blp.png'
import userscience from '../assets/images/userscience.png'
import metaps from '../assets/images/metadata-aps.png'
import rdfa from '../assets/images/rdfa-twine.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
        <div>
            <Helmet title={siteTitle} />

            <section id="one" className="main style1">
                <div className="grid-wrapper">
                <div className="col-8">
                    <header className="major">
                    <h2>About me</h2>
                    </header>
                    <p>I am a service-oriented librarian and web developer based in the Seattle area but willing to relocate for the right
                    role. I have over a decade of experience applying my technical and analytical skills and proclivities towards organizing
                    information in both the public and private sectors.</p>
                    <p>While serving in the US Navy, I discovered a passion for supporting the efforts of professionals belonging to communities
                    of practice. Some of the disciplines I've worked within include naval aviation and electronic warfare, architecture
                    and design, consumer health research, and social media analytics. In my current role at
                    <a href="https://www.exlibrisgroup.com/">Ex Libris</a> (a
                    <a href="https://proquest.com"> ProQuest</a> company) I serve professionals of my own ilk, librarians and other electronic resource managers.</p>
                    <p>I seek opportunities presenting interesting challenges that will allow me to continue to grow and make an impact
                    on the lives of others. I am open to working for employers small to large, public or private.</p>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={pic01} alt="" />
                    </span>
                </div>
                <div className="col-12">
                    <p>Some of the topics I enjoy thinking about (in no particular order) are: olfactory interfaces, cake, knowledge organization
                    in sports, lighthouses, JavaScript, metadata models, aural landscapes, linked data, wine, and other stuff.</p>
                </div>

                </div>
            </section>

            <section id="two" className="main style2">
                <div className="grid-wrapper">
                <header className="major col-12">
                    <h2>Skills & Expertise</h2>
                </header>
                <div className="col-3">
                    <ul className="major-icons">
                    <li>
                        <span className="icon style2 major fa-code"></span>
                    </li>
                    </ul>
                </div>
                <div className="col-3">

                    <h3>Web Development</h3>
                    <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Vue.js</li>
                    <li>Node.js</li>
                    <li>Project management methodologies such as Agile</li>
                    <li>Solid understanding of core web technologies</li>
                    </ul>

                    <h3>General Computing</h3>
                    <ul>
                    <li>LAMP administration</li>
                    <li>Linux command-line</li>
                    <li>Virtualization</li>
                    <li>Linux / Windows</li>
                    <li>Version control systems (Git, GitHub, BitBucket)</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="major-icons">
                    <li>
                        <span className="icon style1 major fa-book"></span>
                    </li>
                    </ul>
                </div>
                <div className="col-3">

                    <h3>Resource Management</h3>
                    <ul>
                    <li>Library information systems</li>
                    <li>Databases and query languages</li>
                    <li>Wordpress, Omeka</li>
                    <li>Familiarity with image, audio, video, and text file formats</li>
                    </ul>

                    <h3>Metadata Design, Development, and Use</h3>
                    <ul>
                    <li>Bibliographic Metadata</li>
                    <li>Administrative, technical, and descriptive metadata standards</li>
                    <li>Semantic Web, Linked Data, RDF, OWL, Schema.org, SKOS</li>
                    </ul>
                </div>


                </div>
            </section>


            <section id="four" className="main style9 special">
                <div className="container">
                <header className="major">
                    <h2>Featured Project: Lighthouses of Washington</h2>
                </header>
                <p>Coming Soon!</p>
                <ul className="actions uniform">
                    <li>
                    <a href="#" className="button special">Demo</a>
                    </li>
                    <li>
                    <a href="#" className="button">Source</a>
                    </li>
                </ul>
                </div>
            </section>

            <section id="four" className="main style1 special">
                <div className="grid-wrapper">
                <div className="col-12">
                    <header className="major">
                    <h2>Other projects</h2>
                    </header>
                    <p>Here are more examples of my work.</p>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={karl} alt="" />
                    </span>
                    <h3>Karl Sayagain</h3>
                    <p>JavaScript, HTML, CSS, Vue.js, Firebase</p>
                    <ul className="actions">
                    <li>
                        <a href="http://kellycolht.net/karl-sayagain_vuejs-version/" className="button special">Demo</a>
                    </li>
                    <li>
                        <a href="https://github.com/kelcol/karl-sayagain_vuejs-version/" className="button">Source</a>
                    </li>
                    </ul>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={thisin} alt="" />
                    </span>
                    <h3>Twitter Share URL Generator</h3>
                    <p>JavaScript, HTML, CSS, MVC design pattern</p>
                    <ul className="actions">
                    <li>
                        <a href="http://kellycolht.net/thisin-that/" className="button special">Demo</a>
                    </li>
                    <li>
                        <a href="https://github.com/kelcol/thisin-that" className="button">Source</a>
                    </li>
                    </ul>
                </div>

                <div className="col-4">
                    <span className="image fit">
                    <img src={blp} alt="" />
                    </span>
                    <h3>Body Listening Project Website</h3>
                    <p>Co-developed/designed, site admin</p>
                    <ul className="actions">
                    <li>
                        <a href="https://web.archive.org/web/20180328081813/http://bodylisteningproject.org/" className="button">Website</a>
                    </li>
                    </ul>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={userscience} alt="" />
                    </span>
                    <h3>User Science Journal</h3>
                    <p>Thoughts on user science</p>
                    <ul className="actions">
                    <li>
                        <a href="http://responserequest.com/colhk/" className="button">Website</a>
                    </li>
                    </ul>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={metaps} alt="" />
                    </span>
                    <h3>Metadata Application Profiles</h3>
                    <p>XSD, RDF-XML, SKOS, Dublin Core, etc.</p>
                    <ul className="actions">
                    <li>
                        <a href="https://audiblediner.github.io/metadata-aps/" className="button">Website</a>
                    </li>
                    </ul>
                </div>

                <div className="col-4">
                    <span className="image fit">
                    <img src={rdfa} alt="" />
                    </span>
                    <h3>Introduction to RDFa</h3>
                    <p>A short overview of RDFa built using Twine</p>
                    <ul className="actions">
                    <li>
                        <a href="https://kellycolht.net/rdfa-twine/" className="button">Website</a>
                    </li>
                    </ul>
                </div>

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