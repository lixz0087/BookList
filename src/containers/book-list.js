import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'react';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    };

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Here the state is the application state which contains the book list
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything return from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);