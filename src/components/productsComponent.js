import React from 'react';
import axios from 'axios';

class Products extends React.Component {

    //REST API - JSON format {}
    //SOAP

    //FrontEnd -> (through REST API) Server

    //new Promise() {
        //then -- 200
        //catch -- 4xx, 5xx
    //}

    constructor(props) {
        super(props);
        this.state = {
            userData : []
        }
    }

    // componentDidCatch(err, errInfo) {
    //     console.log('error', errInfo);
    // }

    componentWillMount() {
        //get data
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                userData: response.data
            })
            console.log('success', this.state.userData);
        })
        .catch(errorResponse => {
            console.log('--- failure ---', errorResponse);
        })

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
        .then(response => {
            console.log('post response', response)
        })
        .catch(response => {
            console.log('post error response', response)
        })


        // axios.post(); //100 rows .. its now 101 .. insert data in the server
        // axios.patch(); // modifying existing data
        // axios.put(); // id : 5 .. either inserts or updates
        // axios.delete(); // delete a particular row, records
    }

    render() {
        console.log('checking response in render method', this.state.userData);
        let element;
        if (this.state.userData.length) {
            element = this.state.userData.map((data, index) => {
                return (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                    </tr>
                )
            })
        }        

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element ? element : (
                            <tr>
                                <td>loading</td>
                                <td>loading</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products;

//connect