import React from 'react';
import ChildComponent from './childComponent';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 5,
            name: 'ahamed',
            inputValue: 'dummy value'
        }
    }

    handleOnClick = () => {
        //TODO: update name
        //console.log('coming inside event handler');
        this.setState({
            name: 'newValue'
        })
    }

    handleOnChange = () => {
        //TODO
    }

    handleInputValueChange = (data) => {
        this.setState({
            inputValue: data
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.index}</div>
                <input type="text" value={this.state.inputValue} onChange={this.handleOnChange}/>
                <button onClick={this.handleOnClick}>Click for an Update!</button>
                <ChildComponent name={this.state.name} inputValue={this.handleInputValueChange}/>
            </div>
        )
    }
}

export default HeaderComponent;