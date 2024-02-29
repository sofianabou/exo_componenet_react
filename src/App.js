import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';


function App() {
  return (
    <div className="App">
      <Header />
      {/*Post && Side menu Contener*/}
      <div style={{display:"flex"}}>
              {/*Post container */}
                <div style={{width:"70%"}}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                 </div>
              {/* Post container*/}

         {/**SideMenu Container */}
           <div style={{backgroundColor:"#dde3e9", margin:"25px", border:"solid teal 5px", borderRadius:"10px", padding:"5px"}}>
             <SideMenu />
           </div>
          {/**SideMenu Container */}
      </div>
               {/*Post && Side menu Contener*/}


    </div>
  );
}

export default App;
