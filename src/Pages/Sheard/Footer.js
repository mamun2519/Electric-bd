import React from 'react';

const Footer = () => {
      return (
            <div className="div bg-slate-600">
                  <div className='mt-40 max-w-7xl m-auto px-3 '>
                  <footer class="footer p-10 text-base-content">
                        <div className='text-white'>
                              <span class="footer-title">Services</span>
                              <a class="link link-hover">Branding</a>
                              <a class="link link-hover">Design</a>
                              <a class="link link-hover">Marketing</a>
                              <a class="link link-hover">Advertisement</a>
                        </div>
                        <div className='text-white'>
                              <span class="footer-title">Company</span>
                              <a class="link link-hover">About us</a>
                              <a class="link link-hover">Contact</a>
                              <a class="link link-hover">Jobs</a>
                              <a class="link link-hover">Press kit</a>
                        </div>
                        <div className='text-white'>
                              <span class="footer-title">Legal</span>
                              <a class="link link-hover">Terms of use</a>
                              <a class="link link-hover">Privacy policy</a>
                              <a class="link link-hover">Cookie policy</a>
                        </div>
                  </footer>
                  <footer class="footer px-10 py-4 border-t text-base-content border-base-300">

                        <footer class="footer footer-center p-4  text-base-content">
                              <div className='text-white'>
                                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                              </div>
                        </footer>
                  </footer>


            </div>
            </div>
      );
};

export default Footer;