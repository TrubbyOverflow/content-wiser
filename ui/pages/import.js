import React, { useState } from 'react'
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import withData from '../lib/apollo'

import styles from './import.module.css'


const CREATE_RSS = gql`
  mutation CreateRSS($page: String!) {
    CreateRss(page: $page){
        page
    }
  }
`

const Import = () => {
    const [url, setURL] = useState('')

    const [createRSS, { error, data }] = useMutation(CREATE_RSS, {
      variables: { page: url }
    });

    const handleSubmit = (e) => {
      e.preventDefault()

      console.log(url)
      createRSS()
    }

    return (
      <div id={styles.import_page}>
        <form className={styles.feed_form} onSubmit={handleSubmit}>
          <div className={styles.text}>Informe abaixo a URL do feed que você quer adicionar à sua conta</div>
          <input type="text" className={styles.feed_input} onChange={e => setURL(e.target.value)} />
          <button className={styles.feed_button} type="submit">Salvar</button>
        </form>
      </div>
    )
}

export default withData(Import)
