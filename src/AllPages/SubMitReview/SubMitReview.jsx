import { useState } from "react";
import Ratings from "react-ratings-declarative";


const SubMitReview = () => {


    const [rating, setRating] = useState(0);

   
    return (
        <div className="bg-orange-50 min-h-screen flex flex-col items-center">
      {/* Section Title */}
      <section className="text-center px-4 pt-10 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Submit Your <span className="text-orange-400">Comment Below!</span>
        </h1>
      </section>

      <div className="bg-orange-50 flex flex-col md:flex-row w-full max-w-6xl px-4 py-6 gap-6 mt-16">
        {/* Form Section */}
        <form className="card-body bg-white shadow-md p-5 rounded-lg w-full md:w-1/3">
          <div className="form-control">
            <label className="label font-medium">Name:</label>
            <input type="text" placeholder="Your name" className="input input-bordered w-full" required />
          </div>

          <div className="form-control mt-3">
            <label className="label font-medium">Email:</label>
            <input type="email" placeholder="Your email" className="input input-bordered w-full" required />
          </div>

          

          <div className="form-control mt-4">
            <button className="btn bg-[#C19A6B] text-white font-bold hover:bg-black w-full">Submit</button>
          </div>
        </form>

        {/* Comment & Rating Section */}
        <div className="w-full md:w-2/3">
          <div className="p-4">
            <label htmlFor="large-text" className="block text-lg font-semibold mb-2">
              Enter Your Comments:
            </label>
            <textarea
              id="large-text"
              className="w-full h-36 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type here..."
            />
          </div>

          {/* Rating Section */}
          <div className="flex flex-col items-center mt-2">
            <Ratings rating={rating} widgetDimensions="35px" widgetSpacings="4px" changeRating={setRating}>
              {[...Array(5)].map((_, index) => (
                <Ratings.Widget key={index} widgetRatedColor="gold">
                  ★
                </Ratings.Widget>
              ))}
            </Ratings>
          </div>
        </div>
      </div>
    </div> 
    );
};

export default SubMitReview;