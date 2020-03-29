import React from 'react';
import withData from '../lib/apollo';

function Article(props) {
    const selected = props.selected;

    return (
        <div>
            <h1>{selected.title}</h1>
            <p>
            {selected.url}
            </p>
        </div>
    );
}

export default withData(Article)