import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState();
  const url = "http://api.icndb.com/jokes/random";
  const norrisImage =
    "https://cdn.dribbble.com/users/382712/screenshots/4165164/media/8e5141aa7ee4f9efd6a1597f3e463ae6.png?compress=1&resize=400x300";
  const year = new Date().getFullYear();
  async function getQuote() {
    
    axios.get(url).then((response) => {
      console.log(response.data.value.joke);
      setQuote(response.data.value.joke);
    });
  }

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <>
      <div className="page text-center p-1 flex flex-col  items-center relative h-[100vh] ">
        <div className="image  rounded-md">
          <img
            src={norrisImage}
            alt="badboy"
            className="rounded-md w-[100vw] md:w-[50vw] "
          />
        </div>

        <h1 className="qoute font-bold m-1 p-2">{quote}</h1>
        <br />
        <button
          onClick={getQuote}
          className=" bg-indigo-500 p-2 rounded-md uppercase  hover:bg-gradient-to-br hover:from-indigo-500 to hover:to-fuchsia-500 "
        >
          What else about Chuck ?
        </button>
        <footer className=" footer align-bottom absolute bottom-0  mt-1 ">
          @ {year} Amwatah Obuya
        </footer>
      </div>
    </>
  );
}

export default App;
