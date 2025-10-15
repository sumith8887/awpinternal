import React from "react";

class DisplayValuesClass extends React.Component{
    render(){
        return(
        <div>
            <h1>Name:{this.props.name}</h1>
            <h1>Age:{this.props.age}</h1>
            <h1>Roll No:{this.props.roll}</h1>
        </div>
        )
    }
}
export default DisplayValuesClass;

