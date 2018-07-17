import React, { Component } from 'react';
import{Form,Input,Button,Modal} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
/**
 * 歌单管理页
 */
class PlayList extends Component {
    componentDidMount() {
        document.title = '歌单管理';
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values) =>{
            if(!err){
                console.log('Received values of form:',values);
                fetch('/api/playlist/add',{
                    body:JSON.stringify(values),
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    }
                })
                .then(function(response){
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    Modal.info({
                        title:'成功',
                        content:<span>提交歌单成功！</span>,
                        onOk: () =>{
                            this.props.form.resetFields();
                        }
                    });
                });
            }
        });
    };
    render() {
        const{ getFieldDecorator } = this.props.form;
        const formItemLayout ={
            labelCol:{
                xs:{ span:24 },
                sm:{ span:6 }
            },
            wrapperCol:{
                xs:{ span:24 },
                sm:{ span:12 }
                }
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="歌单名称" {...formItemLayout} >
                {getFieldDecorator('name',{
                    rules:[
                        {
                            required:true,
                            message:'请输入歌单的名称！'
                        }
                    ]
                })(<Input placeholder="请输入歌单的名称"/>)}
                </FormItem>
                <FormItem label="歌单封面" {...formItemLayout}>
                {getFieldDecorator('cover',{
                    rules:[
                        {
                            required:true,
                            message:'请输入歌单封面的图片网址！'
                        }
                    ]
                })(<Input placeholder="请输入歌单封面的图片地址"/>)}
                </FormItem>
                <FormItem label="歌单描述" {...formItemLayout}>
                {getFieldDecorator('desc',{
                    rules:[
                        {
                            required:true,
                            message:'请输入歌单的介绍！'
                        }
                    ]
                })(<TextArea rows={6} placeholder="请输入歌单的介绍"/>)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                    保存
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(PlayList);