/* 
Life Cycle Methods 
*/
import React, { Component } from 'react';



class LifeCycleMethods extends Component {

    constructor(){
        super()

        this.state={
            count:0,
            show:true
        }
    }

    deletecontent=()=>{
        this.setState({show:false})
    }

    componentDidMount(){
        console.log("am from component Did Mount...");
    }

    componentDidUpdate(){
        console.log("am from component did Update message...");
    }

    render() {

        let myshowcontent;
        if(this.state.show){
            myshowcontent=<Showinfo />
        }

        return (
            <div>
                {myshowcontent}

            <button onClick={this.deletecontent}>Delete Content</button>

                <p>update Count:{this.state.count}</p>
                <button onClick={()=>this.setState({
                    count:this.state.count+1
                })}>Increase</button>
            </div>
        );
    }
}


class Showinfo extends React.Component{

    componentWillUnmount(){
        console.log("Hello am from content WillunMount...")
    }

    render(){
        return(
            <>
            <h1>Welcome to Delete Content here...</h1>
            </>
        )
    }
}

export default LifeCycleMethods;