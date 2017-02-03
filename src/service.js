import $ from 'jquery';

export default class Service{

    static storeLikes(id){
        console.log("inside storeLikes()");
        $.ajax({            
            type: "POST",                        
            url: 'http://localhost:3001/',
            data : {ID: id, Like: '1'},            
            success: (response)=>{                    
               console.log("Response from server after storing data",response);
            }
        });
    }


        static getLikes(id, cb){
        console.log("inside getLikes()");
        $.ajax({            
            type: "GET",                        
            url: 'http://localhost:3001/' + id,         
            success: (response)=>{   
                console.log('data for likes from express in Service file', response)             
                cb(response)
            }
        });

    }
}  