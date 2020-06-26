import React from "react";
import {Avatar, Button, Comment, Form, Input, Tooltip} from "antd";
import moment from 'moment';
import {UserOutlined} from '@ant-design/icons';

const {TextArea} = Input;

const Editor = ({onChange, onSubmit, submitting, value}) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
        };
    }

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render() {
        const comment = this.props.comment;
        const {likes, dislikes, action, content} = this.state;
        const actions = [
            <span>
        <Tooltip title="Like">

        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>{likes}</span>
      </span>,
            <span>
        <Tooltip title="Dislike">
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>{dislikes}</span>
      </span>,
            <span>Reply to</span>,
        ];

        return (
            <div>
                <Comment
                    //暂时屏蔽动作
                    // actions={actions}
                    author={<a>Ghost</a>}
                    avatar={
                        <Avatar style={{backgroundColor: '#000'}} icon={<UserOutlined/>}/>
                    }
                    content={
                        <p>
                            {comment.content}
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment(comment.commentTime).format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment(comment.commentTime).fromNow()}</span>
                        </Tooltip>
                    }
                />
            </div>
        );
    }

}

class Commenter extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {submitting, value} = this.state;
        return (
            <div>
                <Comment
                    avatar={
                        <Avatar style={{backgroundColor: '#000'}} icon={<UserOutlined/>}/>
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </div>
        )
    }
}

export {CommentList, Commenter};