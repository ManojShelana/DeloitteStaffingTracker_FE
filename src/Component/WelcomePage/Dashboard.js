import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CloseIcon from '@mui/icons-material/Close';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../../Styling/WelcomePage/Dashboard.css';

function Dashboard() {

  const [DEIData, setDEIData] = useState([]);
  const [RoleData, setRoleData] = useState([]);

useEffect(() => {

  const handleGetDEIData = async () => {    
    fetch(
      `https://localhost:7075/api/Dashboard/GetDEIRatioforProjectsUnderLoggedInUser?emailId=123@123.com`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
    .then(resp => {return resp.json()})  
    .then (data => {setDEIData(data)});
    }
    
    handleGetDEIData();
  }, []);


  useEffect(() => {
    const handleGetRoleData = async () => {    
      fetch(
        `https://localhost:7075/api/Dashboard/GetCountOfEmployeesByJobLevel?emailId=123@123.com`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(resp => {return resp.json()})  
      .then (d => {setRoleData(d)});
      }
      
      handleGetRoleData();
    }, []);

    const getjoblevelName=[];
    const getjobLevelCount=[];

    for(let i=0; i<RoleData.length; i++)
     {
      getjoblevelName.push(RoleData[i].joblevelName);
      getjobLevelCount.push(RoleData[i].jobLevelCount);
     }     

console.log("dash",getjobLevelCount);
//console.log(Object.keys(RoleData));
    const projectPieData = {
        labels: ['Omnia EAG POD', 'AQM',  'Omnia Data Reuse POD', 'Assurance','Omnia RAPR'],
        datasets: [
          {
            data: [5, 6, 8, 2, 10],
            backgroundColor: ['#d2eda1', '#c5e887', '#b9e36c', '#acde51', '#9fd936', '#8fc926', '#7cae21','#69931c',
            '#567817', '#68921c'],
          },
       ],
      };

      const genderPieData = {
        //labels: Object.keys(DEIData),
        labels: ['Male', 'Female', 'Other'],
        datasets: [
          {
            data: Object.values(DEIData),
            backgroundColor: ['#76a520', '#b9e36d','#b9e36d'],
          },
        ],
      };

      const rolePieData = {
        labels: getjoblevelName,
        datasets: [
          {
            data: getjobLevelCount,
            backgroundColor: ['#d2eda1', '#c5e887', '#b9e36c', '#acde51', '#9fd936', '#8fc926', '#7cae21','#69931c',
            '#567817', '#68921c'],
          },
        ],
      };

      const genderDoughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        radiusPercentage: 80,
        cutoutPercentage: 40, // Adjust this value to control the size of the hole
        rotation: 270, // Rotate the chart to start at the top
        circumference: 180, // Show only half of the doughnut (180 degrees)
        plugins: {
        legend: {
          display: true,
          position: "left", // Display legends at the bottom
          align: "left", // Align legends to the start (left) of the container
      labels: {
        boxWidth: 10, // Set the width of the legend box
        boxHeight: 10,
        padding: 10, // Add padding between legend items
        },
      },
      },     
    }

      const projectPieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'left', // Display the legend below the chart
            align: 'left',
          labels: {
            boxWidth: 10, // Set the width of the legend box
            boxHeight: 10,
            padding: 10, // Add padding between legend items
            },
          },
        },
      };

      const barGraphData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Resources Onboarded',
            data: [10, 20, 30, 45, 50, 30], // Specify the values for the first bar
            backgroundColor: '#7F4BB4',
            barThickness: 10, // Specify the color for the first bar
            barPercentage: 0.8,
          },
          {
            label: 'Resources Offboarded ',
            data: [10, 15, 20, 13, 15, 17], // Specify the values for the second bar
            backgroundColor: '#BBBC43',
            barThickness: 10, // Specify the color for the second bar
            barPercentage: 0.8,
          },
        ],
      };

      const barGraphOptions = {
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
          x: {
            grid: {
              display: false,
            },  
                    
          },

          y: {
            grid: {
              display: true,
            }, 
            ticks: {
              stepSize: 5, 
            },                         
          },          
        },
        plugins: {
          legend: {
            position: 'top', // Display the legend below the chart
            align: 'top',
          labels: {
            boxWidth: 10, // Set the width of the legend box
            boxHeight: 10,
            padding: 10, // Add padding between legend items
            },
          },
        },
      };

