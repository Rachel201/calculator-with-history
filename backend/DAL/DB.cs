using BLL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DB
    {
        public Dictionary<string, List<Calculation>> DBCalculation { get; set; }
        public int id = 1;

        // define the DB
        public DB()
        {
            DBCalculation = new Dictionary<string, List<Calculation>>();
        }

        // delete calculation from DB
        public List<Calculation> deleteItemFromDB(Calculation calc, string userID)
        {
            try
            {
                if (DBCalculation.ContainsKey(userID))
                {
                    var index = DBCalculation[userID].FindIndex(c => c.id == calc.id);
                    if (index != -1)
                    {

                        DBCalculation[userID].RemoveAt(index);

                    }


                }
                else
                {
                    throw new Exception(" calc not deleted");
                }
                return DBCalculation[userID];

            }
            catch (Exception e)
            {
                throw new ArgumentOutOfRangeException(
               "error in deleteItemFromDB", e);
            }


        }

        // update list in history db
        public List<Calculation> UpdateItemFromHistoryInDB(Calculation calc, string userID)
        {
            try
            {
                if (DBCalculation.ContainsKey(userID))
                {

                    var index = DBCalculation[userID].FindIndex(c => c.id == calc.id);
                    if (index == -1)
                    {
                        calc.id = ++id;
                        DBCalculation[userID].Insert(0, calc);
                    }
                    else
                    {
                        DBCalculation[userID][DBCalculation[userID].FindIndex(c => c.id == calc.id)] = calc; ;

                    }

                }
                else
                {
                    calc.id = ++id;

                    DBCalculation.Add(userID, new List<Calculation>()
                {
                    calc
                });
                }
                return DBCalculation[userID];

            }
            catch (Exception e)
            {
                throw new ArgumentOutOfRangeException(
                    "Parameter UpdateListHistoryInDB.", e);
            }


        }

       
    }

}