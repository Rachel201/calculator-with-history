import { Spinner, SpinnerSize, TextField } from "@fluentui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const Result = ()=>{
    const calculateReducer= useSelector((state:RootState) => state.calculateReducer)

    console.log("calculateReducerult: "+calculateReducer?.result)
    useEffect(() => {
        if(calculateReducer?.result!=0){
            setResult(calculateReducer?.result)
            console.log("result calc: "+isResult)
        }
      }, [calculateReducer])

      const [isResult,setResult]=useState()
    // calculateReducerult?.result
    return isResult?(
        <TextField
          readOnly
          name='result'
          placeholder=''
          className='text-field textFild2'
          value={isResult}
        />
    ):(<Spinner className="spinner"size={SpinnerSize.xSmall}/>);
}
export default Result;