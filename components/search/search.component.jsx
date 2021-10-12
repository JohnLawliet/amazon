import { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slices/basketSlice';
import { SearchIcon } from '@heroicons/react/outline';
import { Input, SearchContainer, SearchResultCategory, SearchResultContainer, SearchResultInfoContainer, SearchResultItem, SearchResultTitle } from './search.styles';
import Image from 'next/image'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const products = useSelector(selectProducts)

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <SearchContainer>
            <Input 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
            <SearchIcon className="h-12 p-4 " />
            {
                searchTerm !== '' && (
                    <SearchResultContainer>
                    {
                        products[0].filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(item => (
                            <SearchResultItem key={item.id}>
                                <Image 
                                    src={item.image}
                                    height={40}
                                    width={40}
                                />
                                <SearchResultInfoContainer>
                                    <SearchResultTitle>{item.title}</SearchResultTitle>
                                    <SearchResultCategory>{item.category}</SearchResultCategory>
                                </SearchResultInfoContainer>
                            </SearchResultItem>
                        ))
                    }
                    </SearchResultContainer>
                )
            }            
        </SearchContainer>
    )
}

export default Search
