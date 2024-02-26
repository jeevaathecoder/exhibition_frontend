"use client"
import React from "react";

export default function AdminSidebar(){
    return(
        <>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="default-sidebar" class="fixed top-30 left-30 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-inherit dark:bg-gray-800">
               <ul class="space-y-2 font-medium">
                 
                  <li>
                     <a href="#" class="flex items-center p-2 text-gray-50 hover:text-blue-800 rounded-lg dark:text-white hover:bg-gray-100 bg-blue-600 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Exhibitors</span>
                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 text-gray-50 hover:text-blue-800 rounded-lg dark:text-white hover:bg-gray-100 bg-blue-600 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                     </a>
                  </li>
                  
               </ul>
            </div>
         </aside>
                
        </>
    )
}



