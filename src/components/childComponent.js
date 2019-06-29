import React from 'react';

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        //alert('initialisation phase !');
        this.state = {
            age: 27,
            name: ''
        }
    }

    componentWillMount() {
        //before rendering
        this.setState({
            name: this.props.name
        })
        //alert('component will mount');
    }

    componentDidMount() {
        //after render
        //alert('component did mount');
    }


    shouldComponentUpdate() {
        // return a boolean
        //TODO: check for the value
        // console.log('state --->', this.state.name);
        // console.log('props --->', this.props.name);
        // if(this.state.name !== this.props.name) {
        //     return true;
        // } else {
        //     return false;
        // }
        //alert('should component update');
        return false;
    }

    componentWillUpdate() {
        //before updation
        //alert('component will update');
    }

    componentDidUpdate() {
        //after updation
        //alert('component did update');
    }

    componentWillUnmount() {
        //before unmounting
        //alert('unmounting');
    }

    handleClick = () => {
        //TODO: change parent's data
        this.props.inputValue('value');
    }

    render() {
        //alert('render method');
        return (
            <div>
                <div>name is {this.props.name} and age is {this.state.age}</div>
                <button onClick={this.handleClick}>Click to change parent's value</button>
            </div>
        )
    }
}

//initialisation - constructor
//Mounting - componentWillUpdate, render, componentDidUpdate
//updation - shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate
//unmounting - componentWillUnmount

//componentWillCatch

export default ChildComponent;