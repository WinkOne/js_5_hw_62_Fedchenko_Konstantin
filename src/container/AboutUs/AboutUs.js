import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import AboutUsPageComponents from "../../components/AboutUsPageComponents/AboutUsPageComponents";
import Footer from "../../components/Footer/Footer";

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <Header
                    colorDanger2={'danger2'}
                />
                <AboutUsPageComponents/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutUs;