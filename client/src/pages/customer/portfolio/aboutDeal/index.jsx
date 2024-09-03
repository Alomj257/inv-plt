import React from 'react'
import "./aboutDeal.scss"
import img from "../../../../assets/all-img/Logo-02.jpg"
import pro from "../../../../assets/profile/comment_2.png"
import { FaRegFileLines } from 'react-icons/fa6'

const AboutDeal = () => {
    return (
      <div className='new-company'>
       <div className="container">
          <div className="row">
              <div className="col-9 ps-0">
                  <div>
                      <div className='cover-profile d-flex flex-column'>
                          <img src={img} className='position-absolute rounded-3 inset-0 w-100 h-100' alt="cover" />
                        
                          <div className="mt-auto">
                          <div className="profile  ">
                              <img src={pro} className='position-absolute w-100 h-100' style={{inset:"0"}} alt="" />
                          </div>
                          </div>
                      </div>
  
                      <div className="about col-md-8 d-flex bg-dark text-white my-3 py-2 border border-2 rounded px-3 justify-content-between align-items-center">
                          <div className='fw-semibold'>ABOUT SPACEX</div>
                      </div>
                      <div className='border p-2 rounded bg-white'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore unde eligendi praesentium cum dolorum maiores accusantium laborum? In placeat porro doloremque reprehenderit est quibusdam iusto voluptatum itaque molestias? Possimus facilis laborum ipsum natus repudiandae mollitia et. Corrupti, expedita dolor! Quod facilis et magni aliquam recusandae quis perferendis dignissimos voluptate? Magni doloribus veniam iste ea! Dolorum quisquam ex tenetur. Mollitia, beatae. Beatae laudantium dolor sunt qui reprehenderit aliquam asperiores atque ipsam, fuga, non saepe, hic dolorum! Necessitatibus, animi repellat. Explicabo, asperiores cupiditate. Pariatur quos ad iure facere consequuntur vero, nemo officia et dolor nulla eum, expedita magnam fugit dolorum repellat vel?</p>
                      </div>
                  </div>
              </div>
              <div className="col-3 h-100 d-flex flex-column">
                  <div className="deal d-flex flex-column h-100">
                  <div className="about d-flex bg-black  text-white my-3 py-1 border border-2 rounded px-2 justify-content-between align-items-center">
                          <div className='fw-semibold'>DEAL SUMMARY</div>
                      </div>
                      <div className="deal-list px-4 h-100 py-4 pb-5 rounded bg-white border border-2 d-flex flex-column gap-3 h-100">
                         {data?.map((val,index)=>( <div  key={index}>
                              <label htmlFor="" className='text-muted'>{val?.name}</label>
                              <div>-</div>
                          </div>))}
                      </div>
                  </div>
  
              </div>
          </div>
          <div className="row pb-3">
              <div className="col-md-6">
              <div className=" d-flex bg-black text-white my-3 py-2 border border-2 rounded px-3 justify-content-between align-items-center">
                          <div className='fw-semibold'>Latest News</div>
                      </div>
                      <div className="details bg-white rounded d-flex flex-column gap-3 p-3">
                        {Array.from({length:5}).map((_,i)=>(
                        <div className='d-flex  flex-column gap-2' key={i}>  <a href="http://google.com" className='text-dark' target="_blank" rel="noopener noreferrer"> SpaceX launches 23 Starlink satellites from Florida</a>
                        <small className='text-muted tracking-normal'>2 days ago</small>
                        </div>
                        ))}
  
                      </div>
              </div>
              <div className="col-md-6 row">
                  <div className="col-6">
                      <div>   <div className=" d-flex bg-black text-white my-3 py-2 border border-2 rounded px-3 justify-content-between align-items-center">
                          <div className='fw-semibold'>UPDATE</div>
                      </div>
                      <div className="details bg-white rounded d-flex flex-column gap-3 py-3 ">
                      {Array.from({length:5}).map((_,i)=>(
                                    <div className="d-flex  mx-2 ms-3 gap-2">
                                        <div><FaRegFileLines className='text-muted' size={25}/></div> <div className="d-flex flex-column gap-1">
                                            <small className='text-muted'> CONTRACT UPDATE</small>
                                            <small className='fw-bold'>{new Date().toLocaleDateString()}</small>
                                        </div>
                                    </div>
                      ))}
                      </div></div>
                  </div>
                  <div className="col-6">
                      <div>   <div className=" d-flex bg-black text-white my-3 py-2 border border-2 rounded px-3 justify-content-between align-items-center">
                          <div className='fw-semibold'> INVESTMENT DOCS
                          </div>
                      </div>
                      <div className="details bg-white rounded d-flex flex-column gap-3 py-3">
                      {Array.from({length:5}).map((_,i)=>(
                                    <div className="d-flex  mx-2 ms-3 gap-2">
                                        <div><FaRegFileLines className='text-muted' size={25}/></div> <div className="d-flex flex-column gap-1">
                                            <small className='text-muted'> CONTRACT UPDATE</small>
                                            <small className='fw-bold'>{new Date().toLocaleDateString()}</small>
                                        </div>
                                    </div>
                      ))}
  
                      </div></div>
                  </div>
              </div>
          </div>
       </div>
      </div>
  )
}

export default AboutDeal;


const data=[
    {name:"ASSET CLASS"},
    {name:"NVESTMENT DATE"},
    {name:"CUMULATED INVESTMENTS"},
    {name:"CURRENT VALUATION"},
    {name:"TOTAL PROFIT (LOSS)"},
]
