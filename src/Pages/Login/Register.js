import React from 'react';

const Register = () => {
      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96  shadow-xl">
                        <div class="card-body">
                              <h2 class="card-title text-center">Resgister</h2>

                              <div className="register-from">
                                    <form>
                                          {/* name  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Name</span>
                                                </label>
                                                <input type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {/* <span class="label-text-alt">Alt label</span> */}
                                                </label>
                                          </div>
                                          {/* email  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Email</span>
                                                </label>
                                                <input type="text" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {/* <span class="label-text-alt">Alt label</span> */}
                                                </label>
                                          </div>
                                          {/* password  */}
                                          <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                      <span class="label-text">Password</span>
                                                </label>
                                                <input type="text" placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
                                                <label class="label">
                                                      {/* <span class="label-text-alt">Alt label</span> */}
                                                </label>
                                          </div>

                                          {/* submit */}
                                          <input className='btn w-full max-w-xs' type="submit" value="Regestion" />
                                    </form>
                              </div>

                              {/* socail-section  */}
                              <div className="socail-section">
                                    <div class="flex flex-col w-full border-opacity-50">
                                       
                                          <div class="divider">OR</div>
                                          <button class="btn btn-outline">google</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;