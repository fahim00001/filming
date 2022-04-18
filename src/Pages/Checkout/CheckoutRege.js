import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// const navigate = useNavigate()

// const handleCheckoutNavigation = () =>{
//   navigate('/checkoutSuccess')
// }

const Checkout = () => {
    const [agree, setAgree] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div className='container border border-2 rounded p-5'>
            <h1 className='text-center my-3'>Order confirmation</h1>
            <form className="row g-3 needs-validation" novalidate>
            <div className="col-lg-12 w-75">
    <label for="validationCustomUsername" className="form-label">UserName</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control text-warning fw-bolder" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={user?.displayName} required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder='Enter First your name' required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder='Enter your last name' required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required >
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input onClick={() => setAgree(!agree)} className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Confirm your order
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  
  <div className="col-12">
   {
     true ? <Link to='/checkoutSuccess'> <button  disabled={!agree}  className="btn btn-primary" type="submit">Submit </button></Link> :
     <Link to='/checkoutSuccess'> <button   className="btn btn-primary" type="submit">Submit </button></Link> 
   }
    
  </div>
</form>

        </div>
    );
};

export default Checkout;