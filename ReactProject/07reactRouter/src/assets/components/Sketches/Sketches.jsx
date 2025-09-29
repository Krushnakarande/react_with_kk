import React from "react";
import { Link } from "react-router-dom";

function Sketches() {
  const categories = [
    { id: "portrait", title: "Portrait", img: "https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_1280.jpg" },
    { id: "nature", title: "Nature", img: "https://th.bing.com/th/id/OIP.KHR6iXMm-j7Um2RBSgZ35AHaEo?w=277&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=320" },
    { id: "abstract", title: "Abstract", img: "https://tse4.mm.bing.net/th/id/OIP.JdALX1NHuNRUpcJBTwsv4gHaEQ?rs=1&pid=ImgDetMain&o=7&rm=320" },
    { id: "pencil", title: "Pencil", img: "https://tse2.mm.bing.net/th/id/OIP.e67W9rNpQ5IxtSWV7bq8MAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=320" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🎨 My Sketching Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/sketches/${cat.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
                 transition duration-300 transform hover:-translate-y-2
                 hover:shadow-xl hover:shadow-red-300"     >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                {cat.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sketches;
