import React, { useState } from 'react'
import News from './News.jsx'
const Predict = () => {
  const [searchText,setSearchText]=useState('');
  const [search,setSearch]=useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
     setSearch(searchText);
  }

  return (
    <div id ="predict">
      <h2 className="flex flex-col justify-center items-center text-2xl">
        Enter the News Headline
      </h2>
      <form
        onSubmit={ handleSubmit }
        className="flex flex-col justify-center items-center"
      >
        <textarea
          type="text"
          id="message"
          rows="1"
          // value={searchText}
          // name="searchText"
          cols="100"
          className="p-3 mb-3 text-black rounded-sm"
          placeholder="Enter the News"
          onChange={(event) =>setSearchText(event.target.value)}
        />
        <button
          type="submit"
          className="p-3 m-4 w-60 bg-blue-600 rounded-xl hover:bg-yellow-700"
        >
          Predict
        </button>
      </form>
      {

      search&&<News search={search}/>
      }
    </div>
  );
}

export default Predict