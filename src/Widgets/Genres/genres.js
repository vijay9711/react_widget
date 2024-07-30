import React,{ Component } from "react";
import styled from "styled-components";

const GenresWrapper = styled.div`
    display: flex;
    ${'' /* overflow-x: scroll; */}
    flex-wrap:wrap;
    width: 100%;
    height: auto;
    margin: 10px 0px;
    padding: 4px 0px;
`
const Genre = styled.label`
    display: flex;
    flex: none;
    margin: 5px;
    border: 1px solid var(--color-main);
    padding: 5px 15px;
    align-items: center;
    text:center;
    border-radius: 30px;
    display: flex;
    font-size: 16px;
`
class Genres extends Component{
    constructor(props){
        super(props)
        this.state={
            genres:[]
        }

    }
    componentWillReceiveProps = (props,newProps) =>{
        this.props.genres.map(genre=>{
            genre.checked = false;
        })
        this.setState({ genres : this.props.genres}) 
    }
    getSelectedGenre =(index)=>{
        let genreList = this.state.genres;
        genreList[index].checked = !genreList[index].checked
        this.setState({genres: genreList});
        // console.log(this.state.genres, " list ");
        this.props.onGenresSelected(genreList)
    }
    render(){
        return(
            <GenresWrapper className="">
                {this.props.genres.map((genre,index)=>{
                    return (
                        <Genre onClick={()=>{this.getSelectedGenre(index)}} className={genre.checked === false ? 'bg-main text-white':'bg-white'} id={genre.id}>{genre.name}</Genre>
                    )
                })}
            </GenresWrapper>
        )
    }
}
export default Genres;

// function Genres(props) {
//     const [selectedGenres, setSelectedGenres] = useState([]);

//     useEffect(() => {
//         // Update the document title using the browser API
//         props.genres.map(genre=>{
//             genre.checked = false;
//         })
//         setSelectedGenres(props.genres)
//     });
//     getSelectedGenre =(index)=>{
//         let genreList = selectedGenres;
//         setSelectedGenres([]);
//         genreList[index].checked = !genreList[index].checked
//         setSelectedGenres(genreList);
//         console.log(selectedGenres, " list ");
//         props.onGenresSelected(selectedGenres)
//     }
//     function getGenre (genre,index){
//         let genreHTML = <Genre onClick={()=>{getSelectedGenre(index)}} className={genre.checked === false ? 'bg-primary  color-white':'bg-white'} id={genre.id}>{genre.name}</Genre>
//         return genreHTML
//     }
//     return (
//         <GenresWrapper className="">
//             {selectedGenres ? selectedGenres.map((genre,index)=>{
//                 return (
//                     getGenre(genre,index)
                    
//                 )
//             }):''}
//         </GenresWrapper>
//     )
// }
// export default Genres;