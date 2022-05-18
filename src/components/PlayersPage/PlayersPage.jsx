import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';

export default class PlayersPage extends Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                <div id="players-page">
                    <Header titleName='Players'/>
                    <div className='container content'></div>
                    <Footer goToPage={this.props.goToPage} />
                </div>
            </>
        )
    }
}