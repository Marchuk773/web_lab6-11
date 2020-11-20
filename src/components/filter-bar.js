import {
    FilterBarContainer, SelectsContainer,
    SearchBoxContainer, InputStyle, ButtonStyle
} from '../styles/filter-bar-style'
import Select from '../components/select'
import { useState } from 'react';

function FilterBar() {
    return (
        <FilterBarContainer>

            <SelectsContainer>
                <Select number={1} />
                <Select number={2} />
                <Select number={3} />
            </SelectsContainer>

            <SearchBox />
        </FilterBarContainer>
    );
}

function SearchBox() {

    const [text, setText] = useState('');

    return (
        <SearchBoxContainer>
            <InputStyle value={text} placeholder="Search.." onChange={e => (setText(e.target.value))} />
            <ButtonStyle onClick={e => (e.preventDefault())}>Search</ButtonStyle>
        </SearchBoxContainer>
    );
}

export default FilterBar;