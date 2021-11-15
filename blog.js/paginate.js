

const paginate = (data) =>{

   const itemsPerpage = 4;
   const numberOfPages = Math.ceil(data.length / itemsPerpage);
   
   const  newFollowers = Array.from({length:numberOfPages},
       (_, index) =>{

    const start = index * itemsPerpage;
   return data.slice(start , start + itemsPerpage)
         })
    return newFollowers
}

export default paginate;