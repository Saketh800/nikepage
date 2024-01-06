import React, { useState } from 'react';
import Image from '../assets/Image/imge.webp';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '', // Added an address field to the state
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Address validation
    if (!formData.address.trim()) {
      formErrors.address = 'Address is required';
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      formErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        address: '', // Reset address field
        password: '',
      });
      setErrors({});
    } else {
      console.log('Form has validation errors');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  return (
    <div className="container">
      <div className="form rounded-2xl">
        <div className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto rounded-xl" src={Image} alt="Your Company" />
            <h2 className="mt-8 text-center text-2xl font-bold leading-6 tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-lg font-medium leading-6 text-white">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                  </div>
                </div>

                <div className="flex-1">
                  <label htmlFor="email" className="block text-lg font-medium leading-6 text-white">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.address && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-lg font-medium leading-6 text-white">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.address}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                  Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'} // Toggle input type based on visibility state
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {/* Eye icon to toggle password visibility */}
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex justify-center rounded-md bg-pink-950 px-3 py-1.5 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-2 px-8"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;