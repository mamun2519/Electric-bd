import React from 'react';

const Blogs = () => {
      return (
            <div className='max-w-7xl m-auto px-3'>
                  <h1 className='text-xl ptext my-5'>All Question</h1>
                  <div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    <p className="ptext"> How will you improve the performance of a React Application?</p>

                              </div>
                              <div class="collapse-content bg-white">




                                    Lazy loading images in React.
                                    <li> Keeping component state local where necessary.</li>
                                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                                    <li>Code-splitting in React using dynamic import()</li>
                                    <li>Windowing or list virtualization in React.</li>
                              </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    What are the different ways to manage a state in a React application?
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>There are four main types of state you need to properly manage in your React apps:
                                    </p>
                                    <li>Local state</li>
                                    <li>Global state</li>
                                    <li>Server state</li>
                                    <li>URL state</li>





                              </div>
                        </div>
                        <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    How does prototypical inheritance work?
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                              </div>
                        </div>
                        <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium bg-white">
                                    What is a unit test? Why should write unit tests?
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
                              </div>
                        </div>
                        <div tabindex="3" class="collapse collapse-plus border border-base-300 rounded-box bg-white">
                              <div class="collapse-title text-xl font-medium">
                                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                              </div>
                              <div class="collapse-content bg-white">
                                    <p className='pread'>Why should we not update the state directly React?
                                          When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all component</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Blogs;