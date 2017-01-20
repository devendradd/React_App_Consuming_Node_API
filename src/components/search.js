import React from 'react';
import $ from 'jquery';


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
            <div>
                <h1> this is search box</h1>
                <div>
                    <input type="text"/>
                    <select>
                        <option value = "Software"> Apps </option> 
                        <option value ="movie"> Films </option>
                    </select>
                    <input type="submit" onClick={this.search}/>                    
                </div>
            </div>
        );
    }
}