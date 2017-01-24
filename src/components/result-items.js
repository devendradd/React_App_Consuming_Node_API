import React from 'react';
import  {Button} from  'reactstrap';


export default class ResultItems extends React.Component{

    constructor(props){
        super(props);      
    }

    render(){
        // console.log('inside render of result-items', this.props.data)
        console.log(this.props.data)

    
        // creating each row for the data being send from parent component(data asent is 'data' from parent component)
        //data used in this props.data.id is coming from <ResultItems key = {result.trackId} data = {item}/> this line which is in the parent component
        return(
            <tr>
                <td>    
                    {this.props.data.id}
                </td>
                <td>    
                    {this.props.data.name}
                </td>
                <td>    
                    {this.props.data.kind}
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
                <td>    
                   <Button color="danger" size="sm">Like</Button>{' '}
                </td>
                
            </tr>
        )
    }
}
