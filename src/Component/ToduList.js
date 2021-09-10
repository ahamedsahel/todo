/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import "./ToduList.css"
export default class TodoList extends Component {
    
    state ={
        input: "",
        items: []
    };


    handleChange = event => {
        this.setState({
            input: event.target.value
        });
    };
    storeItems = () => {
        event.preventDefault();
         const { input } = this.state;
       

        this.setState({
        
            items : [...this.state.items, input],
            input : ""
        });

    };
    deletItem = key => {
      
        this.setState({
            items: this.state.items.filter((data,index) => index!== key)

        });

    };
    editItems = key => {
        const edit = prompt('Please enter your items')
        this.setState({
            items: [...this.state.items.filter((data,index) => index!== key), edit]
        })

    }
        
    
    render() {
        const {input,items} = this.state 
        
        return (
            <div className="container">
               
                    <div className='input-box'>
                   <form action="" onSubmit={this.storeItems}>  
                    <h1>TODO LIST</h1>
                        <input 
                         placeholder="Enter items" 
                         value={input}
                         onChange={this.handleChange}
                         type="text" />
                        <button>Add List</button>
                    </form>    
                    </div>
                    <div className="item-box">
                        <ul>
                            {items.map((data,index) => (
                                <li key={index} >{data}
                                
                                 <i className="fa fa-trash-o" onClick = {() => this.deletItem(index)} ></i>
                                 <i className="fa fa-edit" onClick = {() => this.editItems(index)}></i>
                                 </li>
                                
                            ))} 
                            
                        </ul>
                        
                    </div>
                
            </div>
        )
    }
}
