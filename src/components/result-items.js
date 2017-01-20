import React from 'react';

export default class ResultItems extends React.Component{

    constructor(props){
        super(props);      
    }

    render(){
        // console.log('inside render of result-items', this.props.data)
        console.log(this.props.data)

        var style = {
                color: 'white',
                fontSize: 200
            };

        return(
            <div>
                <li> {this.props.data.id} | {this.props.data.name} | {this.props.data.collectionPrice} | {this.props.data.country} | {this.props.data.currency} |<img src={this.props.data.artwork}/> </li>            
            </div>
        )
    }
}
