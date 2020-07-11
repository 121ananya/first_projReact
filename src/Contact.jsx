import React from "react";

const Contact = () =>
{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form className= "border-box">
  <div class="form-group-row">
  <div class="col-sm-10">
      <label for="inputEmail4">UserName</label>
     
      <input type="username" class="form-control" id="inputEmail4" placeholder="UserName"/></div>
    </div>
    
    <div class="col-sm-10">
      <label for="inputPassword4">Password</label>
    
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>

    <div class="col-sm-10">
    <label for="inputEmail4">Email id</label>
      <input type="Email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
  
 
    <div class="col-sm-10">
      <label for="inputCity">Phone No.</label>
      <input type="text" class="form-control" id="Phone"/>
    </div>

    <div class="col-sm-10">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-info">Sign in</button>
</form>  
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;
