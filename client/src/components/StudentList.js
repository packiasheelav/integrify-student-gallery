import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, selectedStudent , deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';
import '../Style.css';

class ShoppingList extends Component {
  state={
    showDetails:false
  }
  componentDidMount() {
    this.props.getItems();
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
    const { items } = this.props.item;
    console.log(this.state.showDetails);
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, src ,alt,firstName,lastName,nationality,whySofterDeveloper,longTermVision,skills}) => (
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, selectedStudent }
)(ShoppingList);

