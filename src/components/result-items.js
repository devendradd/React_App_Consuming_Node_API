import React from 'react';
import  {Button, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Row, Col} from  'reactstrap';


export default class ResultItems extends React.Component{

    constructor(props){
        super(props);      
    }



    render(){
        // console.log('inside render of result-items', this.props.data)
        console.log(this.props.data)

        
        var style = {
            float: 'left',
            height: '400px',
            width: '265px',
            margin : '10px',
            
        }
    

        // creating each row for the data being send from parent component(data asent is 'data' from parent component)
        //data used in this props.data.id is coming from <ResultItems key = {result.trackId} data = {item}/> this line which is in the parent component
        return(
           
        <Card inverse style={style} className="jumbotron" >
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
                <Col xs="12" style={{height: '100px'}}>
                    <Button color="primary" size="sm" block>Like</Button>{' '}                   
                </Col>
            </Row>
        </Card>
                                                                       
        )
    }
}
