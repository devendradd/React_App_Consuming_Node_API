import React from 'react';
import $ from 'jquery';
import { InputGroup, InputGroupButton, Input, Button, Badge } from 'reactstrap';


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
                //call back property function which will call back to the bindParent() function in the parent component  at the last                         
                this.props.parent(response)
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
                    <h3>Likes <Badge color="info">New</Badge></h3>
                    <br/>                                                                                    
                </div>
            </div>
        );
    }
}