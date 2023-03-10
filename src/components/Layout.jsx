import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer'
import Routes from '../routes/Routes'
import SideBar from './SideBar'
import { useEffect } from 'react'
import Header from './Header'
const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    {/* <Header {...props}/> */}
                    <SideBar/>
                    <Header/>
                    <div className="container">
                        
                        <div className="main">
                            <Routes/>
                            
                        </div>
                        
                    </div>
                    <Footer/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
