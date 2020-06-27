import React from "react";
import {Avatar, Button, Comment, Form, Input, Tooltip} from "antd";
import moment from 'moment';
import {UserOutlined} from '@ant-design/icons';
import {post} from '@utils/HttpUtil.js';

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
        const id = this.props.articleId;
        let value = this.state.value;
        if (!value) {
            return;
        }
        this.setState({
            submitting: true,
        });
        let this_ = this;
        setTimeout(() => {
            let url = "/article/saveComment"
            post(url, {
                articleId: id,
                content: value,
            }).then(function (res) {
                this_.props.loadComment();
                this_.setState({
                    submitting: false,
                    value: null
                })
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