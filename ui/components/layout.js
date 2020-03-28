import React from 'react'

import styles from './layout.module.css'

class Layout extends React.Component {
    render() {
        return (
            // TODO: place header elements here
            <div id={styles.layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
            // TODO: place footer elements here
        )
    }
}

export default Layout
