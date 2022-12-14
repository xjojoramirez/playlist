import { useState } from 'react';
import './App.css';
import CardBlock from './components/CardBlock';

const CardInfo = [{
  "Id": "001",
  "Name": "Old nature clips",
  "Description": "Old nature clips from 80's to 90's",
  "Price": "40",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
},
{
  "Id": "002",
  "Name": "Nature wonders",
  "Description": "Watch wonderful nature from around the world",
  "Price": "120",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
},
{
  "Id": "003",
  "Name": "Scary weathers",
  "Description": "Unbelievable weather phenomena",
  "Price": "160",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
},
{
  "Id": "004",
  "Name": "Rainy season",
  "Description": "Be ready during rainy sesason",
  "Price": "160",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
},
{
  "Id": "005",
  "Name": "Natural habitats",
  "Description": "Discover animals natural habitats",
  "Price": "160",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
}
]

const App = () => {

const [value, setValue] = useState("");

const onChange = (event) => {
  setValue(event.target.value);
}


  
  return (
    <div className="App">
      {/*NAVBAR*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#link">PlaylistApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
              className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#link">Home</a></li>
                {/*Menus
              <li className="nav-item"><a className="nav-link" href="#link">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#link" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#link">All Products</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#link">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#link">New Arrivals</a></li>
                </ul>
              </li>
              */}
            </ul>
            {/*cart
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </form>
            */}
          </div>
        </div>
      </nav>

      {/*HEADER*/}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">PlaylistApp</h1>

            <div className="row pt-4">
              <div className="col searchbar p-0">
                <input className="form-control form-control-lg" id="search" type="text" placeholder="Search" value={value} onChange={onChange}/>
                  
               <div className="searchList">
               {CardInfo.filter(item => {
                    const searchTerm = value.toLowerCase();
                    const Name = item.Name.toLowerCase();

                    return searchTerm && Name.startsWith(searchTerm)
                  })
                  .map((item,i) => (
                    <li className="searchLi" key={i}>{item.Name}</li>
                  ))}
               </div>
               <div className="icon pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg></div>
        
              </div>
            </div>

          </div>
        </div>
      </header>

      {/*MAINCONTENT*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {CardInfo.map((Info, i) => (
              <CardBlock CardInfo={Info} key={i} />
            ))}
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
