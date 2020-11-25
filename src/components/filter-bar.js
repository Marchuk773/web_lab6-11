import {
    FilterBarContainer, SelectsContainer,
    SearchBoxContainer, InputStyle, ButtonStyle
} from '../styles/filter-bar-style'
import Select from '../components/select'
import React, { useState } from 'react';

function FilterBar({ type, manufacturer, search }) {


    return (
        <FilterBarContainer>

            <SelectsContainer>
                <Select name='Type' options={['Drill', 'Hammer']} state={type} />
                <Select name='Manufacturer' options={['DnisterM', 'SuperFactory', 'OnlyHammers']}
                    state={manufacturer} />
            </SelectsContainer>

            <SearchBox state={search} />
        </FilterBarContainer>
    );
}

function SearchBox({ state: [searchText, setSearchText] }) {

    const [text, setText] = useState('');

    return (
        <SearchBoxContainer>
            <InputStyle value={text} placeholder="Search.." onChange={e => (setText(e.target.value))} />
            <ButtonStyle onClick={e => (setSearchText(text))}>Search</ButtonStyle>
        </SearchBoxContainer>
    );
}

export default FilterBar;