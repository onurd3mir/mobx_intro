import React, { Component } from 'react'
//import UserStore from '../store/UserStore'
import {observer, inject} from 'mobx-react'

class User extends Component {

    async componentDidMount() {
        this.props.UserStore.getUsers();
    }
    
    render() {
        const { Users } = this.props.UserStore;
        return (
            <div>
                {
                    Users.map(u=><p key={u.id}>{u.name}</p>)
                }       
            </div>
        )
    }
}

export default inject("UserStore")(observer(User));
