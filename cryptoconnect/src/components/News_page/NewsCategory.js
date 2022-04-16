import React, { Component } from 'react';
import './News_form.css';
import axios from 'axios'

// import * as categoryList from "mongoose";


export default class NewsCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryID: '',
            categoryName: '',
            categoryList: [],

        }
    }
    get cateID() {
        return this.state.categoryID;
    }

    get cateName() {
        return this.state.categoryName;
    }

    get cateList() {
        return this.state.categoryList;
    }

    set cateID(value) {
        this.state.categoryID = value;
    }

    set cateName(value) {
        this.state.categoryName = value;
    }

    addCategoryList(category) {
        this.state.categoryList.push(category)
        return this.state.categoryList;
    }

    createCategory(ID, name) {
        this.cateID = ID;
        this.cateName = name;
        const category = {categoryID: ID, categoryName: name}
        this.addCategoryList(category)
        return category;
    }

}

const category = new NewsCategory();
category.createCategory('1', 'currency');
category.createCategory('2', 'stock');
category.createCategory('3', 'crypto');

console.log(category.cateList)
console.log(category.cateList[0])
console.log(category.cateList[1].categoryID)
console.log(category.cateList[2])


