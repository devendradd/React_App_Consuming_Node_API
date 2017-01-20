import React from 'react';

export default class ResultItems extends React.Component{

    constructor(props){
        super(props);
        // this.renderArray = this.renderArray.bind(this)
        // this.state = {result : []}
    }

    // renderArray() {
    //     this.props.data.results.map(console.log)
    // }

    render(){
        // // var arrayData = []
        // console.log('inside render of result-items', this.props.data)

        // if(this.props.data.length != 0) {
        //     this.props.data.results.forEach(function(element) { console.log(element)})

        // }

        return(
            <div>                
                <li> {this.props.trackName} </li>
            </div>
        )
    }
}
