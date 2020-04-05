import { decorate, computed, observable, action,runInAction } from 'mobx';

class UserStore {
  
  users = [];

  get Users() {
    return this.users;
  }

  // commit deneme
  async getUsers() {
    
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        //this.users=data;
        //console.log(data);
        runInAction(() => {
            this.users=data;
        })

    } catch (error) {
        console.log(error);
    }

  }

}

UserStore = decorate(UserStore, {
  users: observable,
  getUsers: action,
  Users:computed
});

export default new UserStore();
