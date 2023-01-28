import React from 'react';
import { createRoot } from 'react-dom/client';
import ResumeParser from './components/ResumeParser';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';


class App extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <ResumeParser />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);