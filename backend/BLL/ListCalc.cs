using BLL.Models;
using DAL;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
   public class ListCalc : IListCalc
    {
        DB db;

        public ListCalc(DB _db)
        {
            db = _db;
            
        }
        // get calculaions history
        public List<Calculation> GetHistoryCalculation(string userID)
        {

            if (db.DBCalculation.ContainsKey(userID))
                return db.DBCalculation[userID];
            else
                return null;
        }
      //delete  from calculations history
        public List<Calculation> deleteListHistory(string userID,Calculation calc)
        {
            return db.deleteItemFromDB(calc, userID);
        }
        // update  from calculations history

        public List<Calculation> updateListHistory(string userID, Calculation calc)
        {
            return db.UpdateListHistoryInDB(calc, userID);
        }
    }
}
