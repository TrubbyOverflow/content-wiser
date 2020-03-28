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

        const articles = [
            {
                name: 'Artigo 1',
                content: 'Lorem Ipsum é simplesmente uma simulação d'
            }, {
                name: 'Lorem',
                content: 'Lorem Ipsum'
            }, {
                name: 'Novo artigo',
                content: 'novo artigo'
            }
        ];

        return (
            <div className={styles.wrapper}>

                <div className={styles.sidebar}>
                    <List articleList={articles}></List>
                </div>
                
                <div className={styles.main}>
                    <Article selected={articles[0]}></Article>
                </div>

                <div className={styles.footer}>
                    Content Wiser Project
                </div>

            </div>
        );
    }

}

export default withData(Index)