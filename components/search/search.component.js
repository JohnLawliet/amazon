import { useEffect, useState } from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/slices/basketSlice';
import { SearchIcon } from '@heroicons/react/outline';
import { Input, SearchContainer } from './search.styles';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const products = useSelector(selectItems)

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        console.log(products)
    }, [searchTerm, useSelector])

    return (
        <SearchContainer>
            <Input 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
            <SearchIcon className="h-12 p-4 " />
        </SearchContainer>
    )
}

export default Search
