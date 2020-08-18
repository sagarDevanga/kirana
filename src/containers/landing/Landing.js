import React, { Component } from 'react'
import Header from '../../components/header'
import ItemList from '../../components/itemlist'

class Landing extends Component {

    render() {
        return (
            <div>
                <Header/>
                <ItemList/>
            </div>
        )
    }
}

export default Landing
