import axios from 'axios';
import { Icaculate } from '../../models/typeCalculator';
import { basicUrl } from '../../shared/config';
import { CACULATE, ERROR_CALC, HISTORY_LIST, UPDTATE_LIST_CALC } from './actionTypes';


export const getResult = (dataCaculate:Icaculate)=> async (dispatch: any) =>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    console.log("into to server: "+dataCaculate)
    axios.post<Icaculate>(basicUrl+'/Calc/getCalcResult',dataCaculate)
    .then((res)=>{
        if(res.status===200){
            dispatch({
                type: CACULATE,
                result: res.data
              })
        }
        console.log("to connect serevr:"+res.data)
    })
    .catch(error=>
    //     dispatch({
    //     type:ERROR_CALC,
    //     error:error.response
    // })
    console.log('error: '+error)
    )
}

export const getCalcListHistory=()=>(dispatch:any)=>{
    debugger;
    axios.get(basicUrl+"/listHistory/getListHistory") .then((res)=>{
        if(res.status==200){
            dispatch({
                type: HISTORY_LIST,
                listValue: res.data
              })
              console.log("res.data: "+res.data)
        }
    })
    .catch(error=>dispatch({
        type:ERROR_CALC,
        error:error.response
    }))

}

export const removeItemFromList = async (selectCalc:any) =>(dispatch:any)=>{
    const data = selectCalc;
     axios.post(
        "https://localhost:44394/api/listHistory/deleteListHistory", data
    ).then((res) => {
        if (res.status == 200) {
           dispatch({
            type: CACULATE,
            listValue: res.data
           })
        }
        else {
            throw new Error("not result");

        }
    })
        .catch(({ error }) => {
            throw console.log('error: '+error);
        });;
};

const updateCalcFromTheList = async (selectCalc:any) =>(dispatch:any)=>{
   dispatch({
       type:UPDTATE_LIST_CALC,
       item:selectCalc.data
   })
};