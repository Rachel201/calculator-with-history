using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public interface IOperation
    {
        double calculate(double num2, double num1);

        string Name { get; }

    }
}
