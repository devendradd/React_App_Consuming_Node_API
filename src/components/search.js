import React from 'react';
import $ from 'jquery';


export default class Search extends React.Component{

    constructor(props){
        super(props);         
        this.search = this.search.bind(this);             
        this.state = {func : props.parent.bindParent}
    }

    search(){
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: 'https://itunes.apple.com/search?term=fun',
            success: (response)=>{                               
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