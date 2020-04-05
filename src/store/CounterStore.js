import { decorate, computed, observable, action } from 'mobx';

class CounterStore {
  
  counter = 0;

  get Counter() {
    return this.counter;
  }

   increase() {
       this.counter = this.counter+1;
  }

   decrease() {
     this.counter = this.counter-1;
  }

}

CounterStore = decorate(CounterStore, {
  counter: observable,
  increase: action,
  decrease: action,
  Counter:computed
});

export default new CounterStore();
