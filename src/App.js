import React from 'react';


function App() {
  return (
      <div class="h-screen w-full flex items-center justify-center bg-gray-500 font-sans">
      <div class="bg-purple-100 rounded shadow p-6 h-100 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
                <h1 class="text-blue-500 text-3xl font-bold">Todo List</h1>
                <div class="flex mt-4">
                    <input class="shadow appearance-none border-2 border-blue-300 rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                    <button class="flex-no-shrink p-2 border-2 rounded text-green-300  border-green-400 hover:text-white hover:bg-green-300">Add</button>
                </div>
            </div>
            <div>
                <div class="flex mb-4 items-center pl-4">
                    <ul class = "list-disc list-outside">
                      <li class="w-full text-blue-500 pl-1 text-lg">Add another component to Tailwind Components </li>
                    </ul>
                    <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-400 hover:bg-green-300">Done</button>
                    <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-400">Remove</button>
                </div>
                
            </div>
        </div>
  </div>
  );
}

export default App;
