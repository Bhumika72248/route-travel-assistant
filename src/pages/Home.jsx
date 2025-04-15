import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">
          Welcome to Route & Travel Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Explore Bhopal like never before 🚀. Real-time routes, weather updates, public transport info, and emergency SOS — all in one app!
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Home;
