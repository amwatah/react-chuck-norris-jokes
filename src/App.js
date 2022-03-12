import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState();

  const norrisImage =
    "https://cdn.dribbble.com/users/382712/screenshots/4165164/media/8e5141aa7ee4f9efd6a1597f3e463ae6.png?compress=1&resize=400x300";
  const year = new Date().getFullYear();

  async function getQuote() {
    const options = {
      method: "GET",
      url: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      headers: {
        accept: "application/json",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "fd0454f1b9msh9c01b195580c588p1f012bjsn7e6f631a737f",
      },
    };

    axios
      .request(options)
      .then( (response)=> {
         console.log( response.data);
         setQuote( response.data)
      })
      .catch( (error)=> {
        console.error(error);
      });
  }

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <>
      <div className="page text-center p-1 flex flex-col   items-center relative h-screen ">
        <div className="image  rounded-md">
          <img
            src={norrisImage}
            alt="badboy"
            className="rounded-md w-[100vw] md:w-[50vw] "
          />
        </div>
        <img src={quote.icon_url} alt="" />

        <h1 className="qoute font-bold m-1 p-2">{quote.value}</h1>
        <button
          onClick={getQuote}
          className=" bg-indigo-500 p-2 rounded-md uppercase  hover:bg-gradient-to-br hover:from-indigo-500 to hover:to-fuchsia-500 "
        >
          What else about Chuck ?
        </button>
        <br />
       
        <footer className=" footer align-bottom  bottom-0   ">
          @ {year} Amwatah Obuya
        </footer>
      </div>
    </>
  );
}

export default App;
