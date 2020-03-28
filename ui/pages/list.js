import React from 'react';
import withData from '../lib/apollo';

import styles from './list.module.css';
import Search from './search.js';


class List extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const articleList = this.props.articleList;

        const articleNames = articleList.map(a => (
            <div className={styles.card}>
                <p>{a.name}</p>
            </div>
        ));

        return (
            <div>
                
                <div className={styles.cardSize}>
                    <Search></Search>
                </div>
                
                {articleNames}
            </div>
        );
    }
}

export default withData(List)