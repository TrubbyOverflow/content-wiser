import React from 'react';
import withData from '../lib/apollo';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        const selected = this.props.selected;

        return (
            <div>
                <h1>{selected.name}</h1>
                <p>
                {selected.content}
                </p>
            </div>
        );
    }
}

export default withData(Article)