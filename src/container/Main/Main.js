import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import MainPageComponent from "../../components/MainPageComponent/MainPageComponent";
import Footer from "../../components/Footer/Footer";


class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header colorDanger1={'danger1'} />
                <MainPageComponent colorDanger2={'danger2'}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Main;