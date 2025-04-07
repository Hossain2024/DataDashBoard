import { useState } from "react";


const SearchBar = ({items, onFilter})=>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        const filtered = items.filter(item =>
          item.datetime.includes(value)
        );
        onFilter(filtered);
      };

    return(
        <div>
             <label>Search  by datetime: </label>
            <input
                type = "text"
                placeholder="seach.."
                value ={searchTerm}
                onChange = {handleSearch}
            />
        </div>
       
    )

}
export default SearchBar