import { SelectForm, SelectLabel, SelectStyle } from '../styles/select-style.js'

function Select(props) {
    return (
        <SelectForm>
            <SelectLabel for='filter'>Filter{props.number}</SelectLabel>
            <SelectStyle name='filter'>
                <option value='type'>Type</option>
                <option value='price'>Price</option>
                <option value='weight'>Weight</option>
            </SelectStyle>
        </SelectForm>
    );
}

export default Select;