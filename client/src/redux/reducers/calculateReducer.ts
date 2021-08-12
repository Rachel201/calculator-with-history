import { Icaculate } from '../../models/typeCalculator';
import {CACULATE, ERROR_CALC, HISTORY_LIST, REMOVE_LIST_CALC, UPDTATE_LIST_CALC} from '../actions/actionTypes';

interface IResultFromServer{
   opartor?:string,
   history?:Icaculate[],
   error?:string,
   result:Number,
}

const initialState={
   opartor:null,
   itemsHistory:null,
   result:0,
   error:null,
   itemCalc:null,
}

export default function(state=initialState,action:any){
   switch(action.type){
      case CACULATE:
         console.log("action.listValue : "+action.value)
         return{            
            ...state,
            result:action.result,
         }
        case ERROR_CALC:
            return{ 
               ...state,
               error:action.error,
            }
         case HISTORY_LIST:{
            console.log("action.listValue : "+action.listValue)
            return{ 
               ...state,
               itemsHistory:action.listValue,
            }
         } 
         case REMOVE_LIST_CALC:
            return{
               ...state,
               itemsHistory:action.listValue,
            }
         case UPDTATE_LIST_CALC:
         {
            return{ 
               ...state,
               itemCalc:action.itemCalc,
            }
         }
       default:
          return{ ...state}  
   }
}
