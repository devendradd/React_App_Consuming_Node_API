import React from 'react';
import ResultItems from './result-items';

export default class Results extends React.Component{
    constructor(props) {
        super(props)
        // console.log('props from Result called again ', props.datatochild)
    }

    render(){
            //  console.log('inside render of result', this.props.datatochild);
 
            var style = {
                color: 'black',
                
                border: '1px black solid'
            };

            if(this.props.datatochild!=0){
                var resultItems = this.props.datatochild.results.map((result) => {

                    var item = {
                        id : result.trackId, 
                        name : result.trackName,
                        artwork : result.artworkUrl30,
                        collectionPrice : result.collectionPrice,
                        country : result.country,
                        currency : result.currency
                    };

                    return   <ResultItems key = {result.trackId} data = {item}/>
                    //return   <ResultItems key = {result.trackId} trackName = {result.trackName} trackId = {result.trackId}/>
                });
            }
        return(
            <div>
                <h1> this is results </h1>
                
                <table style={style}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Country</th>
                            <th>Currency</th>
                            <th>Art Work</th>                            
                        </tr>
                    </thead> 
                    <tbody>                                                               
                        {resultItems}
                    </tbody>                
                </table>
            </div>
        );

    }
}
