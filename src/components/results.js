
import React from 'react';
import ResultItems from './result-items';
import {Table, CardDeck} from 'reactstrap';


export default class Results extends React.Component{
    constructor(props) {
        super(props)
        // console.log('props from Result called again ', props.datatochild)
    }

    render(){
            //  console.log('inside render of result', this.props.datatochild);

            if(this.props.datatochild != 0){
                //below resultItems will contain an array of <ResultItems key = {result.trackId} data = {item}/>  elemnts which are individually created using child component <ResultItems>
                var resultItems = this.props.datatochild.map((result) => {
                    //adding all elements to an object items so that we can access them in the child element using data directly which is written in <ResultItems key = {result.trackId} data = {item}/>
                    var item = {
                        id : result.ituneElement.trackId, 
                        name : result.ituneElement.trackName,
                        artwork : result.ituneElement.artworkUrl30,
                        collectionPrice : result.ituneElement.collectionPrice,
                        country : result.ituneElement.country,
                        currency : result.ituneElement.currency,
                        kind : result.ituneElement.kind,
                        likes : result.ituneElementLikes
                    }             
                    //child element <ResultItems> 
                    return   <ResultItems key = {result.trackId} data = {item}/> //return of call back of map() function                    
                })
            }
        return(
            //rendering the child component using {resultItems} which has been populated using map() function in above code.
            //which contains the individual element of <ResultItems key = {result.trackId} data = {item}/>
            <CardDeck>                   
                {resultItems}
            </CardDeck>             
           
        );

    }
}
