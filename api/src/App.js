
import './App.css';
import List from './components/List';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { Provider } from 'react-redux';


// import AddProduct from './components/AddProduct';

function App() {
  return (

    <Provider   store={Store}>
    <Router>
    <div>
    <Header/>

    <List/>
    

    <Switch>
          {/* <Route exact path='/' component={Home} /> */} 
          {/* <Route exact path='/emplist' component={EmpList} />
          {/* <Route exact path='/addproduct' component={AddProduct} />  */}
             
       </Switch>
        
    <Footer/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

