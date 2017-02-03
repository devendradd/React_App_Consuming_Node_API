import React from 'react';
import Service from './../service';
import  {Button, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Row, Col, Badge} from  'reactstrap';


export default class ResultItems extends React.Component{


    constructor(props){
        super(props);
        var likes = 0
        this.state = {likes : this.props.data.likes}
        this.like = this.like.bind(this);      
    }


    like(){
        console.log('data to be incremeneted for likes', this.state.likes)
        this.setState({likes : ++this.state.likes})
        Service.storeLikes(this.props.data.id)
    } 


    render(){
        // console.log('inside render of result-items', this.props.data)
        // console.log(this.props.data)
        var custom_card = {
            float: 'left',
            height: '400px',
            width: '265px',
            margin : '10px',      
        }
    
        // creating each row for the data being send from parent component(data asent is 'data' from parent component)
        //data used in this props.data.id is coming from <ResultItems key = {result.trackId} data = {item}/> this line which is in the parent component
        return(
           
        <Card inverse style={custom_card} className="jumbotron" >
            <Row>
                <Col xs="12" style={{height: '30px'}}>
                    <CardImg top width="20%" src={this.props.data.artwork} alt="Card image cap" />   
                </Col>    
            </Row>
            <Row> 
                <Col xs="12" style={{height: '240px'}}>            
                    <CardBlock>
                        <CardTitle>Name : {this.props.data.name}</CardTitle>
                        <CardSubtitle>                            
                            Kind:  {this.props.data.kind}                            
                        </CardSubtitle>
                        <CardText>
                            Id: {this.props.data.id} <br/>
                            Proce: {this.props.data.collectionPrice}<br/>
                            Country : {this.props.data.country}<br/>
                            Currency : {this.props.data.currency}</CardText>                                
                    </CardBlock>
                </Col>
            </Row>
            <Row>
                 <h5>Likes <Badge color="info">{this.state.likes}</Badge></h5>
            </Row>
            <Row>
                <Col xs="12" style={{height: '100px'}}>
                    <Button color="primary" size="sm" block onClick={this.like}>Like</Button>{' '}                   
                </Col>
            </Row>
        </Card>
                                                                       
        )
    }
}
