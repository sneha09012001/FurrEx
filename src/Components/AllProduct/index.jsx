import React from "react";
import user from "./allData.json"
import ReactPaginate from "react-paginate";
import { useState } from "react";
import './index.css';
import { Next, Privious } from "../../res/Icons/Icon";

const AllProduct = () => {
    const [users,setUsers] = useState(user.slice(0,1000));
    const [pageNumber,setPageNumber] = useState(0);

    const usersperpage = 8;
    const pagesVisited = pageNumber * usersperpage;

    const pageCount = Math.ceil(users.length / usersperpage);

    const changePage = ({selected}) => {
        setPageNumber(selected)

    }

   const displayUsers = users.length && users.slice(pagesVisited, pagesVisited + usersperpage).map((user,index) => {
        return (

                <div className="productBox  " key={`productdata_${user},${index}`}>
                    <div className="flex col" >
                        <img src={user?.allproductimg} alt="" />
                        <div className="flex col gap-2 text-left p-1">
                        <div className="product-name flex col gap-1 ">
                        <p>{user?.allproductname}</p>
                        <span>{user?.allproductweight}</span>
                        </div>
                        <h6>{user?.allproductOwner}</h6>
                        <div className="productCase flex row gap-1 middle">
                            <span className="flex row">Rs.<div>{user?.allproductamount}</div></span>
                            <p>{user?.allproductcaseback}</p>
                        </div>
                        <button>Buy Now</button>
                        </div>
                        </div>   
                       
                    </div>
                 
                     
                 
        )
   })
   return(
      
      <div className="container h-full flex col gap-4 center middle  ">
        <div className="container allproduct flex row gap-3 wrap  center ">
        {displayUsers}</div><div className="flex-1"></div> <ReactPaginate
        previousLabel = {<Privious />}
        previousClassName={"previous"}
        nextLabel={<Next />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationbttn"}
        previousLinkClassName={"previousbttn"}
        nextLinkClassName={"nextbttn"}
        disabledClassName={"paginationDisable"}
        activeClassName={"pagitationActive"}
        />
      </div>
    ) 
 }
export default AllProduct