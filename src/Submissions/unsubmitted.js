import React,{Component} from 'react'
import StudentData from '../data/unsubmittedlist.json'
import { Card, Container } from 'react-bootstrap'
import "../studentlist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile} from '@fortawesome/free-solid-svg-icons'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
 export class Unsubmit extends Component{
     render(){
         return(
             <div className="contact">
            
              
                 
            {StudentData.map((student,index)=>{
                     return <div>
                      <Card>
                       <Container className="customCard">    
                           <Row className="customCard">   
                          <Col> <p className="text-left">{student.name}</p></Col> 
                           <Col> <p className="text-right "> {student.date}</p></Col>
                            
                            </Row>
                            <Row className="customCard">
                            <Col><p className="text-left "><FontAwesomeIcon icon={faMobile}/>{student.phone}</p></Col> 
                            
                           <Col> <p className="text-right">  {student.time}</p></Col>
                            </Row>
                            
                        </Container>
                        </Card>
               
               </div>
            
                 })}
             </div>
         )
     }
 }