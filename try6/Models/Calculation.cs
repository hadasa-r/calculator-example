using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace try6.Models
{
    public class Calculation
    {
        public int Id { get; set; }
        public double Num1 { get; set; }
        public Operator Operator { get; set; }
        public double Num2 { get; set; }
        public double Result { get; set; }
    }

    public enum Operator
    {
        plus=1,
        minus=2,
        dob=3,
        div =4
    }
}
