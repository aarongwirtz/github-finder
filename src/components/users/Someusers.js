import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Someusers extends Component {
    state={
        name: 'Aaron',
        age: 42
    }
    render() {
        return (
            <div>
                {this.props.name} {this.props.age}
            </div>
        )
    }
}
Someusers.propTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}
export default Someusers
