using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace try6.Models
{
    public class CalcRepository : ICalcRepository
    {
 
        private List<Calculation> calculations = new List<Calculation>();
        private int _nextId = 1;

        public CalcRepository()
        {
            Add(new Calculation { Num1 =1, Num2  =2,Operator = Operator.plus });
        }

        public IEnumerable<Calculation> GetAll()
        {
            return calculations;
        }

        public Calculation Add(Calculation calc)
        {
            if (calc == null)
            {
                throw new ArgumentNullException("calc");
            }
            calc.Id = _nextId++;
            CalcResult(calc);
            calculations.Add(calc);
            return calc;
        }
        public bool DeleteCalc(int id)
        {
            var calc = calculations.FirstOrDefault(c => c.Id == id);
            if (calc == null)
                return false;
            calculations.Remove(calc);
            return true;
        }
        public Calculation UpdateCalc(Calculation item)
        {
            var calc = calculations.FirstOrDefault(c => c.Id == item.Id);
            if (calc == null)
                return item;
            calc.Num1 = item.Num1;
            calc.Num2 = item.Num2;
            calc.Operator = item.Operator;
            CalcResult(calc);
            return calc;
        }

        public IEnumerable<string> GetOperators()
        {
            return new List<string> (){"+", "-", "X", "/" };
        }

        private void CalcResult(Calculation calc)
        {
            switch (calc.Operator)
            {
                case Operator.plus:
                    calc.Result = calc.Num1 + calc.Num2;
                    break;
                case Operator.minus:
                    calc.Result = calc.Num1 - calc.Num2;
                    break;
                case Operator.dob:
                    calc.Result = calc.Num1 * calc.Num2;
                    break;
                case Operator.div:
                    calc.Result =calc.Num2==0?calc.Result: calc.Num1 / calc.Num2;
                    break;
                default:
                    break;
            }
        }

        
    }
}
