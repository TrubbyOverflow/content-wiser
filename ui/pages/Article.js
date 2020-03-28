import React from 'react';
import withData from '../lib/apollo';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {

        return (
            <div className = "">
                <h1>Lorem Ipsum</h1>
                <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                </p>
            </div>
        );
    }
}

export default withData(Article)