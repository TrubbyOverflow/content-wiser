import React from 'react';
import withData from '../lib/apollo';

function Search(props){

    const onSearchChange = function(e) {
        props.handleSearchChange(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    <input type="text" style={{ width: '70%'}}
                        onChange={ (e) => onSearchChange(e) }>
                    </input>
                    <button type="submit" style={{ width: '30%'}}>Pesquisar</button>
                </div>
            </form>
        </div>
    );
}

export default withData(Search)