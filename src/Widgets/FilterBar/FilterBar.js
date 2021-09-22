import React, { Component } from "react";
import Pagination from "../Pagination/Pagination.js";
import SearchBar from "../SearchBar/SearchBar.js";
import styled  from "styled-components";

const FilterBarWrapper = styled.div`
    display: flex;
    margin-left: auto;
    position: fixed;
    background-color: white;
`
const Container = styled.div`
    display: flex;
    align-self: center;
`
class FilterBar extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    onPageChange = (page) => {
        console.log(page);
        this.props.onPageChange(page);
    }
    searchResult = (searchText) => {
        console.log('result', searchText)
        this.props.search(searchText);
    }
    render(){
        return(
            // <div className="w-full align-items-right ">
            //     <div className="h-32 w-sm-6/6 w-md-1/6 w-lg-1/6  ml-auto">
            //         <div className="ml-auto fixed">
            //             <Pagination  currentPage={this.props.currentPage} onPageChange={this.onPageChange} totalPage={this.props.totalPage}></Pagination>
            //         </div>
            //     </div>
            // </div>
            <FilterBarWrapper className="w-full h-32 px-3">
                <Container className='ml-auto'>
                    <Pagination currentPage={this.props.currentPage} onPageChange={this.onPageChange} totalPage={this.props.totalPage}></Pagination>
                </Container>
                <Container className='d-flex self-center'>
                    <SearchBar searchResult={this.searchResult} />
                </Container>
            </FilterBarWrapper>
        )
    }
}
export default FilterBar;