return(
    <div className="content-wrapper">
      <div>
        <div className="row">
        <div className="col-xl-3 col-sm-6 stretch-card grid-margin ">
        <div className="card ">
          <div className="card-body ">
            <div class="row">
              <div class="col-10">
              <h6 className="card-text">Active Clients</h6>
              </div>
              <div class="col-2">
               <EventNoteIcon />
              </div>
            </div>          
          <h5 style={{color:'#86BC24'}}>06</h5>
          </div>
        </div>          
        </div>  

        <div className="col-xl-3 col-sm-6 stretch-card grid-margin">
        <div className="card">
          <div className="card-body">
          <div class="row">
              <div class="col-10">
              <h6 className="card-text">Active Projects</h6>
              </div>
              <div class="col-2">
               <EventNoteIcon />
              </div>
            </div>     
            <h5 style={{color:'#86BC24'}}>15</h5>
          </div>
        </div>          
        </div>  

        <div className="col-xl-3 col-sm-6 stretch-card grid-margin">
        <div className="card">
          <div className="card-body">
          <div class="row">
              <div class="col-10">
              <h6 className="card-text">Active Resources</h6>
              </div>
              <div class="col-2">
               <EventNoteIcon />
              </div>
            </div>     
            <h5 style={{color:'#86BC24'}}>200</h5>
          </div>
        </div>          
        </div>  

        <div className="col-xl-3 col-sm-6 stretch-card grid-margin">
        <div className="card">
          <div className="card-body">
          <div class="row">
              <div class="col-10">
              <h6 className="card-text">Vacant positions</h6>
              </div>
              <div class="col-2">
               <EventNoteIcon />
              </div>
            </div>     
            <h5 style={{color:'#86BC24'}}>30</h5>
          </div>
        </div>          
        </div>  
        </div>

    <div className="row">
      
    <div className="col-md-5" >
      <div>
      <div className="card">
        <div className="card-body">
        <h6 className="card-title">Resource Allocation</h6>
          <div className="aligner-wrapper">
            <Doughnut 
                data={projectPieData}
                options={projectPieOptions}
              />
          </div>    
        </div>
      </div>

      <div className="card mt-2 mb-2">
            <div className="card-body">
            
              <h6 className="card-title">DEI Ratio</h6> 
              <div className="aligner-wrapper">
                <Doughnut 
                    data={genderPieData}
                    options={genderDoughnutOptions}
                    height={100}
                  />
                </div> 
              </div>
            </div>

    </div>
  </div>
    <div className="col-md-7" style={{maxHeight: '500px'}}>
      <div className="align-card ">
        <div className="card-body ">
        <div className="d-flex flex-row justify-content-between" style={{borderBlockEndStyle: 'solid', borderBlockEndWidth: '1px'}}>
          <h5 className="card-title mb-3" >Recent Activities</h5>
        </div>
        <div className="row">
            <div className="col-12 ">
              <div className="preview-list pt-1">

              <div className="preview-item border-bottom">
                <div className="preview-thumbnail">
                    <div className="preview-icon">
                    <LibraryAddCheckOutlinedIcon sx={{ fontSize: 35 }}/>
                    </div>
                </div>
                <div className="preview-item-content d-sm-flex flex-grow">
                  <div className="flex-grow">
                    <h6 className="preview-subject">Project Omnia RAPR </h6>
                    <p className="card-text mb-0">One new resource onboarded</p>
                  </div>
                  <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                    <CloseIcon className="close-Icon" />
                  </div> 
                </div>               
              </div>

              <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon">
                          <LibraryAddCheckOutlinedIcon sx={{ fontSize: 35 }}/>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject" >DAS Account</h6>
                            <p className="card-text mb-0">New project Omnia FIN POD has been added</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <CloseIcon className="close-Icon" />
                          </div> 
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon">
                          <LibraryAddCheckOutlinedIcon sx={{ fontSize: 35 }}/>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject" >Illumia/ Client Portal</h6>
                            <p className="card-text mb-0">One new resource onboarded</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <CloseIcon className="close-Icon" />
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon">
                          <LibraryAddCheckOutlinedIcon sx={{ fontSize: 35 }}/>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject" >Assurance</h6>
                            <p className="card-text mb-0">One new resource onboarded</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <CloseIcon className="close-Icon" />
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <div className="preview-icon">
                          <LibraryAddCheckOutlinedIcon sx={{ fontSize: 35 }}/>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject" >DAS Account</h6>
                            <p className="card-text mb-0">New Project Reveal has been added</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <CloseIcon className="close-Icon" />
                          </div>
                        </div>
                      </div>
                      <div className="preview-item">
                        <div className="preview-thumbnail">
                          <div className="preview-icon">
                          <LibraryAddCheckOutlinedIcon sx={{ fontSize: 35 }}/>
                          </div>
                        </div>
                        <div className="preview-item-content d-sm-flex flex-grow">
                          <div className="flex-grow">
                            <h6 className="preview-subject" >DAS Account</h6>
                            <p className="card-text mb-0">New project Reveal has been added</p>
                          </div>
                          <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                            <CloseIcon className="close-Icon" />
                          </div>                         
                        </div>
                      </div> 
                                    
                    </div>
                </div>
            </div>                
          </div>
        </div>
      </div>
    </div>

      <div className="row" >
      
      <div className="col-md-5 grid-margin stretch-card" >
      <div className="card">
        <div className="card-body">
        <h6 className="card-title">Role-Based Allocation</h6>
          <div className="aligner-wrapper">
            <Doughnut 
                data={rolePieData}
                 strokeWidth={ 3 }
                 stroke={ '#fff' }
                 options={projectPieOptions}
              />
          </div>    
        </div>
      </div>
    </div>

    <div className="col-md-7 grid-margin stretch-card last-row">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Resource Onboarding & Offboarding</h6> 
              <div className="aligner-wrapper" >
                <Bar
                data={barGraphData} 
                options={barGraphOptions}
                width={500}
                />
              </div>              
              </div>
            </div>
          </div>

      </div>
    </div>
  </div> 
 
);
};

export default Dashboard;