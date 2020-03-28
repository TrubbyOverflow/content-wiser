import React from 'react';
import withData from '../lib/apollo';

import List from './list.js';
import Article from './article.js';

import styles from './Index.module.css';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showArticleId: 0
        }

        this.handleShowArticleChanged = this.handleShowArticleChanged.bind(this);
    }

    handleShowArticleChanged(showArticleId) {
        this.setState({ showArticleId: showArticleId });
    }

    render() {
        const articles = [
            {
                id: 0,
                name: 'Artigo 1',
                content: 'Lorem Ipsum é simplesmente uma simulação d'
            }, {
                id: 1,
                name: 'Lorem',
                content: 'Lorem Ipsum'
            }, {
                id: 2,
                name: 'Novo artigo',
                content: 'novo artigo'
            }
        ];

        const showArticleId = this.state.showArticleId;
        const showingArticle = articles.find(a => a.id === showArticleId);

        return (
            <div className={styles.wrapper}>

                <div className={styles.sidebar}>
                    <List articleList={articles} handleShowArticleChanged={this.handleShowArticleChanged}></List>
                </div>
                
                <div className={styles.main}>
                    <Article selected={showingArticle}></Article>
                </div>

                <div className={styles.footer}>
                    Content Wiser Project
                </div>

            </div>
        );
    }

}

export default withData(Index)