import Error404 from "../assets/Error404.jpg";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center"> {/* Centering the content */}
        <img 
          src={Error404} 
          alt="Error 404" 
          className="w-96 h-96 object-cover mx-auto" 
        />
        <h1 className="text-4xl font-semibold mt-4">Page Not Found...</h1> {/* Added some margin */}
      </div>
    </div>
  );
};

export default Error;
