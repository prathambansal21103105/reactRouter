import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const HomePage=()=>{
    // const navigate=useNavigate();
    // const navigateHandler=()=>{
    //   navigate('products');
    // }
    return(
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">list of products</Link>.
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p> */}
    </>
    );
}

export default HomePage;