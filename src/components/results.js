
import React from 'react';
import ResultItems from './result-items';
import {Table} from 'reactstrap';


export default class Results extends React.Component{
    constructor(props) {
        super(props)
        // console.log('props from Result called again ', props.datatochild)
    }

    render(){
            //  console.log('inside render of result', this.props.datatochild);
 
        
            if(this.props.datatochild!=0){

                //below resultItems will contain an array of <ResultItems key = {result.trackId} data = {item}/>  elemnts which are individually created using child component <ResultItems>
                var resultItems = this.props.datatochild.results.map((result) => {
                    //adding all elements to an object items so that we can access them in the child element using data directly which is written in <ResultItems key = {result.trackId} data = {item}/>
                    var item = {
                        id : result.trackId, 
                        name : result.trackName,
                        artwork : result.artworkUrl30,
                        collectionPrice : result.collectionPrice,
                        country : result.country,
                        currency : result.currency,
                        kind : result.kind
                    };
                    
                    //child element <ResultItems> 
                    return   <ResultItems key = {result.trackId} data = {item}/> //return of call back of map() function                    
                });
            }
        return(
            //rendering the child component using {resultItems} which has been populated using map() function in above code.
            //which contains the individual element of <ResultItems key = {result.trackId} data = {item}/>
            
            <div>
                <h1>  </h1>
                
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>kind</th>
                            <th>Price</th>
                            <th>Country</th>
                            <th>Currency</th>
                            <th>Art Work</th>   
                            <th>Add to Cart</th>                         
                        </tr>
                    </thead> 
                    <tbody>                                                               
                        {resultItems}
                    </tbody>                
                </Table>                 
            </div>
        );

    }
}
