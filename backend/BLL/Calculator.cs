using BLL.Models;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BLL
{
    public class Calculator : ICalculator
    {
        DB db;

        public List<IOperation> Operators { get; set; }
       public Calculator(DB _db)
        {
            db = _db;
            Operators = new List<IOperation>()
            {
                 new SumOperation(),new DiffOperation(),new MultiplyOpertion(),new DivideOpertion()
            };
        }
     
        // calculate the result 
        public double calculate(Calculation calculation,string userID)
        {
            
            //check the opertore is beetwen opertore in calculator
            foreach (var binaryOperator in Operators.Where(x => x.Name == calculation.Operator))
            {
                calculation.Result= binaryOperator.calculate(calculation.Num1, calculation.Num2);
                db.UpdateItemFromHistoryInDB(calculation, userID);
                return calculation.Result;
            }
            throw new Exception("error in caculate");
        }
    }
}

     
    
