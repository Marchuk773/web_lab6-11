import { SelectForm, SelectLabel, SelectStyle } from '../styles/select-style.js'

function Select({ name, options, state: [value, setValue] }) {
    return (
        <SelectForm>
            <SelectLabel htmlFor='filter'>{name}</SelectLabel>
            <SelectStyle name='filter' value={value} onChange={e => setValue(e.target.value)}>
                <option value='None'>No Filter</option>
                {options.map((thisOption) =>
                    <option key={thisOption} value={thisOption}>{thisOption}</option>
                )}
            </SelectStyle>
        </SelectForm>
    );
}

export default Select;