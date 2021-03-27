import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: 'Mike',
            lname: 'Peterson',
            age: '70',
        }
    }

    render() {
        return (
            <div>
                Name: {this.state.fname} {this.state.lname} 
                <br/>
                Age: {this.state.age}
            </div>
        )
    }
}

export default Test
