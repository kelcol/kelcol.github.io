import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/headshot.png'
import karl from '../assets/images/karl.png'
import thisin from '../assets/images/thisin-that.png'
import blp from '../assets/images/blp.png'
import userscience from '../assets/images/userscience.png'
import metaps from '../assets/images/metadata-aps.png'
import rdfa from '../assets/images/rdfa-twine.png'
import low from '../assets/images/low.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Kelly Colht - Homepage";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section id="one" className="main style1">
                <div className="grid-wrapper">
                <div className="col-8">
                    <header className="major">
                    <h2>About me</h2>
                    </header>
                    <p>I am a service-oriented developer and librarian currently based in the Raleigh-Durham area. I have over a decade of experience applying my technical and analytical skills and proclivities towards organizing
                    information in both the public and private sectors.</p>
                    <p>While serving in the US Navy, I discovered a passion for supporting the efforts of professionals belonging to communities
                    of practice. Some of the domains I've worked in include naval aviation and electronic warfare, architecture
                    and design, consumer health research, and social media analytics. I'm currently at 
                    <a target="_blank" rel="noopener noreferrer" href="https://infosys.com/"> Infosys</a> working with financial services clients.</p>
                    <p>I seek opportunities presenting interesting challenges through which I can grow personally and professionally while contributing to broader efforts.</p>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={pic01} alt="headshot" />
                    </span>
                </div>
                <div className="col-12">
                    <p>Some of the topics I enjoy thinking about (in no particular order) are: olfactory interfaces, cake, knowledge organization
                    in sports, lighthouses, Java and Spring, metadata models, aural landscapes, linked data, wine, and other stuff.</p>
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
                    <li>Vue.js, Angular, Gatsby</li>
                    <li>Responsive Design</li>
                    <li>Usability Testing</li>
                    <li>Accessibility</li>
                    <li>Project Management</li>                    
                    </ul>

                    <h3>General Computing</h3>
                    <ul>
                    <li>LAMP administration</li>
                    <li>UNIX cli & shell scripting</li>
                    <li>Cloud Computing (Azure)</li>
                    <li>Linux / Windows</li>
                    <li>Text Analysis and Processing</li>
                    <li>Version control systems </li>
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
                    <li>Wordpress, Omeka</li>
                    <li>Various metadata standards</li>
                    <li>Semantic Web & Linked Data</li>
                    </ul>

                    <h3>Other Languages & Technologies</h3>
                    <ul>
                    <li>Java</li>
                    <li>Spring (Core, Boot, AOP, Security)</li>
                    <li>SQL & NoSQL databases</li>
                    <li>Python</li>
                    <li>Agile & DevOps methodologies</li>                    
                    </ul>
                </div>


                </div>
            </section>

            <section id="four" className="main style9 special">
                <div className="container">
                <header className="major">
                    <h2>Featured Project: Lighthouse Crawler</h2>
                </header>
                <div className="grid-wrapper">
                <div className="col-12">
                    <span className="image fit">
                        <img src={low} alt="lighthouse crawler screenshot" />
                    </span>
                    <p>Vue.js + Vuetify | WikiData, OpenWeather, Google Maps  </p>
                <ul className="actions uniform">
                    <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://kellycolht.net/lighthouses-of-washington/" className="button special">Demo</a>
                    </li>
                    <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kelcol/lighthouses-of-washington/" className="button">Source</a>
                    </li>
                </ul>
                </div>
                </div>
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
                    <img src={karl} alt="karl sayagain screenshot" />
                    </span>
                    <h3>Karl Sayagain</h3>
                    <p>JavaScript, HTML, CSS, Vue.js, Firebase</p>
                    <ul className="actions">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="http://kellycolht.net/karl-sayagain_vuejs-version/" className="button special">Demo</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kelcol/karl-sayagain_vuejs-version/" className="button">Source</a>
                    </li>
                    </ul>
                </div>
                <div className="col-4">
                    <span className="image fit">
                    <img src={thisin} alt="thisin' that screenshot" />
                    </span>
                    <h3>Twitter Share URL Generator</h3>
                    <p>JavaScript, HTML, CSS, MVC design pattern</p>
                    <ul className="actions">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="http://kellycolht.net/thisin-that/" className="button special">Demo</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kelcol/thisin-that" className="button">Source</a>
                    </li>
                    </ul>
                </div>

                <div className="col-4">
                    <span className="image fit">
                    <img src={blp} alt="Body Listening Project website screenshot" />
                    </span>
                    <h3>Body Listening Project Website</h3>
                    <p>Co-developed/designed, site admin</p>
                    <ul className="actions">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://web.archive.org/web/20180328081813/http://bodylisteningproject.org/" className="button">Website</a>
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
                        <a target="_blank" rel="noopener noreferrer" href="http://responserequest.com/colhk/" className="button">Website</a>
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
                        <a target="_blank" rel="noopener noreferrer" href="https://audiblediner.github.io/metadata-aps/" className="button">Website</a>
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
                        <a target="_blank" rel="noopener noreferrer" href="https://kellycolht.net/rdfa-twine/" className="button">Website</a>
                    </li>
                    </ul>
                </div>

                </div>
            </section>


            </Layout>
        );
    }
}

export default Homepage;