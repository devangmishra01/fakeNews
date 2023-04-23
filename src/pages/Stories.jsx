import React, { useEffect } from 'react'

const Stories = () => {
    let isLoading = true;
    let API = "https://hn.algolia.com/api/v1/search?query=html"
 
 const fetchApiData =async(url)=>{
    try{
        const res=await fetch(url);
        const data = await res.json();
        console.log(data);
        isLoading=false;
    }
    catch(err){
        console.log(err);
 }
};

useEffect(()=>{
    fetchApiData(API);
},[]);
    return (
    <div> My Stories</div>
  )
}

export default Stories