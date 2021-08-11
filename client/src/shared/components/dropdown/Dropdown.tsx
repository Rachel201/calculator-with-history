import * as React from 'react';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { useState } from 'react';
import './dropdown.scss'
import { Icon } from '@fluentui/react';



interface MyProps {
  options: any;
  label: string
  selectedKey: any
  readOnly ?:Boolean
  onChange?:any
  onRenderOption?:any
  onRenderTitle?:any
  id?:string
}
const iconStyles = { marginRight: '15px' };
// const dropdownStyles = { dropdown: { width: 300 } };

export const CustomDropdown: React.FunctionComponent<MyProps> = (props) => {
  const {onChange, options=[{key:'1',text:'',data:{icon:'Add'}}], label, selectedKey, id} = props;
  const [selected, setSelected] = useState<String | undefined>("");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  const onRenderTitle = (options: any): JSX.Element => {
    const option = options?.[0];
    return (
      <div>
        {option?.data && option?.data?.icon && (
          <Icon style={iconStyles} iconName={option?.data?.icon}  title={option?.data?.icon} />
        )}
        <span className="zise-option">{option?.text}</span>
      </div>
    );
  };

  const onRenderOption = (option: any): JSX.Element => {
    return (
      <div>
        {option?.data && option?.data?.icon && (
          <Icon style={iconStyles} iconName={option?.data?.icon} aria-hidden="true" title={option?.data?.icon}/>
        )}
        <strong>{option?.text}</strong>
      </div>
    );
  };

  return (
      <div>
        <Dropdown
          // componentRef={dropdownRef}
          // label={label}
          onChange={(e, selectedOption) => {
            console.log(e + "" + selectedOption?.key);
            setSelected(selectedOption?.data||selectedOption?.text);
            onChange(id, selectedOption?.key);
            // let getSelectedIndex=options.findIndex((x:any)=>x.text==selectedOption?.key);
            // setSelectedIndex(getSelectedIndex);
          }}
          onRenderTitle={onRenderTitle}
          onRenderOption={onRenderOption}
          options={options}
          required
          className="dropdown-field"
        />
      </div>   
  );
 
};
export default CustomDropdown;


