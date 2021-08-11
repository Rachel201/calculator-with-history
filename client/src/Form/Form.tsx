import { Icon, IconButton, IDropdownOption, registerIcons, TextField } from '@fluentui/react';
import React, { useEffect, useRef, useState } from 'react';
import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { initializeIcons } from '@fluentui/font-icons-mdl2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons';
import CustomDropdown from '../shared/components/dropdown/Dropdown';
import { Icons } from '../shared/Icon';
import { Icaculate } from '../models/typeCalculator';
import { getErrorMessage } from '../utils/errorMssage';
import { getResult } from '../redux/actions/calculateAction';
import InputResult from '../InputResult.tsx/InputResult';
import calculateReducer from '../redux/reducers/calculateReducer';

initializeIcons();

registerIcons({
  icons: {
    Divider: <FontAwesomeIcon icon={faDivide} />,
    Plus: <FontAwesomeIcon icon={faPlus} />,
    Equals: <FontAwesomeIcon icon={faEquals} />

  }
});
const iconStyles = { marginRight: '8px' };

const blankCaculate: Icaculate = {
  num1: 0,
  num2: 0,
  operator: ''
}

const Form = () => {
  
    const [caculate, setCaculate] = useState(blankCaculate);
    const dispatch = useDispatch()
    const {itemCalc}:any= useSelector(({calculateReducerult}: any) => calculateReducer);

    useEffect(()=>{
        if(itemCalc){
          // blankCaculate.num1
          // blankCaculate.num2
          // blankCaculate.operator
        }
    },[itemCalc]);

    const handleSubmit = (e: any) => {
      e.preventDefault()
      dispatch(getResult(caculate))
    }
    
    const handleChange = (key: string, value: any) => {
      setCaculate({
        ...caculate,
        [key]: value
      });
    }
   
    const optionOprtors: IDropdownOption[] = [
      { key: '+', text: '', data: { icon: 'Plus' } },
      { key: 'x', text: "x", },
      { key: '-', text: "-", },
      { key: '/', text: '', data: { icon: 'Divider' } },
    ]
    return (
      <div className="content-wrapper">
        <form onSubmit={(e) => handleSubmit(e)} className="from-wrapper">
          <TextField
            required
            name='num1'
            onChange={(e: any) => { handleChange('num1', e.target.value) }}
            placeholder=''
            className='text-field'
            value={caculate.num1}
            onGetErrorMessage={getErrorMessage}
          />
          <CustomDropdown options={optionOprtors} label='chose opertor' onChange={handleChange} id='operator' selectedKey={caculate.operator} onRenderTitle={''} />
          <TextField
            required
            name='num2'
            onChange={(e: any) => { handleChange('num2', e.target.value) }}
            placeholder=''
            className='text-field'
            value={caculate.num2}
            onGetErrorMessage={getErrorMessage}
          />

          <IconButton iconProps={faEquals}
            styles={{
              icon: { color: 'black', fontSize: 24 }
            }}
            className="button"
            type='submit'>=</IconButton>

        </form>
        <InputResult/>
      </div>
    );
  }
  export default Form;

