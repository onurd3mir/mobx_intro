import React, { Component } from 'react'
//import CounterStore from '../store/CounterStore'
import {observer, inject} from 'mobx-react'

class Counter extends Component {
    render() {

        const { Counter } = this.props.CounterStore;

        return (
            <div>
                <h1>{Counter}</h1>
                <button onClick={e => { this.props.CounterStore.increase() }}> Arttır </button>
                <button onClick={e => { this.props.CounterStore.decrease() }}> Azalt </button>
            </div>
        )
    }
}

export default inject("CounterStore")(observer(Counter));