// import Error404 from "../assets/Error404.jpg";
import ErrorPage from '../assets/ErrorPage.gif'

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center"> {/* Centering the content */}
        <img 
          src={ErrorPage} 
          alt="Error 404" 
          className="w-96 h-96 object-cover mx-auto" 
        />
        
      </div>
    </div>
  );
};

export default Error;
