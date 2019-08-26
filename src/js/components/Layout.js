import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        const title = "Welcome Taka!!";
       return (
            <div>
                <Header title={title} />
                <Header title={"Thank you!"} />
                <Footer />
            </div>
        );
    }
}