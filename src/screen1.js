import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {
  Card, CardImg, CardImgOverlay,
  CardTitle,
  NavbarToggler
} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import axios , {post} from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faPaperclip,faCamera ,faMicrophone,faImage,faCalendarAlt,faFileVideo} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import './studentlist.css'


export  class Screen1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      valueOfTitle: '',
      valueofRemark: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeRemark = this.handleChangeRemark.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onChange(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onLoad = (e) =>{
      console.warn("img data",e.target.result)
    
    const url = "http://127.0.0.8001/api/service";
    const formData = {file:e.target.result}
    
    return post(url,formData)
    .then(response =>console.warn("result",response)) 
    }
    }
    
  handleChangeRemark(event) {
    this.setState(
      {
        valueOfTitle: { valueOfRemark: event.target.value }
      }
    )
  }
  handleChangeTitle(event) {
    this.setState(
      {
        valueOfTitle: { valueOfTitle: event.target.value }
      }
    )
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  render() {
    return (<>
   
      <div className="Container " >
                  <Navbar className="Navheader" bg="dark" >
                    <div className="title">   <FontAwesomeIcon className="returnArrow" icon={faAngleLeft}/></div> 
                    <div className="subject">   <h4 >Create Homework(Science)</h4> </div> 
                   </Navbar>
                   <div className="formBackgorund">
                      <form onSubmit={this.onFormSubmit} className="Formborder screen2" >
                      <div className="form-group">
                      <div className="Customborder">
                      <div id="form-id" className="Entrybox">

                      <label className="Label "><strong>Homework Due Date</strong></label>
                      <label><DatePicker 
                        placeholderText={'Select date'}
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        dateFormat="dd/MM/yyyy" />
                      <FontAwesomeIcon icon={faCalendarAlt}/></label>
            
                     </div>
                     <div>
                      <input className="Entrybox" type="text" placeholder={'Enter Title Here'} value={this.state.value} onChange={this.handleChangeTitle} />
                     </div>
                     <br></br>
                    <div >
                    <textarea  className="Entrybox" placeholder={'Enter Remark Here'} value={this.state.value} onChange={this.handleChangeRemark} />
                    </div>
            
                    <hr className="Solid"></hr>
                   <div>
                   <div class="icon"><FontAwesomeIcon icon={faPaperclip} /></div>
                   <div class="text"><strong>Attachments</strong></div>
   
                   </div> 
            
                <div className="Entrybox">
                 <div class="attachedrow">
                  <div class="attachedcolumn">
                  <div>
                    <div><span className="caption">
                      <strong>Image</strong></span></div>
                      <FontAwesomeIcon icon={faImage} className="iconCustomAttach" />
                    </div>
                  </div>
                  <div class="attachedcolumn">
                  <div>
                    <div><span className="caption">
                      <strong>Video</strong> </span>
                      </div> 
                      <FontAwesomeIcon icon={faFileVideo} className="iconCustomAttach" /></div>
                 </div>
 
              </div>      
         
             </div>
        </div>
           
            <div className="Entrybox">
                <center>
                <div class="row">
                   <div class="column">
                    <div><FontAwesomeIcon icon={faCamera} className="iconCustom" /></div><span className="caption"> Add from Camera</span></div>
                    <div class="column">
                    <div> <FontAwesomeIcon icon={faMicrophone} className="iconCustom" /></div><span className="caption"> Add Voice</span></div>
                   <div class="column">
                    <div> <FontAwesomeIcon icon={faImage} className="iconCustom" /></div><span className="caption">From Gallery</span></div>
                    </div>
                </center>
                <button className="Sendbutton Entrybox" type="submit">SEND TO STUDENTS</button>
              </div>
            </div>
        </form>
        </div>
        </div>
    </>
    );
  }

}

export default Screen1;