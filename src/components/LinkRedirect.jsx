import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LinkRedirect = () => {
  useEffect(() => {
    // Show toast notification
    toast.info("Redirecting to login page...", {
      autoClose: 10000, // Toast notification will be shown for 10 seconds
    });

    // Wait for 10 seconds (10 milliseconds) before redirecting
    setTimeout(() => {
      // Redirect to login page using React Router's <Link> component
      // This assumes that you have set up React Router in your application
      // and '/login' is the path to your login page
      // You can replace '/login' with the actual path of your login page
      return <Link to="/login" />;
    }, 10000);
  }, []);

  return (
    <div>
      <div
  class="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl"
>
  <div class="bg-[#333] flex items-center p-[5px] text-whitec relative">
    <div class="flex absolute left-3">
      <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
      <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
      <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
    </div>
    <div class="flex-1 text-center text-white">status</div>
  </div>
  <div class="p-2.5 text-[#0f0]">
    <div>
      <span class="mr-2">Loading</span>
      <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
      <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
      <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
    </div>
  </div>
</div>

    </div>
  );
}

export default LinkRedirect;
