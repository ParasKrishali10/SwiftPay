
import { useNavigate } from "react-router-dom"
export const Landing=()=>{
  const navigate=useNavigate()
    return <div>
      <div className="flex flex justify-center pt-6">
        <div className="text-5xl font-bold font-serif">
          SwiftPay
        </div>
      </div>
      
      <div className="flex flex-col item-center">
      <div className="pt-24 px-4 flex item-center  justify-center">

     <div className="font-bold font-serif text-5xl ">
      Effortless Payments With SwiftPay
     </div>

      </div>
      </div>
      <div className="text-xl text-slate-500 pt-4">
      SwiftPay is the morden payment app that managing your finances a breeze. Securely send and recieve payments in just a few clicks
     </div>
     <div className="flex px-4 pt-6 flex justify-center">
      <div className=" bg-blue-400 w-28 rounded-md">
        <button onClick={()=>{
          navigate("/signup")
        }} className=" p-4 w-28 ">SignUp</button>
      </div>
      <div className=" ml-8 bg-blue-400 w-28 rounded-md">
        <button onClick={()=>{
          navigate("/signin")
        }} className="p-4 w-28" >SignIn</button>
      </div>
        
     </div>
    <div>

      <div className="p-16">
        <div className="font-bold text-4xl">Key Features</div>
        <div className="text-xl p-4 text-slate-400">
          SwiftPay offers a range of features to make your payments fast, secure and easy
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="border-2 p-12 w-full md:w-1/3 xl:w-1/3 lg:w-1/3 flex-basis:30% m-10">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>

            </div>
            <div className="font-semibold text-2xl flex justify-center">
              Fast Transactions
            </div>
            <div className="text-slate-400 text-xl">
              Instant Payments with no delays
            </div>
          </div>
          <div className="ml-6 border-2 p-12 w-full md:w-1/3 xl:w-1/3 lg:w-1/3 flex-basis:30% m-10">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

            </div>
            <div className="font-semibold text-2xl flex justify-center">
              Secure Payments
            </div>
            <div className="text-slate-400 text-xl">
              Protect your transactions with advance
            </div>
          </div>
          <div className="ml-6 border-2 p-12 w-full md:w-1/3 xl:w-1/3 lg:w-1/3 flex-basis:30% m-10">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>

            </div>
            <div className="font-semibold text-2xl flex justify-center">
              Easy Setup
            </div>
            <div className="text-slate-400 text-xl">
              Get started in minutes with our simple setup
            </div>
          </div>
        </div>
      </div>
    </div>

        
    </div>
}