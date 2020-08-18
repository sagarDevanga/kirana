import React from 'react'
import FlatList from 'flatlist-react';
import Item from './item'

const itemList = (props) => {

    const abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <FlatList
            list={abc}
            renderItem={(item,index) => <Item key={index}/>}
            renderWhenEmpty={() => <div>List is empty!</div>}
            displayGrid/>
    )


}

export default itemList