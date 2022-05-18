import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';

export default class GamesPage extends Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                <div id="games-page">
                    <Header titleName='Games'/>
                    <div className='container content'></div>
                    <Footer goToPage={this.props.goToPage} />
                </div>
            </>
        )
    }
}