import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getStudents, selectedStudent , deleteItem} from '../actions/studentActions';
import PropTypes from 'prop-types';
import '../Style.css';

class StudentList extends Component {
  state={
    showDetails:false
  }
  componentDidMount() {
    this.props.getStudents();
  }

  onDeleteClick = id => {
   console.log('am inside select function', id);
    this.props.deleteItem(id);
  };

  onSelectedStudent = id =>{
   console.log('am inside select function');
   this.setState({
    showDetails: true
  });
    this.props.selectedStudent(id);
  }

  render() {
    const { students } = this.props.student;
    console.log(this.props);
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {students.map(({ _id, src ,alt,firstName,lastName,nationality,whySofterDeveloper,longTermVision,skills}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem className='studentList'>
                  <div className="getStudent" onClick={()=>this.onSelectedStudent(_id)}>
                  <h3>{firstName}{' '}{lastName}</h3>
                  <img className="studentimage" src={src} alt={alt} />
                  </div >
                  <div>
                 </div>
                  { this.state.showDetails ? ( <div>
                  <p>{whySofterDeveloper}</p>
                  <p>{nationality}</p>
                  <p>{longTermVision}</p>
                  <p>{skills}</p>
                  </div>) : " "}
                  <button
                    className="remove-btn"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  > &times;
                  </button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

StudentList.propTypes = {
  getStudents: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  { getStudents, deleteItem, selectedStudent }
)(StudentList);

