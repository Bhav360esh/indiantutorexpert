import React, { useState } from 'react'
import background from '../../assets/images/bg.png';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';


const Hero = () => {

  return (


    <section class="bg-center bg-no-repeat bg-blend-multiply pt-20 mb-10 pb-10 dark:bg-gray-800 dark:mb-0 dark:pb-20" style={{ backgroundImage: `url(${background})` }}>
      <div class="pt-8 px-4 mx-auto max-w-screen-xl text-center justify-center items-center lg:pt-16">
        <h3 class='my-6 text-xl tracking-wide leading-none text-blue-600 dark:text-white'> Join Our Platform and Ignite Your Passion for Teaching! </h3>
        <h1 class="my-12 text-5xl font-extrabold tracking-tight leading-none text-other md:text-3xl lg:text-5xl dark:text-white">  <span class="text-blue-700">Indian Tutor Expert! </span> for the work you have passion  </h1>
        <p class="my-10 text-lg font-extralight text-other lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400">From foundational subjects to advanced concepts, our tutors provide comprehensive support to help students excel in their studies. </p>
        <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:items-center sm:space-y-0">
          <button data-modal-target="tutor-modal" data-modal-toggle="tutor-modal" class="inline-flex no-underline sm:mr-0 md:mr-2 px-10 py-5 justify-center items-center text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Register as Tutor
          </button>
          <button data-modal-target="student-modal" data-modal-toggle="student-modal" class="inline-flex no-underline px-10 py-5 justify-center items-center text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Register as Student
          </button>
        </div>
      </div>


      <div id="tutor-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <TutorForm/>
      </div>


      
      <div id="student-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <StudentForm/>
      </div>

    </section>


  )
}

export default Hero