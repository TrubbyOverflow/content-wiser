import React, { useState } from 'react';
import withData from '../lib/apollo';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import List from './list.js';
import Article from './article.js';

import styles from './Index.module.css';

const Index = () => {
    let [showArticleId, setShowArticleId] = useState(0);

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

    const { loading, error, data, fetchMore } = useQuery(GET_ARTICLES, {
        notifyOnNetworkStatusChange: true
    });

    if(loading || error) {
        return <div></div>
    }

    if (showArticleId === 0) {
        showArticleId = data.Article[0].id;
    }

    const showingArticle = data.Article.find(a => a.id === showArticleId);

    return (
        <div className={styles.wrapper}>

            <div className={styles.sidebar}>
                <List articleList={data.Article} handleShowArticleChanged={handleShowArticleChanged}></List>
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