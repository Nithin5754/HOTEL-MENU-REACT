import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


  const newCategoriesAray=['all',...new Set(items.map((item)=>item.category))]
     



function App() {
  const [isMenu,setMenu]=useState(items)
  const [isCategories,setCategories]=useState(newCategoriesAray)

  const filterItem=(category)=>{
    if(category==='all'){
     return setMenu(items)
    }
const newCategories=items.filter((menu)=>menu.category===category)
    setMenu(newCategories)
    return 
  }
  return    <main>
  <section className='menu section'>
    <div className="title">
       <h2>Menu</h2>
    </div>
    <Categories filterItem={filterItem} isCategories={isCategories} />
    <Menu isMenu={isMenu}/>
  </section>
</main>
}

export default App;
