import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/api'
import { useContext } from 'react'
import { AuthContext } from '../App'
import { routeHandler } from '../services/routeHandler'

export default function SignUp() {
    const navigateTo = useNavigate()
    const [formInput, setFormInput] = React.useState({
        userName: "",
        email: "",
        phoneNumber: "",
        password: ""
    })
const { auth } = useContext(AuthContext)
const [jwt, setJWt] = auth
    const handleForm=(e)=>{
        e.preventDefault();
        signup(formInput)
        
        .then(res=>{
            setFormInput({
                userName: "",
                email: "",
                phoneNumber: "",
                password: ""
            })
              setJWt(res.data)
              console.log(res.data)
                routeHandler(navigateTo, jwt); 
                navigateTo('/home'); 

        })
        .catch(error=>{
            console.error(error);
        })
       
    }

    return (
      <div className="bg-gray-100 relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md ring-2 ring-purple-600 lg:max-w-xl">
          <div className="justify-center flex items-center mb-2 text-3xl text-violet-950">
            Fake News Detector
          </div>
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
            Sign up
          </h1>
          <form>
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                User Name
              </label>
              <input
                onChange={(e) =>
                  setFormInput({ ...formInput, userName: e.target.value })
                }
                value={formInput.userName}
                type="name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                onChange={(e) =>
                  setFormInput({ ...formInput, email: e.target.value })
                }
                value={formInput.email}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="number"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                onChange={(e) =>
                  setFormInput({ ...formInput, phoneNumber: e.target.value })
                }
                value={formInput.phoneNumber}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                onChange={(e) =>
                  setFormInput({ ...formInput, password: e.target.value })
                }
                value={formInput.password}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={handleForm}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Registration
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <b
              onClick={() => navigateTo("/")}
              className="font-medium text-purple-600 hover:underline cursor-pointer"
            >
              Sign in
            </b>
          </p>
        </div>
      </div>
    );
}