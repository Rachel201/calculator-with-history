import react, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCalcListHistory, removeItemFromList } from '../redux/actions/calculateAction';
import calculateReducer from '../redux/reducers/calculateReducer';
import { Spinner, SpinnerSize } from '@fluentui/react';
import CustemList from '../shared/components/detailList/DetailList';
import { RootState } from '../redux/store';

const ListHistory = () =>{
  const dispatch = useDispatch()
 const columns = [       
  {key: 'column1', name: 'Number1', fieldName: 'num1', minWidth: 100, maxWidth: 200},
  {key: 'column2', name: 'Operator', fieldName: 'operator',minWidth: 100, maxWidth: 200 },
  {key: 'column2', name: 'Number2', fieldName: 'num2',minWidth: 100, maxWidth: 200},
  {key: 'column2', name: 'Result', fieldName: 'result',minWidth: 100, maxWidth: 200 },
  {key: 'column2', name: 'Delete', fieldName: 'delete',minWidth: 100, maxWidth: 200},
  {key: 'column2', name: 'Update', fieldName: 'update',minWidth: 100, maxWidth: 200},
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
    return calculateReducer?.itemsHistory?(
      <div>
          <CustemList columns={columns} allItems={calculateReducer.itemsHistory} removeItem={removeItem} updateItem={updateItem}/>
      </div>
    ):(<Spinner className="spinner"size={SpinnerSize.large}/>)
}
export default ListHistory;
