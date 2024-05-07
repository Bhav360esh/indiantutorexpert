import React, { useState } from "react";

const TutorForm = () => {
        const [username, setUsername] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [email, setEmail] = useState("");
        const [subject, setSubject] = useState("");
        const [classes, setClasses] = useState("");
        const [address, setAddress] = useState("");
        const [errMsg, setErrMsg] = useState("");
        const [successMsg, setSuccessMsg] = useState("");
    
        // ========== Email Validation start here ==============
        const emailValidation = () => {
            return String(email)
                .toLocaleLowerCase()
                .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
        };
        // ========== Email Validation end here ================
        let form = document.querySelector("form");
    
        const handleSend = (e) => {
            e.preventDefault();
            if (username === "") {
                setSuccessMsg("")
                setErrMsg("Username is required!");
            } else if (phoneNumber === "") {
                setSuccessMsg("")
                setErrMsg("Phone number is required!");
            } else if (email === "") {
                setSuccessMsg("")
                setErrMsg("Please give your Email!");
            } else if (!emailValidation(email)) {
                setSuccessMsg("")
                setErrMsg("Give a valid Email!");
            } else if (subject === "") {
                setSuccessMsg("")
                setErrMsg("Plese give your Subject!");
            } else if (classes === "") {
                setSuccessMsg("")
                setErrMsg("Class is required!");
            }else if (address === "") {
                setSuccessMsg("")
                setErrMsg("Address is required!");
            } else {
                let data = new FormData(form);
          // The FormData() method creates a new FormData object that contains the values of all the form fields.
          fetch('https://script.google.com/macros/s/AKfycbyWUkAdmjXF88vSvu0xRltybMNU0C_oBD82vG05hC_HKY7csyqK8q1cgZ9ZiVJECjI/exec', {
            method: "POST",
            body: data
          })
            // The fetch() method is used to make a request to the server and retrieve data.
            // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
            .then(res => res.text())
            // The .then() method is used to handle the response from the server.
            // The response is converted to text using the res.text() method.
            
                setSuccessMsg(
                    `Thank you dear ${username}, Your Messages has been sent Successfully!`
                );
                setErrMsg("");
                setUsername("");
                setPhoneNumber("");
                setEmail("");
                setSubject("");
                setClasses("");
                setAddress("");
            }
    
        };
        return (
            
            <div
                id="tutor-modal"
                className="w-1/2 py-20 bg-white"
            >
                 <div class="flex items-center justify-between py-0 px-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Register as a Tutor Now!
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="tutor-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
                <div className="w-full">
                    <div className="w-full h-auto flex flex-col lgl:flex-row justify-around">
                        <div className="w-full lgl:w-[60%] h-full py-10 bg-white flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" method="POST" action="" name="contact-form">
                                {errMsg && (
                                    <p className="py-3 bg-white shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                        {errMsg}
                                    </p>
                                )}
                                {successMsg && (
                                    <p className="py-3 bg-white shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                        {successMsg}
                                    </p>
                                )}
                                <div className="w-full flex flex-col lgl:flex-row gap-4">
                                    <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                                        <p className="text-sm text-gray-900 uppercase tracking-wide">
                                            Your name
                                        </p>
                                        <input
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="text"
                                            name='username'
                                        />
                                    </div>
                                    <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                                        <p className="text-sm text-gray-900 uppercase tracking-wide">
                                            Phone Number
                                        </p>
                                        <input
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            value={phoneNumber}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="text"
                                            name='phoneNumber'
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-900 uppercase tracking-wide">
                                        Email
                                    </p>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type="email"
                                        name='email'
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-900 uppercase tracking-wide">
                                        Subject
                                    </p>
                                    <input
                                        onChange={(e) => setSubject(e.target.value)}
                                        value={subject}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type="text"
                                        name='subject'
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-900 uppercase tracking-wide">
                                        Classes
                                    </p>
                                    <input
                                        onChange={(e) => setClasses(e.target.value)}
                                        value={classes}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='classes'
                                    ></input>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-900 uppercase tracking-wide">
                                        Address
                                    </p>
                                    <input
                                        onChange={(e) => setAddress(e.target.value)}
                                        value={address}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='address'
                                    ></input>
                                </div>
                                <div className="w-full">
                                    <button
                                        onClick={handleSend}
                                        className="w-full h-12 bg-blue-600 rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
export default TutorForm