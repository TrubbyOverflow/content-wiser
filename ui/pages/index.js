import React, { useState } from 'react';
import withData from '../lib/apollo';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import List from './list.js';
import Article from './article.js';

import styles from './Index.module.css';

const Index = () => {
    const [showArticleId, setShowArticleId] = useState(0);

    const GET_ARTICLES = gql`
    {
        Article {
            id
            title
            url
        }
    }`

    const handleShowArticleChanged = function(showArticleId) {
        setShowArticleId(showArticleId);
    }

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

    const showingArticle = articles.find(a => a.id === showArticleId);

    return (
        <div className={styles.wrapper}>

            <div className={styles.sidebar}>
                <List articleList={articles} handleShowArticleChanged={handleShowArticleChanged}></List>
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

export default withData(Index)