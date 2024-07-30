import React, {Component} from 'react';
import styled from 'styled-components';
 import SearchIcon from "../../assets/search/search.gif";
const SearchBox = styled.div`
    ${'' /* max-width: 50rem; */}
    margin-left: auto;
`
const SearchInput = styled.input`
    ${'' /* height: 2em; */}
    border-radius: 30px;
    font-size: 16px;
`
const SearchInputWrapper = styled.div`
    padding:5px;
    border: 0px;
    ${'' /* border-radius: 30px; */}
    background-color: white;
    ${'' /* margin-right: 3rem; */}
    display: flex;
    ${'' /* padding-right: 15px; */}
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
`
const SearchIconImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1rem;
    margin: auto;
`
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            typingTimer:'',
            doneTypingTime:1000,
            typingTimeout:0,
            typing: false,
            name:''
        }

    }
    handleInputChange = (event) =>{
        // this.props.searchResult = event.target.value;
        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        self.setState({
        name: event.target.value,
        typing: false,
        typingTimeout: setTimeout(function () {
            self.sendToParent(self.state.name);
            }, 500)
        });
        // console.log(self.state);
    }
    sendToParent = (event) =>{
        this.props.searchResult(event);
    }
    typing=(event)=>{
        clearTimeout(this.state.typingTimer);
        this.setState({typingTimer:  setTimeout(this.handleInputChange(event), this.state.doneTypingTime)});
    }
    clearTime=()=>{
        clearTimeout(this.state.typingTimer);
        // console.log(" I'm cleare timepout",this.state.doneTypingTime)
    }

    render(){
        return(
            <SearchBox>
                <SearchInputWrapper className='p-0 w-full sm:rounded-lg md:rounded-full'>
                    <SearchInput placeholder="Search " className='m-auto sm:m-0 md:ml-3 sm:w-32 lg:w-auto sm:!h-5' type='text' onKeyUp={(event)=>{this.handleInputChange(event)}}/>
                    {/* <SearchIconImg className='sm:hidden md:flex' src={SearchIcon}></SearchIconImg> */}
                </SearchInputWrapper>
            </SearchBox>
        )
    }
}
export default SearchBar;