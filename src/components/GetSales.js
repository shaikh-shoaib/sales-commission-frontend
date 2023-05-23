import React, { useState, useEffect } from 'react';
import CommissionTable from './CommissionTable';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/GetSales.css'

const GetSales = () => {
  
  useEffect(()=>{document.title="GetSales - Sales Commission Calculator"},[])
  
  const [commissions, setCommissions] = useState([]);
  const [date, setDate] = useState('');
  const [showTable, setshowTable] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleGetCommissionClick = async () => {
    if (date === '') {
      console.log("please select date");
      toast.warn("Please select a date!", {
        position: "top-center",
      });
    }
    else {
      let response;
      try {
        response = await fetch(`http://localhost:8080/sales/commission?date=${date}`);
      }
      catch (error){
        console.log(error);
        toast.error("error", {
          position:"top-center"});
      }
      // const response = await fetch(`http://localhost:8080/sales/commission?date=${date}`);
      const data = await response.json();
      setCommissions(data);
      if (data.length > 0) {
        setshowTable(true);
        toast.success("Data fetched successfully!", {
          position: "top-center",
        });
      }
      else {
        toast.warn("No sales with chosen date!", {
          position: "top-center",
        });
        setshowTable(false);
      }
      console.log(commissions);
    }
  };
  return (
    <div >
      <div className='get-drop-container'>
        <label>
          Search SalesCommission:
          <input type="date" value={date} onChange={handleDateChange} style={{ marginRight: "30px", marginLeft:"10px" }} />
        </label>

        <Button type="submit" color="primary" outline onClick={handleGetCommissionClick}>Get Commission Report</Button>
      </div>
      {showTable &&
        <div className='tablecontainer' style={{marginTop:"10px"}}><CommissionTable commissions={commissions} /></div>}
      <ToastContainer />
    </div>
  );
};
export default GetSales;