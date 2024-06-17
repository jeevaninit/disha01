const count=0;
const myname='Jeevan Konduru';
const mydata={
    address:'Ameerpet',
    city:'Hyderabad'
}

const Reducer=(state={count,myname,mydata},action)=>{

    const { type, payload } = action || {};

    switch(type){
        case "Add":
            return{...state,count:state.count+1};
        case "Delete":
            return{...state,count:state.count-1};
        default:
            return state;
    }
       



}
export default Reducer;