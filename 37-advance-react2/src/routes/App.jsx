import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import Post from "./component/Post";
import PostList from "./component/PostList";
import PostListProvider from "./component/store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <br></br>
          <br></br>

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
