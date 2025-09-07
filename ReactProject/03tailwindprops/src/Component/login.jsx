import React from 'react'

function Login(props,username) {
    console.log(props.username);
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img 
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" 
          alt="Your Company" 
          className="mx-auto h-10 w-auto" 
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      {/* Card Background Added */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-lg rounded-2xl p-8">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-2">
              <input 
                id="email" 
                type="email" 
                name="email" 
                required 
                autoComplete="email" 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?  
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input 
                id="password" 
                type="password" 
                name="password" 
                required 
                autoComplete="current-password" 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button  
              type="submit" 
              className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              {props.btnText || "Hit me"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-600">
         {props.username}?{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
