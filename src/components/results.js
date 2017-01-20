import React from 'react';
import ResultItems from './result-items';

export default class Results extends React.Component{
    constructor(props) {
        super(props)
        // console.log('props from Result called again ', props.datatochild)
    }

    render(){
            //  console.log('inside render of result', this.props.datatochild);
            if(this.props.datatochild!=0){
                var resultItems = this.props.datatochild.results.map((result) => {
                    return   <ResultItems key = {result.trackId} trackName = {result.trackName} data = {this.props.datatochild}/> 
                });
            }
        return(
            <div>
                <h1> this is results </h1>
                <ul>
                    {resultItems}
                </ul>             
            </div>
        );

    }
}