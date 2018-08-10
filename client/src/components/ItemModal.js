import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    firstName: "",
    lastName: "",
    title: "",
    nationality: "",
    skills:[],
    whySofterDeveloper: "",
    longTermVision: "",
    motivatesMe: "",
    favoriteQuote: "",
    joinedOn: "",
    selectedFile:null

  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFileChange=(e)=> {
    this.setState({selectedFile:e.target.files[0]})
  }
  
  onSubmit = e => {
    e.preventDefault();
    console.log("hi");
  const {...data } = this.state;
  console.log('data', data)
    let formData = new FormData();
    for(let name in data){
      console.log('name', name)
      formData.append(name,data[name]);
    }
    this.props.addItem(formData);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Student
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
          <form onSubmit={this.onSubmit} action="/api/items" method="POST" encType='multipart/form-data'>
          <input
            name="firstName"
            onChange={this.onChange}
            required
            type="text"
            placeholder="Enter First Name"
          />
          <br />
          <br />
          <input
            name="lastName"
            onChange={this.onChange}
            
            required
            type="text"
            placeholder="Enter Last name Name"
          />
          <br />
          <br />
          <input
            name="title"
            onChange={this.onChange}
          
            required
            type="text"
            placeholder="Enter Title"
          />
          <br />
          <br />
          <input
            name="nationality"
            onChange={this.onChange}
           
            required
            type="text"
            placeholder="Enter Nationality"
          />
          <br/>
          <br/>
           <input
            name="skills"
            onChange={this.onChange}
            
            required
            type="text"
            placeholder="Enter skills"
          />
          <br />
          <br />
          <input
            name="whySofterDeveloper"
            onChange={this.onChange}
           
            required
            type="text"
            placeholder="Why Software Developer"
          />
          <br />
          <br />
          <input
            name="longTermVision"
            onChange={this.onChange}
            
            required
            type="text"
            placeholder="your long term vision"
          />
          <br />
          <br />
          <input
            name="motivatesMe"
            onChange={this.onChange}
           
            required
            type="text"
            placeholder="What motivates you"
          />
          <br />
          <br />
          <input
            name="favoriteQuote"
            onChange={this.onChange}
          
            required
            type="text"
            placeholder="Enter ur fav quote"
          />
          <br />
          <br />
          <input
            name="joinedOn"
            onChange={this.onChange}
            
            required
            type="text"
            placeholder="joined date in integrify"
          />
          <br />
          <br />
          <input type="file" name="selectedFile" onChange={this.onFileChange} />
          <br />
          <br />
          <br />

          <button>Post</button>
        </form>
     
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);