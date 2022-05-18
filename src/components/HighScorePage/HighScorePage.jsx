import React, { Component } from "react";
import Header from '../Header';
import Footer from '../Footer';

export default class HighScorePage extends Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                <div id="high-score-page">
                    <Header titleName='High Score'/>
                    <div className='container content'></div>
                    <Footer goToPage={this.props.goToPage} />
                </div>
            </>
        )
    }
}