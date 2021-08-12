import * as React from 'react';
import { DetailsList, Selection, IColumn, SelectionMode, DetailsRow, IDetailsFooterProps } from '@fluentui/react/lib/DetailsList';
import { DefaultButton, Icon, IRenderFunction } from '@fluentui/react';
import { useEffect, useState } from 'react';
import "./detaiList.scss"
import { Icons } from '../../Icon';
import { useDispatch } from 'react-redux';
import { removeItemFromList } from '../../../redux/actions/calculateAction';





export interface IDetailsListItem {
  key: number;
  name: string;
  value: number;
}

export interface IDetailsListState {
  selectionDetails?: string;
  columns: [] | IColumn[];
  allItems:any[];
  rederRow?:string;
  renderItemColumn?:any;
  removeItem?:any;
  updateItem?: any;

}

const footerStyle = {
  root: {
      background: '#E1E1E1',
  }
}
// renderItemColumn=()=>{} ,
const CustemList: React.FunctionComponent<IDetailsListState> = (props) => {
  const { allItems, columns,removeItem,updateItem} = props
  
  const [state, setState] = useState({
    items: allItems,
    columns: columns,
  });

  const dispatch = useDispatch()

  
  const renderItemColumn = (item: any, index: any, column: any) => {
    let fieldContent = item[column.fieldName];
    console.log("fieldContent in culmn",fieldContent)
    switch (column.fieldName) {
        case 'delete':
          item = allItems[index]
          return <DefaultButton text=""iconProps={Icons.delete} onClick={()=>dispatch(removeItemFromList(item))}/> 
        
          case 'update':
            item = allItems[index]
            return <DefaultButton text=""iconProps={Icons.delete} onClick={()=>dispatch(updateItem(item))}/>
             
          
        default:
            return <span >{fieldContent}</span>;
    }
}
 

  let onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (detailsFooterProps?: IDetailsFooterProps) => {
    return (
      <DetailsRow
        {...detailsFooterProps}
        columns={detailsFooterProps?.columns}
        item={{}}
        itemIndex={-1}
        styles={footerStyle}
    
      />
    );
  };

  return (
    <div>
      <div className="continar">
        <DetailsList
          items={allItems}
          columns={columns}
          selectionMode={SelectionMode.none}
          onRenderDetailsFooter={onRenderDetailsFooter}
          onRenderItemColumn={renderItemColumn}
        />
      </div>
   </div>
  );
}


export default CustemList;
