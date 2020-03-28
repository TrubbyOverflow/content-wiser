import React from 'react';
import withData from '../lib/apollo';

import styles from './list.module.css';
import Search from './search.js';


class List extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                
                <div className={styles.cardSize}>
                    <Search></Search>
                </div>
                
                <div className={styles.card}>
                    <p>Artigo 1</p>
                </div>
                <div className={styles.card}>
                    <p>Artigo 2</p>
                </div>
                <div className={styles.card}>
                    <p>Artigo 3</p>
                </div>
            </div>
        );
    }
}

export default withData(List)