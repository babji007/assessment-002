import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employee from './components/Employee';
import Student from './components/Student';





function App() {
  return (
    <div className="App">

    <Header/>
    <hr/>
     <h2>Hi all ,Welcome To React Training @ Mphasis</h2> 
    

     <Employee   id="101"  name="Pradeep"  salary="20000"/>
    
    <hr/>
    
     <Student    id="232" name="Vishal" marks="67.88"/>

    <hr/>
    <Footer/>
    </div>

  );
}

export default App;
