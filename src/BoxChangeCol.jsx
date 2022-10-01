import React, { Component } from 'react';
import './BoxChangeCol.css'
import BoxChange from './BoxChange';

class BoxChangeCol extends Component {
   static defaultProps={
    colorList:["#15db29","#df2ae9","#ec4b1a","#f09516"]
   }
    state = { page: "#1071d8"}
    handle=(NewLetter)=>{
    this.setState({page: NewLetter})
    }
  
    render() { 
       
        return (
            <div className='BoxChangeCol' style={{backgroundColor:this.state.page}}>
                <ul className="BoxChangeColList">
                    {this.props.colorList.map((b)=>{
      return <BoxChange color={b} onChange={this.handle}/>
                   })
                    }
                </ul>
            </div>
        );
    }
}
 
export default BoxChangeCol;