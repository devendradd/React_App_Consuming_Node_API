import React from 'react';

export default class ResultItems extends React.Component{

    constructor(props){
        super(props);      
    }

    render(){
        // console.log('inside render of result-items', this.props.data)
        return(
            <div>
                <li> {this.props.trackName} </li>
            </div>
        )
    }
}
