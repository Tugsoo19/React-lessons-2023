import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Hello {this.props.name} </div>;
        
    }
    
}

export default HelloWorld;