export const getErrorMessage =  (value: string) => {
    let regex="^[0-9]*$"
    let isValid=null
    
     isValid=value.match(regex)
     if(value=="")
      isValid="start value"
    
    console.log("isValid: ",isValid)
    return isValid?"": `input mmust to be number`;
  };