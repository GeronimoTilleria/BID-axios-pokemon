import React from 'react'

import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext';
import OrderButton from './OrderButton';

const PokemonList = () => {

    const { array } = useContext(PokeContext);
    
    return (
        <div>
            <OrderButton />
            {
                array.show ? 
                    <ul>
                        {
                            array.data.map((item, index) => <li key={index}>{item.name}</li>) 
                        }
                    </ul> :
                    ''
            }     
        </div>
    )
}

export default PokemonList
