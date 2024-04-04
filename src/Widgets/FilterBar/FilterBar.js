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
    ${'' /* height: -webkit-fill-available; */}
    ${'' /* margin: 0px 10px; */}
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
        this.props.selectedGenre(data.target.value.toString());
    }
    render() {
        return (
            <FilterBarWrapper className="w-full md:d-block flex-wrap sm:pb-3 md:pb-3">
                <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 lg:justify-end w-full p-5 xl:px-32 xl:mx-48">
                    <div className="lg:col-span-1 lg:justify-start sm:grid-cols-2 flex flex-wrap sm:justify-between sm:w-full">
                        <span className="text-2xl font-bold text-main m-0 flex items-center">{this.props.title}</span>
                        {
                            this.props.title != "Trending Now" ?
                                <Container className="my-auto sm:ml-auto lg:ml-3 md:ml-auto">
                                    <form class="max-w-sm m-auto flex">
                                        {/* <label for="countries" class="block mb-2 text-lg font-bold text-main my-auto mr-5">Genre</label> */}
                                        <select id="countries" onChange={(event) => { this.onGenresSelected(event) }} class="bg-gray-50 border border-main text-main text-md rounded-lg focus:ring-0 focus:border-blue-500 block w-full p-1 h-12 my-auto">
                                            <option selected value={"All"}>All Genre</option>
                                            {
                                                this.props.genres.map((genre, index) => {
                                                    return (
                                                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </form>
                                </Container> : null
                        }

                    </div>
                    <div className="lg:col-span-1 lg:justify-end sm:grid-cols-2 flex flex-wrap sm:justify-between sm:w-full sm:pt-5">

                        <Container className='my-auto mr-3 h-auto'>
                            <Pagination className="ml-auto" currentPage={this.props.currentPage} onPageChange={this.onPageChange} totalPage={this.props.totalPage}></Pagination>
                        </Container>
                        <Container className='d-flex w-fit ml-5'>
                            <SearchBar searchResult={this.searchResult} />
                        </Container>
                    </div>
                </div>
            </FilterBarWrapper>
        )
    }
}
export default FilterBar;