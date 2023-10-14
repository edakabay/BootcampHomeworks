import React from 'react'
import Project from './Project'
import Menu from './Menu'
import Contact from './Contact'
import About from './About'

function PageContent() {
    return (<>
       <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>

            <Project/>
            <About/>
            <Menu/>
            <Contact/>
        </div>
    </>
    )
}

export default PageContent