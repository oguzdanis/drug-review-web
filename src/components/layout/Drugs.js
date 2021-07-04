import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import './Drug.css';
import { StarOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons';
import IconText from '../util/İconText';


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
            <div className='item-height'>
                <List
                    itemLayout="vertical"
                    size="small"
                    dataSource={this.state.drugs}
                    renderItem={item => (
                        <List.Item className='drug-item border border-secondary rounded'
                            key="test"
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={220}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                title={item.name}
                                description={item.description} style={{ color: "black" }} />
                        </List.Item>
                    )}>
                </List>
            </div>
        )
    };
}

export default Drugs;