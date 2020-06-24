import React from 'react';
import E from 'wangeditor';
import {Button, Input, Select, Switch} from 'antd';

class ArticleEditor extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            content: '',
            title: '',
            author: '',
            topics: [],
            topFlag: 0,
            type: '',
            summary: '',
        };
        this.getTopics();
    }

    componentDidMount() {
        const div1 = this.refs.editorMenu;
        const div2 = this.refs.editor;
        const editor = new E(div1,div2);
        editor.customConfig.uploadImgShowBase64 = true;
        editor.customConfig.zIndex = 0;
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                content: html
            })
        };
        editor.create()
    }


    getTopics = () => {
        let url = '/dict/getDictDetailById?id=1';
    };

    handleChange = (value) => {
        this.setState({
            type: value
        });
    };

    topToggle = (checked) => {
        this.setState({
            topFlag: checked?0:1
        });
    };

    saveArticle() {
        let url = '/blog/saveArticle';
    }

    dataValid = () => {
        return this.state.author.trim() !== '' && this.state.summary.trim() !== '' && this.state.summary !== '' && this.state.content.trim() !== '';
    };

    render() {
        const {Option} = Select;
        return (
            <div>
                <div className={"editor-info"}>
                    <span className={"editor-info-label"}><span style={{color: "red"}}>*</span>Title:</span>
                    <Input style={{width: 200, display: 'inline-block', marginRight: 30}} maxLength={20}
                           placeholder="Title" onChange={(e)=>{this.setState({title:e.target.value})}} />
                    <span className={"editor-info-label"}><span style={{color: "red"}}>*</span>Author:</span>
                    <Input style={{width: 200, display: 'inline-block', marginRight: 30}} maxLength={20}
                           placeholder="Author" onChange={(e)=>{this.setState({author:e.target.value})}} />
                    <span className={"editor-info-label"}>Topic:</span>
                    <Select defaultValue="Select Topic" style={{width: 150, marginRight: 30}}
                            onChange={this.handleChange}>
                        {this.state.topics.map((item, index) => {
                            return <Option key={index} value={item.itemValue}>{item.itemName}</Option>;
                        })}
                    </Select>
                    <span className={"editor-info-label"}>Top:</span>
                    <Switch defaultChecked={false} onClick={this.topToggle}/>
                </div>
                <div style={{marginBottom:20}}>
                    <span className={"editor-info-label"}><span style={{color: "red"}}>*</span>Summary:</span>
                    <Input style={{width:1000,display: 'inline-block', marginRight: 200}} maxLength={200}
                           placeholder="Article Summary Less Than 200" onChange={(e)=>{this.setState({summary:e.target.value})}} />
                </div>
                {/* 将生成编辑器 */}
                <div ref="editorMenu" style={{boxShadow:'black 0 0 5px'}} className="toolbar">
                </div>
                <div style={{padding:'5px 0',}} />
                <div ref="editor" style={{textAlign: 'left',boxShadow:'black 0 0 5px',height:768}} >
                </div>
                <Button style={{marginTop: 20}} onClick={this.saveArticle.bind(this)} type="primary">Save
                    Article</Button>
            </div>
        );
    }

}

export {ArticleEditor};