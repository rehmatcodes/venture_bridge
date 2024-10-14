import logo from './assets/image_rebecca_purple.png';

function App() {
  const arr = ['Terms', 'Privacy', 'Security', 'Contact Venture Bridge'];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
        {/* First div */}
        <div className="flex flex-col items-center gap-y-6">
          <img className="h-16" src={logo} alt="Logo" />
          <h1 className="text-2xl font-light">Sign in to Venture Bridge</h1>
        </div>
          
        {/* Second div */}
        <div className="mt-4 mb-20">
          <div className="bg-gray-50 p-4 border border-gray-300 rounded-md min-w-[310px]">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm">Username or email address</p>
              <input
                className="border border-gray-300 px-2 rounded-md py-[4px] focus:outline-none focus:ring-2 focus:ring-[#663399]"
                type="text"
                name=""
                id=""
              />

            </div>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Password</p>
              <a className="text-sm text-[#663399]" href="#">
                Forget Password?
              </a>
            </div>
            <div className="flex flex-col mt-2 gap-y-4">
              <input
                type="password"
                className="border border-gray-300 px-2 rounded-md py-[4px] focus:outline-none focus:ring-2 focus:ring-[]"
                id=""
              />

              <button className="bg-[#663399] font-semibold text-white text-sm p-[6px] items-center rounded-md hover:bg-purple-900">
                Sign in
              </button>
            </div>
          </div>
          <div className="mt-4 border border-gray-300 bg-white p-4 rounded-md">
            <p className="text-sm flex items-center justify-center">
              New to Venture Bridge?{' '}
              <span className="text-[#663399] cursor-pointer hover:underline">
                Create an account
              </span>
            </p>
          </div>
        </div>

        {/* Third div */}
        <div className="mt-4 flex gap-x-4">
  {arr.map((item, id) => (
    <p
      className={`text-[12px] cursor-pointer ${
        id === 3 ? 'text-black hover:text-purple-900' : 'text-purple-900 hover:underline'
      }`}
      key={id}
    >
      {item}
    </p>
  ))}
</div>
 
      </div>
    </>
  );
}

export default App;
