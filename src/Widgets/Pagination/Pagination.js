import React, { useEffect } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './Pagination.css';
// class Pagination extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             pageNumber:this.props.currentPage
//         }
//     }
//     nextPage = () => {

//         let page = this.state.pageNumber + 1;
//         if(this.props.totalPage/2 >= page){  
//             this.setState({pageNumber: page})
//             this.props.onPageChange(page);
//         }
//     }
//     previousPage = () => {
//         if(this.state.pageNumber > 1){
//             let page = this.state.pageNumber - 1;
//             this.setState({pageNumber: page});
//             this.props.onPageChange(page);
//         }
//     }
//     getPage = (event) => {
//         // event.preventDefault();
//         let currentPage = event.target.value == '' ? 1 : event.target.value;
//         if(this.props.totalPage/2 >= currentPage){  
//             console.log(currentPage)
//             this.setState({pageNumber: currentPage});
//             this.props.onPageChange(currentPage);
//         }
//     }

//     render(){
//         const pageNumber = this.state.pageNumber;
//         return(
//             <div className="flex">
//                 <div className="justify-center items-center grid grid-cols-4">
//                     <div className="bg-main col-span-1 lg:w-18 lg:h-18 sm:w-14 sm:h-14 rounded-full items-center text-center grid justify-items-center cursour-pointer" onClick={this.previousPage}>
//                         <img src={next} className="cursor-pointer transform rotate-90 lg:w-5 sm:w-4"></img> 
//                     </div>
//                     <div className="col-span-2 flex drop-shadow-md rounded-xl pr-5">
//                         <input className="lg:w-20 lg:h-14 sm:w-10 sm:h-10 items-center border-1 border-black text-center m-auto rounded-lg text-lg" value={pageNumber} onChange={this.getPage} /> <div className='w-auto items-center border-1 flex border-black text-center m-auto rounded-lg text-xl'>/ {this.props.totalPage/2}</div>
//                     </div>
//                     <div className="bg-main col-span-1 lg:w-18 ml-auto lg:h-18 sm:w-14 sm:h-14  rounded-full items-center text-center grid justify-items-center cursor-pointer" onClick={this.nextPage}>
//                         <img src={next} className="transform -rotate-90 lg:w-5 sm:w-4"></img>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Pagination;


const Pagination = (props) => {
    useEffect(() => {

    }, [])
    return (
        <>
        <div className='sm:max-w-[30rem] md:max-w-auto'>
        <ResponsivePagination
                maxWidth={20}
                current={props.currentPage}
                total={props.totalPage}
                onPageChange={props.onPageChange}
            />
        </div>
            
        </>
    )
}
export default Pagination;