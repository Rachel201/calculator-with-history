import react, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCalcListHistory, removeItemFromList } from '../redux/actions/calculateAction';
import calculateReducer from '../redux/reducers/calculateReducer';
import { Spinner, SpinnerSize } from '@fluentui/react';
import CustemList from '../shared/components/detailList/detailList';
import { RootState } from '../redux/store';

const ListHistory = () =>{
  const dispatch = useDispatch()
 const columns = [       
  {key: 'column1', name: 'num1', fieldName: 'name', minWidth: 100, maxWidth: 200},
  {key: 'column2', name: 'opertor', fieldName: 'value',minWidth: 100, maxWidth: 200 },
  {key: 'column2', name: 'num2', fieldName: 'value',minWidth: 100, maxWidth: 200},
  {key: 'column2', name: 'result', fieldName: '',minWidth: 100, maxWidth: 200 },
  {key: 'column2', name: 'delete', fieldName: 'delete',minWidth: 100, maxWidth: 200},
  {key: 'column2', name: 'update', fieldName: 'update',minWidth: 100, maxWidth: 200},
];

const result= useSelector((state:RootState) => state.calculateReducer.result)
useEffect(()=>{
  console.log("result: "+result)
  dispatch(getCalcListHistory())
},[result])



const removeItem = (item:any) => {
  dispatch(removeItemFromList(item));
}

const updateItem = (item:any) =>{
  dispatch(updateItem(item));

}
const calculateReducer=useSelector(({calculateReducer}:any)=>calculateReducer)
console.log("calculateReducer?.itemsHistory: "+calculateReducer?.itemsHistory?.itemsHistory)
    console.log("calculateReducer: "+calculateReducer)
    return calculateReducer?.itemsHistory?(
      <div>
          <CustemList columns={columns} allItems={calculateReducer.itemsHistory} removeItem={removeItem} updateItem={updateItem}/>
      </div>
    ):(<Spinner className="spinner"size={SpinnerSize.large}/>)
}
export default ListHistory;
