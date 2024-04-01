import React, { Component } from "react";
import Pagination from "../Pagination/Pagination.js";
import SearchBar from "../SearchBar/SearchBar.js";
import styled from "styled-components";
import Genres from "../Genres/genres.js";

const FilterBarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    position: fixed;
    background-color: white;
`
const Container = styled.div`
    display: flex;
    ${'' /* align-self: center; */}
    height: -webkit-fill-available;
`
class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
    onGenresSelected = (data) => {
        console.log(data.target.value, " genres");
        this.props.selectedGenre(data.target.value);
    }
    render() {
        return (
            <FilterBarWrapper className="w-full pl-5 pr-12 md:d-block flex-wrap">
                {/* <div className="grid grid-cols-1"> */}
                    <div className="grid grid-cols-2 justify-end w-full p-5">
                        <div className="col-span-1 text-xl">
                            Trending movies
                        </div>
                        <div className="flex align-baseline items-center justify-between">
                            {/* <Container>
                                <form class="max-w-sm mx-auto flex">
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                                    <select id="countries" onChange={(event)=>{this.onGenresSelected(event)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose a country</option>
                                        {
                                            this.props.genres.map((genre,index)=>{
                                                return (
                                                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                                                )
                                               
                                            })
                                        }
                                    </select>
                                </form>
                            </Container> */}
                            <Container className='my-auto h-auto'>
                                <Pagination className="ml-auto" currentPage={this.props.currentPage} onPageChange={this.onPageChange} totalPage={this.props.totalPage}></Pagination>
                            </Container>
                            <Container className='d-flex w-fit ml-5'>
                                <SearchBar searchResult={this.searchResult} />
                            </Container>
                        </div>
                    </div>
                {/* </div> */}


            </FilterBarWrapper>
        )
    }
}
export default FilterBar;