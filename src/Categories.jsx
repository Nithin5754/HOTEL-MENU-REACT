import React from 'react';

const Categories = ({filterItem,isCategories}) => {
  return (
   <div className="btn-container">
    {
      isCategories.map((category,index)=>{
        return(
          <button type='button' key={index}  className='filter-btn' onClick={()=>filterItem(category)}>{category}</button>

        )
      })
    }
   </div>
  );
};

export default Categories;
