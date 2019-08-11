import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Kelly Colht</strong>, a librarian<br />
                    and developer based in the Raleigh-Durham area.</h1>                    
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
