import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])
    let employess = [
      {
        name: "John Doe",
        post: "Software Engineer"
      },
      {
        name: "Jane Smith",
        post: "Product Manager"
      },
      {
        name: "Alice Johnson",
        post: "UX Designer"
      },
      {
        name: "Bob Brown",
        post: "Data Scientist"
      }
    ]
    useEffect(() => {
      if (searchValue === '') {
        setData(employess)
      }
      else {
        setData(data)
      }
    }, [searchValue])
  
    const handleChange = (e) => {
      setSearchValue(e.target.value)
    }
  
    const handleSearch = (value, data) => {
      const filteredData = data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      setData(filteredData)
      console.log('search')
      return filteredData ? filteredData : data
    }
    return (
      <>
      <Box sx={{display:'flex',backgroundColor: 'primary.light', borderRadius:'40px ',pr:'4px',pt:'4px',pb:'4px',border: '2px solid primary.light',height:'25px'}}>
      <SearchIcon sx={{color:'#000',fontSize:'20px',pt:0.5,ml:0.8,color:'#fff'}}/>
        <InputField
              type={'text'}
              placeholder={'search files..'}
              onChange={handleChange}
              name={'search'}
              value={searchValue}
              style={{
                fontSize: '15px',
                fontWeight: 400,
                border: 'none',
                height: '25px',
                color:'common.white',
                backgroundColor:'primary.light'
              }}
           />
            <SubmitButton style={{fontSize:"11px" ,height:"100%"}} 
            text={'Search'}
            onClick={() => handleSearch(searchValue, employess)}
            />
           </Box>
        </>
    );
  };
  export default Search;
