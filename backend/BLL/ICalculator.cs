using BLL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
   public interface ICalculator
    {
        
        double calculate(Calculation calculation, string useId);

      
    }
}
