import React, { Component } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import List from '../List/List';
import './Filter.css';

class Filter extends Component{
  constructor(props){
    super(props);
    this.state={filterType:"Cars",ascending:true};
  }

  onSortClick = (e) => {
    this.setState({ascending: !this.state.ascending});
  };

  onSelectionChange = (e) => {
    this.setState({filterType: e.target.value});
  }

  render(){
    const Filters = {
      "Cars":["Audi","Honda","BMW","Ford","GM","Acura"],
      "Fruits": ["Apple","Mango","Banana","Grape","Orange","Water Melon"]
    };
    const sortTitle = this.state.ascending? "Sort by Descending Order": "Sort by Ascending Order";
    const listItems= this.state.ascending ? Filters[this.state.filterType].sort():Filters[this.state.filterType].sort().reverse();

    return(
      <div className="filter">
        <Select onChange={this.onSelectionChange} options= {Object.keys(Filters)}/>
        <Button title={sortTitle} onClick={this.onSortClick} />
        <List listItems={listItems}/>
      </div>
    );
  }
}

export default Filter;
