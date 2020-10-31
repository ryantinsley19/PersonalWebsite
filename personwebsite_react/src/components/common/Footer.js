import React from "react"
import { render } from "react-dom"

class Footer extends React.Component{

render(){
    return(
        <footer className="page-footer text-center text-md-left pt-2">
            <div className="footer-copyright py-3 text-center">
                <div>Copyright 10/31/2020</div>
            </div>
        </footer>
    );
}
}

export default Footer