import React from 'react';
import next from "../../assets/movies/next.png";

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pageNumber:this.props.currentPage
        }
    }
    nextPage = () => {
        let page = this.state.pageNumber + 1;
        // page = page + 1;
        this.setState({pageNumber: page})
        this.props.onPageChange(page);
    }
    previousPage = () => {
        if(this.state.pageNumber > 1){
            let page = this.state.pageNumber - 1;
            // page = page - 1;
            this.setState({pageNumber: page});
            this.props.onPageChange(page);
        }
    }
    getPage = (event) => {
        // event.preventDefault();
        console.log(this.props)
        if(this.props.totalPage > event.target.value){  
            this.setState({pageNumber: event.target.value});
            this.props.onPageChange(event.target.value);
        }
    }
    render(){
        const pageNumber = this.state.pageNumber
        return(
            <div className="flex px-10">
                <div className="flex max-h-12">
                    <div className="bg-main w-14 h-14 rounded-full items-center text-center grid justify-items-center cursour-pointer" onClick={this.previousPage}>
                        <img src={next} className="cursor-pointer transform rotate-90 w-5"></img> 
                    </div>
                    <div className="flex shadow-xl">
                        <input className="w-10 h-full mx-4 items-center border-1 border-black text-center m-auto rounded-lg" value={pageNumber} onChange={this.getPage} />
                    </div>
                    <div className="bg-main w-14 h-14 rounded-full items-center text-center grid justify-items-center cursor-pointer" onClick={this.nextPage}>
                        <img src={next} className="transform -rotate-90 w-5"></img>
                    </div>
                </div>
            </div>
        )
    }
}
// const Pagination = (props) =>{
//     const [count, setCount] = useState(props.currentPage);
//     const nextPage = () => {
//         if(count > 0){
//             setCount(count + 1);
//             this.onPageChange();
//         }
//     }
//     function previousPage(){
//         if(count > 1){
//             setCount(count - 1)
//         }
//     }
//     return (
//         <div className="flex p-10">
//             <div className="flex">
//                 <div className="bg-main w-14 h-14 rounded-full items-center text-center grid justify-items-center cursour-pointer" onClick={previousPage}>
//                     <img src={next} className="transform rotate-90 w-5"></img> 
//                 </div>
//                 <div className="flex shadow-xl">
//                     <input className="w-10 h-full mx-4 items-center text-center m-auto rounded-lg" value={count} />
//                 </div>
//                 <div className="bg-main w-14 h-14 rounded-full items-center text-center grid justify-items-center" onClick={nextPage}>
//                     <img src={next} className="transform -rotate-90 w-5"></img>
//                 </div>
//             </div>
//         </div>
//     )
// }
export default Pagination;