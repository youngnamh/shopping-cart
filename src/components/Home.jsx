import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home text-white flex flex-col items-center gap-10">
      <div className="text-center text-4xl pt-20">Welcome to Kurita Co.</div>
      <div className="text-center whitespace-normal w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorem
        exercitationem, laborum pariatur doloremque architecto numquam quaerat
        totam neque quasi suscipit excepturi possimus blanditiis est commodi,
        molestias atque vel esse!
      </div>
      <Link to="/store">
        <div className="bg-green-500 p-4 rounded-3xl hover:scale-110 hover:text-black active:scale-100 active:text-white">
          Shop Now
        </div>
      </Link>
    </div>
  );
};

export default Home;
