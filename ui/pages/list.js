import React from 'react';
import withData from '../lib/apollo';

import styles from './list.module.css';
import Search from './search.js';


class List extends React.Component {


    constructor(props) {
        super(props);

        this.onArticleClicked = this.onArticleClicked.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);

        this.state = {
            textSearched: ''
        }
    }

    onArticleClicked(articleId) {
        this.props.handleShowArticleChanged(articleId)
    }

    handleSearchChange(textSearched) {
        this.setState({textSearched: textSearched});
    }

    render() {
        const articleList = this.props.articleList;
        const textSearched = this.state.textSearched;

        const articleNames = articleList
            .filter(a => a.name.includes(textSearched) || textSearched === '')
            .map(a => (
                <div key={a.id} className={styles.card} onClick={() => this.onArticleClicked(a.id)}>
                    <p>{a.name}</p>
                </div>)
            );

        return (
            <div>
                
                <div className={styles.cardSize}>
                    <Search handleSearchChange={this.handleSearchChange}></Search>
                </div>
                
                {articleNames}
            </div>
        );
    }
}

export default withData(List)