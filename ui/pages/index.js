import React from 'react';
import withData from '../lib/apollo';

import List from './list.js';
import Article from './article.js';

import styles from './Index.module.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.wrapper}>

                <div className={styles.sidebar}>
                    <List></List>
                </div>
                
                <div className={styles.main}>
                    <Article></Article>
                </div>

                <div className={styles.footer}>
                    Content Wiser Project
                </div>

            </div>
        );
    }

}

export default withData(Index)