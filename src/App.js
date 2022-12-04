import { useState } from 'react';
import './App.css';
import CardBlock from './components/CardBlock';

const CardInfo = [{
  "Id": "001",
  "Name": "TShirt",
  "Description": "Plain unisex",
  "Price": "40",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
},
{
  "Id": "002",
  "Name": "Jacket",
  "Description": "Winter style jacket",
  "Price": "120",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
},
{
  "Id": "003",
  "Name": "Pants",
  "Description": "Blue denim pants for men",
  "Price": "160",
  "Image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
}
]

const App = () => {

const [value, setValue] = useState("");

const onChange = (event) => {
  setValue(event.target.value);
}

const onSearch = (searchTerm) => {
  console.log('search', searchTerm);
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
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/*HEADER*/}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">PlaylistApp</h1>

            <div className="row">
              <div className="col searchbar">
                <input className="form-control form-control-lg" id="search" type="text" placeholder="Search" value={value} onChange={onChange}/>
                <button onClick={()=>onSearch(value)}>Search</button>   
                <div className="searchList">
                  <ul>
                  {CardInfo.filter(item => {
                    const searchTerm = value.toLowerCase();
                    const Name = item.Name.toLowerCase();

                    return searchTerm && Name.startsWith(searchTerm)
                  })
                  .map((item) => (
                    <li>{item.Name}</li>
                  ))}
                  </ul>
               </div>
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
