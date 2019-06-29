import React from 'react';

class Product extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
    }

    componentWillUnmount() {
        //alert('component will unmount');
    }

    render() {
        return (
            <div>
                <button>add to cart</button>
            </div>
        )
    }
}

export default Product;

//connect()
//pass a value to my store -> product value
//store will update my cart component

// store : {
//     cartValue : laptop/pjone
// }

//call an action to change my cart value