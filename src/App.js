import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";

const App=()=> {
  // const apiKey = process.env.REACT_APP_NEWS_API ;
  const apiKey = "88ae48b3586c4535b5518d59815d5130" ;
  const pageSize = 12;
  const country = "us";
  const [progress, setProgress] = useState(0);

  // Update the loading bar's progress when needed
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="home"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            }
          />
        </Routes>
        {/* <Routes>
        <Route exact path="/general" element={<News setProgress={updateProgress} apiKey={apiKey} } key="general" pageSize={pageSize} country={country} category='general'/>}/>
      </Routes> */}
        <Routes>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={updateProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
