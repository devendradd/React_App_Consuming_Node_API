import React from 'react';
import $ from 'jquery';
import { InputGroup, InputGroupButton, Input, Button, Badge } from 'reactstrap';
import Service from './../service'

export default class Search extends React.Component{

    constructor(props){
        super(props);         
        //binding the function search with .bind 
        this.search = this.search.bind(this);           
    }

    search(){
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: 'https://itunes.apple.com/search?term=fun',
            success: (response)=>{    
                // call back property function which will call back to the bindParent() function in the parent component  at the last  
                // console.log("response in search.js",response)       
                var collectiveData = []               
                if(response) {
                    // response.results.forEach( element => {
                    // Service.getLikes(element.trackId, (data) => {
                    //         var likes = 0
                    //         element.likes = data.length
                    //         if(data) likes = data.length
                    //         var elementForApp = {ituneElement : element, ituneElementLikes : likes}
                    //         collectiveData.push(elementForApp)
                    //     })
                    // })

                    // console.log('length of response data',response.results.length)
                         var respCounter = 0
                         response.results.forEach( element => {
                        //  console.log('element',element)
                        //  console.log('iteration value:',i)
                         Service.getLikes(element.trackId, (data) => {
                            respCounter++ 
                            var likes = 0
                            console.log('data from database for the likes count',data)
                            // element.likes = data.length
                            if(data) likes = data.likes
                            var elementForApp = {ituneElement : element, ituneElementLikes : likes}
                            collectiveData.push(elementForApp)
                            // console.log('data element pushed to collectiveData', elementForApp)
                            // console.log('data in the collective data', collectiveData)
                            if( respCounter == response.results.length) {
                                // console.log('iterated the data for said limit',respCounter)
                                // console.log('data in the collective data', collectiveData)
                                // debugger
                                this.props.parent(collectiveData)
                            }
                        })
                     })
                }
            }
        });

    }

    render(){
        return(
            <div className="jumbotron">
                <h2><b>Search Your Favourite ITune</b></h2>
                <div>
                    <InputGroup>
                        <InputGroupButton><Button onClick={this.search}>Search</Button></InputGroupButton>
                        <Input />                        
                    </InputGroup>
                   
                    
                    <br/>                                                                                    
                </div>
            </div>
        );
    }
}