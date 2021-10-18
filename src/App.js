import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div class="bg-indigo-900 text-center py-4 lg:px-4">
      <div class="cursor-wait p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
      <span class="select-none flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Attention</span>
      <span class="select-none font-semibold mr-2 text-left flex-auto">Website is currently under construction!</span>
    </div>
  </div>

  <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="fill-current h-12 w-12 mr-4" src="https://i.imgur.com/GtY4Ne8.png"></img>
      <span class="font-semibold text-xl tracking-tight">Jacob Kyed Andreassen</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto  ">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-10">
          About
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-10">
          Experience
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-10">
          Education
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-10">
          Skills
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500">
          Contact
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
      </div>
    </div>
  </nav>
    </>
  );
}

export default App;
