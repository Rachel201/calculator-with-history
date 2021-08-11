using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Models
{
  public  class Calculation
    {
        public int id { get; set; }
        public double Num1 { get; set; }
        public string Operator { get; set; }
        public double Num2 { get; set; }
        public double Result { get; set; }


    }
}
