
using BLL;
using BLL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net;

namespace backend.Controllers
{
    [ProducesResponseType(StatusCodes.Status200OK)]

    [Route("api/[controller]")]
    [ApiController]
    public class CalcController : ControllerBase
    {

        ICalculator calculator;
        string userId;
        public CalcController(ICalculator _calculator, IHttpContextAccessor httpContextAccessor)
        {
            calculator = _calculator;
          
        }


       
         //get calculation and return th result
        [HttpPost("getCalcResult")]
        public IActionResult Post (Calculation data)
        {
            return Ok(calculator.calculate(data, getUserID()));
        }

        // The function retun ip address of user

        public string getUserID()
        {
            var ip = HttpContext.Connection.RemoteIpAddress;
            userId = (Dns.GetHostEntry(ip).HostName);
            return userId;
        }

    }
}
