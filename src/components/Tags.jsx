import React from "react";

const Tags = () => {
  return (
    <div>
      <div>
        <div class="container mx-auto p-6 mb-20">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-lg font-semibold mb-4">Tags</h2>
            <div class="flex flex-wrap gap-2">
              <a
                href="#"
                class="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm"
              >
                Technology
              </a>
              <a
                href="#"
                class="bg-green-200 hover:bg-green-300 py-1 px-2 rounded-lg text-sm"
              >
                Programming
              </a>
              <a
                href="#"
                class="bg-yellow-200 hover:bg-yellow-300 py-1 px-2 rounded-lg text-sm"
              >
                Web Development
              </a>
              <a
                href="#"
                class="bg-indigo-200 hover:bg-indigo-300 py-1 px-2 rounded-lg text-sm"
              >
                Design
              </a>
              <a
                href="#"
                class="bg-purple-200 hover:bg-purple-300 py-1 px-2 rounded-lg text-sm"
              >
                AI
              </a>
              <a
                href="#"
                class="bg-pink-200 hover:bg-pink-300 py-1 px-2 rounded-lg text-sm"
              >
                Machine Learning
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
