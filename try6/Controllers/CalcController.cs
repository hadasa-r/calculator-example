using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using try6.Models;

namespace try6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalcController : ControllerBase
    {

        static readonly ICalcRepository repository = new CalcRepository();

        public CalcController()
        {
        }

        [HttpGet("[action]")]
        public IEnumerable<Calculation> GetAllCalculations()
        {
            return repository.GetAll();
        }

        [HttpGet("[action]")]
        public IEnumerable<string> GetOperators()
        {
            return repository.GetOperators();
        }

        [HttpPost("[action]")]
        [Consumes("application/json")]
        public Calculation AddCalc(Calculation item)
        {
            try
            {
                return repository.Add(item);
            }
            catch (Exception)
            {
                //log
                return item;
            }
           
        }
        [HttpPost("[action]")]
        [Consumes("application/json")]
        public Calculation UpdateCalc(Calculation item)
        {
            try
            {
                return repository.UpdateCalc(item);
            }
            catch (Exception)
            {
                //log
                return item;
            }
           
        }
        
        [HttpPost("[action]")]
        public bool DeleteCalc([FromBody] int id)
        {
            try
            {
                return repository.DeleteCalc(id);
            }
            catch (Exception)
            {
                //log
                return false ;
            }
            
        }
    }
}