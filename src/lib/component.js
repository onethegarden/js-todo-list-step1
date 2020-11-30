import Store from '../store/store.js';

const Component = class {
    constructor(props = {}){

        this.render = this.render || function(){};
        //props.store가 Store인지 확인
        if(props.store instanceof Store){
            //stateChnage가 발생할때마다 this.render 메소드 실행
            props.store.events.subscribe('stateChange', () => this.render());
        }
        if(props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}
export default Component;
