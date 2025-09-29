import React from "react";
import { useParams, Link } from "react-router-dom";

function SketchCategory() {
  const { categoryId } = useParams();

  // Example data - you can replace with your real images
  const sketches = {
    portrait: [
      { id: 1, img: "/images/portrait1.jpg", title: "Portrait 1" },
      { id: 2, img: "/images/portrait2.jpg", title: "Portrait 2" },
    ],
    nature: [
      { id: 1, img: "/images/nature1.jpeg", title: "Nature 1" },
      { id: 2, img: "/images/nature2.jpg", title: "Nature 2" },
    ],
    abstract: [
      { id: 1, img: "/images/abstract1.jpg", title: "Abstract 1" },
      { id: 2, img: "/images/abstract2.jpg", title: "Abstract 2" },
    ],
    pencil: [
      { id: 1, img: "/images/pencil1.jpg", title: "Pencil Sketch 1" },
      { id: 2, img: "/images/pencil2.jpg", title: "Pencil Sketch 2" },
    ],
  };

  const categorySketches = sketches[categoryId] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/sketches"
          className="inline-block mb-6 text-orange-600 hover:underline"
        >
          ← Back to Categories
        </Link>

        <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
          {categoryId} Sketches
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categorySketches.map((sketch) => (
            <div
              key={sketch.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={sketch.img}
                alt={sketch.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {sketch.title}
                </h2>
              </div>
            </div>
          ))}

          {categorySketches.length === 0 && (
            <p className="text-gray-600">No sketches available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SketchCategory;
