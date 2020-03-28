import React from 'react';
import withData from '../lib/apollo';

function Article(props) {
    const selected = props.selected;

    return (
        <div>
            <h1>{selected.name}</h1>
            <p>
            {selected.content}
            </p>
        </div>
    );
}

export default withData(Article)