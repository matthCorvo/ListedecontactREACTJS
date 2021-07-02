import React, { Component } from 'react'

export default class Contact extends Component {

 // changer icone 
 constructor() {  super();this.state = { togglePassword: false };
  this.onToggle = this.onToggle.bind(this);}
onToggle(e) {this.setState({ togglePassword: !this.state.togglePassword });}



    state = {
        show : true
    }
       
   
    onDeleteClick = () => {
       // console.log("fonctionne");
       this.props.deleteClickHandler();
    }

    render() {
        return (
    <section className=" mt-5">
  <div className="card card-body mb-3 text-center ">
  
    <h4 >{this.props.nom}&ensp;
    <i class="fas fa-caret-down " 
    onClick={() => 
        
      

        this.setState({
            show : !this.state.show
        })
        }>
        
        </i>
        <i class="far fa-times-circle" style={{cursor: 'pointer', float: 'right', color:'red'}}  onClick={this.onDeleteClick} ></i>
        </h4>
    {this.state.show ? ( <ul className="list-group">
         <li className="list-group-item list-group-item-action ">
         <i onClick={this.onToggle} >
        {this.state.togglePassword ? (
          <i className="far fa-envelope-open" />
        ) : (
          <i className="far fa-envelope" />
        )}
      </i>&ensp;Email : {this.props.email}        </li>
<li className="list-group-item list-group-item-action">
<i onClick={this.onToggle} >
        {this.state.togglePassword ? (
          <i className="fas fa-phone-slash" />
        ) : (
          <i className="fas fa-phone" />
        )}
      </i>   &ensp;Télephone : {this.props.tel}        </li>
      </ul> ) : null }
            </div>
            </section>
        )
    }
}

