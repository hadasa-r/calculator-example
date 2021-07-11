using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace try6.Models
{
    public interface ICalcRepository
    {
        IEnumerable<Calculation> GetAll();

        Calculation Add(Calculation user);
        bool DeleteCalc(int id);
        Calculation UpdateCalc(Calculation item);
        IEnumerable<string> GetOperators();
    }
}
