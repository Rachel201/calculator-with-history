
using BLL;
using BLL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace backend.Controllers
{
    [ProducesResponseType(StatusCodes.Status200OK)]

    [Route("api/[controller]")]
    [ApiController]
    public class ListHistoryControllerCalc : Controller
    {
        IListCalc listCalc;
        string userId;

        public ListHistoryControllerCalc(IListCalc _listCalc)
        {
            listCalc = _listCalc;
        }     
        // get the Calculation History by userID

        [HttpGet("getListHistory")]
        public IActionResult getListHistory()
        {
            return Ok(listCalc.GetHistoryCalculation(getUserID()));
        }


        // send to delete calculation history
        [HttpPost("deleteListHistory")]

        public IActionResult deleteListHistory(Calculation data)
        {
            return Ok(listCalc.deleteListHistory(getUserID(), data));
        }
        [HttpPost("updateListHistory")]

        public IActionResult updateListHistory(Calculation selectItem)
        {
            return Ok(listCalc.updateListHistory(getUserID(), selectItem));
        }
       //The function is retun ip address of user
     public string   getUserID()
        {
            var ip = HttpContext.Connection.RemoteIpAddress;
            userId = (Dns.GetHostEntry(ip).HostName);
            return userId;
        }

    }
}
