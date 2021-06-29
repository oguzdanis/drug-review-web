import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

class Drugs extends Component {

    state = {
        drugs: []
    };

    async componentDidMount() {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.get('http://localhost:8090/api/v1/products', config)
                .then(res => {
                    console.log(res)
                    this.setState({ drugs: res.data })
                });    
    }
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.state.drugs}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description={item.description} />
                    </List.Item>
                )}>
            </List>
        )
    };
}

export default Drugs;