import React, { Component } from 'react';
import './News_form.css';
import axios from 'axios'

export default class CreateNews extends Component {
    constructor(props){
        super(props);

        this.onChangeTitle =  this.onChangeTitle.bind(this);
        this.onChangeCategory =  this.onChangeCategory.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit =  this.onSubmit.bind(this);

        this.state = {
            title: '',
            category: '',
            content: '',
            date: new Date(),
            categoryList: [],
        }
    }

    componentDidMount() {
        this.setState({
            categoryList: ['Category 1', 'Category 2', 'Category 3'],
            category: 'Category 1'
        })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const news = {
            title: this.state.title,
            category: this.state.category,
            content: this.state.content,
            date: this.state.date

        }
        console.log(news)

        axios.post('http://localhost:3000', news)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <div className = 'form-container'>
                    <div className = 'form-header'>Form</div>
                    <div className = 'form-group'>
                        <div className = 'form-body-title'>TITLE</div>
                        <textarea className = "form-control"  id='contentInput' rows="2" placeholder='Enter title'
                            required
                            value = {this.state.title}
                            onChange = {this.onChangeTitle}
                            />
                    </div>
                    <div className = 'form-group'>
                        <div className ='form-category'>Category</div>
                        <select className = 'form-control' style= {{width: '20%', marginBottom: '3%'}} id='categorySelect'
                            required
                            value = {this.state.category}
                            onChange = {this.onChangeCategory}>
                                {
                                    this.state.categoryList.map(function(category) {
                                        return <option
                                            key = {category}
                                            value = {category}> {category}
                                        </option>;
                                    })
                                }
                        </select>
                    </div>
                    <div className = 'form-group'>
                        <div className = 'form-body-title'>BODY</div>
                        <textarea className = "form-control" id='contentInput' rows="20" placeholder='Write something here'
                            required
                            value = {this.state.content}
                            onChange = {this.onChangeContent}/>
                    </div>
                    <div className = 'form-group'>
                        <input type='file' className = 'form-control-file form-button-container' id='addImage' placeholder = 'Add image'/>
                        <button type='submit' className = 'form-create-button form-button-container' id = 'create'>Create</button>
                    </div>
                </div>
            </form>
        )
    }

}