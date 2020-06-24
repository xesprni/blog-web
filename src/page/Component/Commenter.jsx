import React from "react";
import {Comment, Avatar, Form, Button, Input, Tooltip} from "antd";
import moment from 'moment';

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

class CommentList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
            content:"hello world",
        };
        // console.log(this.props.comments);
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
        const { likes, dislikes, action,content } = this.state;
        const actions = [
            <span>
        <Tooltip title="Like">

        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
            <span>
        <Tooltip title="Dislike">
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
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
                        <Avatar style={{ backgroundColor: '#000' }} icon="user" />
                    }
                    content={
                        <p>
                            {content}
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment("2010-02-10").format('YYYY-MM-DD')}>
                            <span>{moment("2010-02-10").fromNow()}</span>
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
        const { submitting, value } = this.state;
        return(
            <div>
                <Comment
                    avatar={
                        <Avatar style={{ backgroundColor: '#000' }} icon="user" />
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

export {CommentList,Commenter};