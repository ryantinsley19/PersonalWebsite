import React from "react"
import { render } from "react-dom"
import { Image } from "react-bootstrap"
import Banner from "../../assets/images/testBanner.jpg"

class Header extends React.Component{

render(){
    return(
        <div className="header-logo-wrapper">
            <Image src={Banner} style={StyleSheet.AbsoluteFill}/>
        </div>
    );
}

}

export default Header