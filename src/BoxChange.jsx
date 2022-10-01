import React, { Component } from 'react'
import './BoxChange.css'
class BoxChange extends Component {
    state = {page: this.props.color}
    
 
    handleClick=()=>{
     this.props.onChange(this.state.page)
    }
    render() { 
        return (
            <li className='BoxChange' style={{backgroundColor: this.props.color}} onClick={this.handleClick}> Click</li>
        );
    }
}
 
export default BoxChange;