


export default function Contact () {
    return(
    <div className="bg-black font-inter px-6  lg:px-24 text-white">
    <h1 className="py-5   text-3xl font-poppins lg:text-5xl font-bold border-b-4 border-blue">Contact Us</h1>
    <div className="flex flex-col  lg:py-6 lg:flex-row justify-center items-center gap-20">
    <div className="py-5 px-3 lg:w-[50%]">
    <form action="" method="POST" className=" flex flex-col  gap-4">
      <div class="">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jhon Doe"
          class="w-full border-2 rounded-lg border-blue  bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#38348b] focus:shadow-md"
        />
      </div>
      <div class="">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          class="w-full border-2 rounded-lg border-blue  bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#38348b] focus:shadow-md"
        />
      </div>
      <div class="">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-white"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="w-full border-2 rounded-lg border-blue  bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#38348b] focus:shadow-md"
        />
      </div>
      <div class="">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-white"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full border-2 rounded-lg border-blue  bg-slate-800 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#38348b] focus:shadow-md"
        ></textarea>
      </div>
        <button
          class=" w-[50%] hover:shadow-form rounded-md bg-blue py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
    </form>
    </div>
    <div className=" text-center">
        <h2 className="text-lg pb-3 lg:hidden lg:pt-2">Find us At </h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3359955486617!2d77.08939127486292!3d28.61969038466483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0530c69e4a0b%3A0xdeb06385e6c46014!2sMaharaja%20Surajmal%20Institute-MSI%20(BBA%2C%20BCA%2CBCOM%2C%20B.Ed)!5e0!3m2!1sen!2sin!4v1696960456063!5m2!1sen!2sin"  style={{border:0}} allowFullScreen="" className="rounded-xl w-[100%]  lg:w-[500px] h-[450px]"></iframe>
        <h2 className=" hidden lg:block lg:pt-2">Melius - Maharaja Surajmal Institute , Janakuri </h2>
    </div>
  </div>
  </div>
    
)}