import React from 'react'
import withData from '../lib/apollo'

import styles from './import.module.css'

class Import extends React.Component {
    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.state = {
          url: ''
      }
    }

    handleSubmit(e) {
      e.preventDefault();

      // TODO: send data to the API
      console.log(this.state.url)
    }

    render() {
      return (
        <div id={styles.import_page}>
          <form className={styles.feed_form} onSubmit={this.handleSubmit}>
            <div className={styles.text}>Informe abaixo a URL do feed que você quer adicionar à sua conta</div>
            <input type="text" className={styles.feed_input} onChange={e => this.setState({url: e.target.value})} />
            <button className={styles.feed_button} type="submit">Salvar</button>
          </form>
        </div>
      )
    }
}

export default withData(Import)
