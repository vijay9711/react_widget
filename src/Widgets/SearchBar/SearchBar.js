import React, {Component} from 'react';
import styled from 'styled-components';
 import SearchIcon from "../../assets/search/search.gif";
const SearchBox = styled.div`
    max-width: 30rem;

`
const SearchInput = styled.input`
    height: 4rem;
    border-radius: 30px;
    font-size: 16px;
    padding: 15px;
`
const SearchInputWrapper = styled.div`
    border: 0px;
    border-radius: 30px;
    background-color: white;
    height: 4rem;
    margin-right: 3rem;
    display: flex;
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
        console.log(self.state);
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
        console.log(" I'm cleare timepout",this.state.doneTypingTime)
    }

    render(){
        return(
            <SearchBox>
                <SearchInputWrapper className='p-0 '>
                    <SearchInput className='w-80' type='text' onKeyUp={(event)=>{this.handleInputChange(event)}}/>
                    <SearchIconImg src={SearchIcon}></SearchIconImg>
                </SearchInputWrapper>
            </SearchBox>
        )
    }
}
export default SearchBar;