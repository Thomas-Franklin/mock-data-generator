import React, { Component } from 'react';

class Background extends Component {
    constructor() {
        super();
        console.log("foo")
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch(`http://${process.env.API_HOST || 'localhost'}:${process.env.API_PORT || '5000'}/random/data`, { mode: 'cors' })
            .then(results => {
                console.log(results)
                return results.json();
            }).then(data => {
                console.log(data)
                this.setState({ data });
            });
    }

    render() {
        return (
            < div >
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
            </div >
        )
    }

}

export default Background;