import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Switch } from '@material-ui/core';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { flexbox } from '@material-ui/system';
import Api from './API'
const PurpleSwitch = withStyles({
    switchBase: {
      color:'black',
      '&$checked': {
        color: 'white',
      },
      '&$checked + $track': {
        backgroundColor: 'white',
      },
    },
    checked: {},
    track: {},
  })(Switch);
  
class Home extends React.Component {
    constructor(){
        super()
        this.state={
        change:false,
         data:{
         "IP":"",
         "network":false,
         "address":false,
         "range":false,
         "abbreviate":false,
         "expand":false,
         "type":false,
         "mapped":false,
         "convert":false,
         "startRange":false,
         "endRange":false

         }
        }
    }
    
    handelChange=(e)=>{
     this.setState({change:e.target.checked})
     
 }
   handelIpChange=(event,key)=>{


    let value=event.target.value
    let data= this.state.data
    data[key]= value
    this.setState({data});


 
    console.log('ip',this.state.data[key])
   }
   handelCheekChange=(event,key)=>{


    let value=event.target.checked
    let data= this.state.data
    data[key]= value
    this.setState({data});


 
    
   }

   handelSubmet=()=>{

  console.log('submeted data',this.state.data)
   }
   componentDidMount(){
Api.SendApi()
   }
    render(){

       


        
  return (

    <>
   
<div className={this.state.change?"content-holder-dark":"content-holder-light"}>

<div className="sideBar">
      
     
      
        address<Switch onChange={(e)=>this.handelCheekChange(e,"address")} />
        network <Switch  onChange={(e)=>this.handelCheekChange(e,"network")} />  
        range <Switch onChange={(e)=>this.handelCheekChange(e,"range")} />
        endRange <Switch onChange={(e)=>this.handelCheekChange(e,"endRange")} />  
        startRange <Switch onChange={(e)=>this.handelCheekChange(e,"startRange")}/>
        convert <Switch onChange={(e)=>this.handelCheekChange(e,"convert")}/>
        mapped <Switch onChange={(e)=>this.handelCheekChange(e,"mapped")}/>
        type <Switch onChange={(e)=>this.handelCheekChange(e,"type")}/>
        expand<Switch onChange={(e)=>this.handelCheekChange(e,"expand")}/>
        abbreviate <Switch onChange={(e)=>this.handelCheekChange(e,"abbreviate")}/> 
        </div>
    <FormGroup>
      <FormControlLabel
        control={
          <PurpleSwitch
         
          onChange={this.handelChange}
            value="checkedA"
          /> 
        }
        label="change mode"
      />
      </FormGroup>
   
         
      
    
    <TextField
        id="outlined-uncontrolled"
        label="IP v6"
        className="input-text"
        onChange={(e)=>this.handelIpChange(e,"IP")}
        placeholder="ex: 8888.564c.f555.f555"
        margin="normal"
        variant="outlined"
      /> 

      <button
      className={this.state.change?"dark-mode":"btn-primary"}
      onClick={this.handelSubmet}
      >

       Calcuate
      </button>
   
        
      </div> 
    </>
  );
}}

export default Home;
