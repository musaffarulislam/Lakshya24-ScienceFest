import React from 'react';

const RightForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center  lg:p-8">
      <div className="flex flex-col items-end px-0 pe-3 md:px-3 md:pe-0">
        <img
          className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
          src="https://t4.ftcdn.net/jpg/02/82/75/31/360_F_282753146_V6ZHcruFiIauT4ecZyf9a2J066LD2K9N.jpg"
          alt=""
        />
        <img
          className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
          src="https://imageio.forbes.com/specials-images/imageserve/64feb1e9622d5f528e73b638/The-Top-5-Tech-Trends-In-2024-Everyone-Must-Be-Ready-For/960x0.jpg?height=434&width=711&fit=bounds"
          alt=""
        />
      </div>
      <div className="px-0 md:px-3">
        <img
          className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
          src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68="
          alt=""
        />
      </div>
    </div>
  );
};

export default RightForm;
