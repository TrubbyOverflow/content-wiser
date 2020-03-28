import React from 'react';
import withData from '../lib/apollo';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange(e, type) {
        this.setState({ [type]: e.target.value });
    }

    render() {

        return (
            <div className = "">
                <form onSubmit={this.handleSearch}>
                    <div>
                        <input type="text"
                            onChange={ (e) => this.handleChange(e, 'search') }>
                        </input>
                        <button type="submit">Pesquisar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withData(Search)