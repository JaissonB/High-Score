import { Component } from "react";

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    submitFunction = (event) => {
        event.preventDefault();
        this.props.searchFunction(this.state.searchTerm);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form id="search-form" onSubmit={this.submitFunction}>
                <div className="input-group mt-3 mb-5">
                    <input type="text" name="searchTerm" className="form-control" placeholder={this.props.placeholder} aria-label={this.props.label} onChange={this.handleChange} />
                    <button className="btn btn-outline-primary" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
            </form>
        )
    }
}