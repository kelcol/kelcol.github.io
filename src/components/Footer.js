import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="http://linkedin.com/in/kellycolht/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    
                    <li><a href="http://github.com/kelcol" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    
                    <li><a href="https://stackoverflow.com/users/8072136/kelly" className="icon alt fa-stack-overflow"><span className="label">Stack Overflow</span></a></li>
                    
                    <li><a href="mailto:kelly@justemail.net?subject=Hello!" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Kelly Colht 2018</li>
                </ul>
            </section>
        )
    }
}

export default Footer
