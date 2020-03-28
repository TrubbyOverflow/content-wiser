import React from 'react';
import withData from '../lib/apollo';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchChange(e) {
        this.props.handleSearchChange(e.target.value);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <div>
                        <input type="text" style={{ width: '70%'}}
                            onChange={ (e) => this.onSearchChange(e) }>
                        </input>
                        <button type="submit" style={{ width: '30%'}}>Pesquisar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withData(Search)