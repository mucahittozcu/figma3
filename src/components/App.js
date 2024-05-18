"use client"
import { useState } from "react"
const App = () => {
const [userName,setUserName] = useState("")
const [password,setPassword] = useState("")

  return ( 
    <div className="flex justify-center items-center   bg-gray-50">
       <div className="bg-teal-400 pl-20 w-[1500px] h-[850px] flex justify-center items-center ">
     <div className="bg-teal-300 ml-2 flex justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,85)]">
        <div className="bg-teal-300  w-[500px] h-[600px] flex justify-center items-center ">
          <img src="https://s3-alpha-sig.figma.com/img/c520/dd38/de279ed06fcddcabdbee3c5ac33f8767?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CgjqAPcaI1ir3~yzX7xuReQN9MI0jcmJ67FXlRLgTu-KFbTQhcOjWx-kGtOBChvUUQjKhYD1A4Rh-AnhoGZ6GRxcbdbHi9Wr8A394GFTw~W69YRd1SmZrDvIku3FikaSMAH79yj1upD9mycs7i~cZYb4cFH4e-a~-1WUo89e3bpRVUc4e4db73wI~SEN3nAXuN-XmO-pLDYrTbbl8aUIKc7Bl2HKpdEufKncbs9QAd6N08C7eB9CFGoq1wSmC8VFXKP1nS4bEenNlGLvDNDv~AboLHcsZ~CI~0sB1AI~mM-XXE8zQKD6oPJnoxshO2IuCzHfvU35HuGJ3VFZCBZ2Vg__" alt="aslan" />
        </div>
         </div>
         <div className="bg-slate-100 w-[950px] h-[850px] flex  items-center">
      <div className="bg-slate-50 w-[790px] h-[600px] flex items-center justify-center flex-col  p-8">
         <div className=" w-[500px] h-[500px]">
         <h1 className="text-center text-5xl font-bold text-slate-800">LOGIN</h1>
        <input
          className="border mt-3 ml-7 w-[442px] h-[59px] border-slate-600 p-2"
          placeholder="Username"
          type="text"
          name="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          />
        <input
          className="border mt-5 ml-7 w-[442px] h-[59px] border-slate-600 p-2"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          <button className="bg-teal-300 w-[233px] h-[60px] mt-5 ml-7 hover:bg-slate-50 hover:text-teal-500 p-2 text-white border border-slate-950">LOGIN</button>
        <div className="flex flex-col items-center mt-5">
          <button className="w-[180px] h-[28px] mt-3">Forgot password</button>
          <button className="w-[97px] h-[28px] mt-3">Register</button>
          </div>
          </div>
        </div>
         </div>
      </div>
    </div>
  )
}

export default App
