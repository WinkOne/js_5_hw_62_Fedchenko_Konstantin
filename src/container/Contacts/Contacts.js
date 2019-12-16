import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactPageComponents from "../../components/ContactPageComponents/ContactPageComponents";

class Contacts extends Component {
    render() {
        return (
            <Fragment>
                <Header colorDanger3={'danger3'}/>
                <ContactPageComponents/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contacts;