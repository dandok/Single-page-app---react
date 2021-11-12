import React, { useEffect } from "react";
import { Menu, Dropdown, Button } from 'antd';
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io'
import Drop from './Dropdown'


function Searchbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  
  const clientId = '-CwUgXJQw1Rziz2a7kRyLTrAlCkMUVSofNsa2t_gUL4';
  const url = `https://api.unsplash.com/photos/?client_id=${clientId}`;
  const url2 = `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${input}&client_id=${clientId}`;

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setResult(response.data);
    }).catch(e => {
      console.log(e.message)
    });

  }, [])

  const handleChange = (event) => {
    event.preventDefault()

    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(input)
    axios
    .get(url2)
    .then(response => {
      setResult(response.data.results);
      console.log(response.data)
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  };

  

  return (
    <>

  <div className="app">
    <div className="Searchbar">
      <div className='search-icon'>{<BsSearch />}</div>
        <input 
          className='input'
          onChange={handleChange} 
          type="text" 
          name="image" 
          value={input} 
          placeholder="Find Something..."
        />
      <button className='search' onClick={handleSubmit} type="submit">Search</button>
    </div>
      <div className='app-notification'>
        {/* <Dropdown overlay={menu} placement='topRight' arrow> */}
          <Button className='notification'>{<IoMdNotifications size={30} color='#3A319E'/>}</Button>
       {/* </Dropdown> */}
      </div>
      <div className='avatar'>
        <i className="fas fa-user-circle"></i>
        <button className='abigail'>Abigail{<IoIosArrowDown/>}</button>
      </div>
    </div>
    <Drop />
    <div className="result">
     {result.map((image, index) => ( 
      
      <div className="card" key={index}>
        <div style={{backgroundImage: `url(${image.urls.thumb})`, width: '200px', height:'300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px'}}>
          <div className='details'>
            <div className="username">{image.user.name}</div>
            <div className="location">{image.user.location}</div>
          </div>
        </div>
      </div>
      ))}
    </div>
  </>
)}

export default Searchbar