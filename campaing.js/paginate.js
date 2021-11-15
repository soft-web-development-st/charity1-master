
const paginates = (data) =>{

    const  itemPerPage = 4;
    const  numberOfPages = Math.ceil(data.length / itemPerPage);
 
    const newFollowers = Array.from({length:numberOfPages},
        (_, index) =>{

    const start = index * itemPerPage;
    return data.slice( start,start + itemPerPage) 
        })

        return newFollowers;

}

export default paginates