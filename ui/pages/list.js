import React, {useState} from 'react';
import withData from '../lib/apollo';

import styles from './list.module.css';
import Search from './search.js';


function List(props) {
    const [textSearched, setTextSearched] = useState('');

    function onArticleClicked(articleId) {
        props.handleShowArticleChanged(articleId);
    }

    function handleSearchChange(textSearched) {
        setTextSearched(textSearched);
    }

    const articleNames = props.articleList
        .filter(a => a.name.includes(textSearched) || textSearched === '')
        .map(a => (
            <div key={a.id} className={styles.card} onClick={() => onArticleClicked(a.id)}>
                <p>{a.name}</p>
            </div>)
        );

    return (
        <div>
            
            <div className={styles.cardSize}>
                <Search handleSearchChange={handleSearchChange}></Search>
            </div>
            
            {articleNames}
        </div>
    );
    
}

export default withData(List)