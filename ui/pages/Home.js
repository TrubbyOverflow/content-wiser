import React from 'react';
import withData from '../lib/apollo';

import Search from './search.js';
import List from './list.js';
import Article from './article.js';

import styles from './Home.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        return (
            <div className={styles.wrapper}>
                
                <div className={styles.box.header}>
                    <Search></Search>
                </div>

                <div className={styles.box.sidebar}>
                    <List></List>
                </div>
                
                <div className={styles.box.content}>
                    <Article></Article>
                </div>

                <div className={styles.box.footer}>
                    Content Wiser Project
                </div>

            </div>
        );
    }

}

export default withData(Home)