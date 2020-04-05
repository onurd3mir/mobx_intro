import React, { Component } from 'react'

import { observable, computed, decorate, action} from 'mobx'
import {observer} from 'mobx-react'

class Store {

    firstname = "Onur"; 
    lastname = "Demir";
    yas = 24;

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }

    get full_age(){
        return this.yas;
    }

    incremant(){
        this.yas = this.yas + 1;
    }

    dicrement(){
        this.yas = this.yas - 1;
    }

}

decorate(Store,{
    firstname:observable,
    lastname:observable,
    yas:observable,
    incremant:action,
    dicrement:action,
    fullname:computed,
    full_age:computed
})

const AppStore = new Store();

class RandomUser extends Component {

    render() {

        return (
            <div>
                <br />
                <h4>{AppStore.fullname} {AppStore.full_age}</h4>
                
                <br />

                <button onClick={AppStore.incremant()}>1 Arttır</button>
                <button onClick={AppStore.dicrement()}>1 Azalt</button>

            </div>
        )
    }
}

export default observer(RandomUser)


