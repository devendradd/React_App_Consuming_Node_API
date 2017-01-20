import React from 'react';

export default class ResultItems extends React.Component{

    constructor(props){
        super(props);      
    }

    render(){
        // console.log('inside render of result-items', this.props.data)
        console.log(this.props.data)

    

        return(
            <tr>
                <td>    
                    {this.props.data.id}
                </td>
                <td>    
                    {this.props.data.name}
                </td>
                <td>    
                    {this.props.data.collectionPrice}
                </td>
                <td>    
                    {this.props.data.country}
                </td>
                <td>    
                    {this.props.data.currency}
                </td>
                <td>    
                    <img src={this.props.data.artwork} />   
                </td>
            </tr>
        )
    }
}
