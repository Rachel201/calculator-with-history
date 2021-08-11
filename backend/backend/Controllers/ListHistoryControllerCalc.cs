
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
        IListHistory listHistory;
        string userId;

        public ListHistoryControllerCalc(IListHistory _listHistory)
        {
            listHistory = _listHistory;
        }     
        // get the Calculation History by userID

        [HttpGet("getListHistory")]
        public IActionResult getListHistory()
        {
            return Ok(listHistory.GetHistoryCalculation(getUserID()));
        }


        // send to delete calculation history
        [HttpPost("deleteListHistory")]

        public IActionResult deleteListHistory(Calculation data)
        {
            return Ok(listHistory.deleteListHistory(getUserID(), data));
        }
        [HttpPost("updateListHistory")]

        public IActionResult updateListHistory(Calculation selectItem)
        {
            return Ok(listHistory.updateListHistory(getUserID(), selectItem));
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
