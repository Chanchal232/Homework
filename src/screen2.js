import React ,{Component} from 'react';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Navbar,NavbarBrand, CardImg} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp,faSearch,faLeaf, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {Card} from 'react-bootstrap'
import {SubmittedList} from './Submissions/Submitted.js'
import {ReviewedList} from './Submissions/reviewed.js'
import {Unknown} from './Submissions/unknown.js'
import {Unsubmit} from './Submissions/unsubmitted.js'
import './studentlist.css'
import './App.css'


export default class Remark extends Component{
    constructor(props){
        super(props);
       
    }
   

render(){
 
   return(<>
   <div className="Container">
    <Navbar className="Navheader" bg="dark" >
    
    <div className="title">   <FontAwesomeIcon className="returnArrow" icon={faAngleLeft}/></div> 
       <div className="subject">   <h4 >Students Detail</h4> </div> 
         
        <div className="searchIcon"><FontAwesomeIcon icon={faSearch}/></div> 
        
    </Navbar>
    
    <div class="logo" >
    <div class="icon"><FontAwesomeIcon icon={faLeaf} /></div>
    <div class="text"><strong><h4>Science</h4></strong></div>
    <div class="text subtitle"><h5>Homework 1</h5></div>
  </div>

  
   
    <Tabs defaultIndex={1} onSelect={index => console.log(index)} className="customPanel">
        <TabList className="customtab">
          <Tab>Submitted(25)</Tab>
          <Tab>Not Submitted(20)</Tab>
          <Tab>Reviewed(30)</Tab>
          <Tab>Unknown(1)</Tab>
        </TabList>
     
        <TabPanel >
          <SubmittedList/>
        </TabPanel>
        <TabPanel>
        <Unsubmit/>
          
        </TabPanel>
        <TabPanel>
        <ReviewedList/>
          
        </TabPanel>
        <TabPanel>
       < Unknown/>
        
        </TabPanel>
      
      </Tabs>
      <div className="icon-holder">
  <FontAwesomeIcon  className="upload" icon={faArrowAltCircleUp}/>
  </div>
</div>
    </>

    )
}
}