import React from "react";
import './Projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';

function Project(){
   return(
       <div className="container " id="projects"> 
           <div>
               <h1>Projects</h1>
           </div>
           <div className="row mt-5 justify-content-around">
               <div className="col-lg-4 col-sm-12 rounded project-container p-5">
                   <h3>Baat-Cheet</h3>
                   <div className="mt-3"> 
                        Practice makes perfect. Try your hand at past Kick Start problems to prepare 
                        for the next round on our archive page. If you’re new to Kick Start, 
                        check out our tutorial video, which walks through the platform and provides 
                        tips on how to solve an algorithmic problem.
                   </div>
                   <div>
                       <hr />
                   </div>
                   <div className="row">
                       <div className="col-8 align-self-center">
                            <span>Status : </span><span className="badge rounded-pill bg-success"> Completed</span>
                       </div>
                       <div className="col-3 button-container">
                           <button className= " github-button  "><GitHubIcon className=" h-100 w-100"/></button>
                       </div>
                   </div>
                   <br />
                   <div>
                       <button className="contribute-button rounded">Wants to Contribute </button>
                   </div>
               </div>
               <div className="col-lg-4 col-sm-12 rounded project-container p-5">
                   <h3>Baat-Cheet</h3>
                   <div className="mt-3"> 
                        Practice makes perfect. Try your hand at past Kick Start problems to prepare 
                        for the next round on our archive page. If you’re new to Kick Start, 
                        check out our tutorial video, which walks through the platform and provides 
                        tips on how to solve an algorithmic problem.
                   </div>
                   <div>
                       <hr />
                   </div>
                   <div className="row">
                       <div className="col-8 align-self-center">
                            <span>Status : </span><span className="badge rounded-pill bg-success"> Completed</span>
                       </div>
                       <div className="col-3 button-container">
                           <button className= " github-button  "><GitHubIcon className="fs-1 h-100 w-100"/></button>
                       </div>
                   </div>
                   <br />
                   <div>
                       <button className="contribute-button rounded">Wants to Contribute </button>
                   </div>
               </div>
               <div className="col-lg-4 col-sm-12 rounded project-container p-5">
                   <h3>Baat-Cheet</h3>
                   <div className="mt-3"> 
                        Practice makes perfect. Try your hand at past Kick Start problems to prepare 
                        for the next round on our archive page. If you’re new to Kick Start, 
                        check out our tutorial video, which walks through the platform and provides 
                        tips on how to solve an algorithmic problem.
                   </div>
                   <div>
                       <hr />
                   </div>
                   <div className="row">
                       <div className="col-8 align-self-center">
                            <span>Status : </span><span className="badge rounded-pill bg-success"> Completed</span>
                       </div>
                       <div className="col-3 button-container">
                           <button className= " github-button  "><GitHubIcon className="fs-1 h-100 w-100"/></button>
                       </div>
                   </div>
                   <br />
                   <div>
                       <button className="contribute-button rounded">Wants to Contribute </button>
                   </div>
               </div>
           </div>
           
       </div>
   )
}

export default Project;