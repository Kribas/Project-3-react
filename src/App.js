import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Clients from './components/Clients';
import Header from './components/Header';
import Counter from './components/Counter';
import Services from './components/Services';
import CallAction from './components/CallAction';


function App() {

  
  
  return (
    <div className="app">
      <Header/>
      <Banner title="Welcome to Baker" desc="We are team of talented designers making websites with Bootstrap"/>
      <Clients/>
      <About/>
      
      <section className='my-5' style={{backgroundColor: '#f7f8fa'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                <Counter title="Clients" number={0} counterEnd={232}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
              <Counter title="Projects" number={0} counterEnd={521}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
              <Counter title="Hours Of Support" number={0} counterEnd={1463}/>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
              <Counter title="Hard Workers" number={0} counterEnd={15}/>
              </div>

            </div>
          </div>
      </section>
      
      <Services title="Services" description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."/>
      <CallAction title="Call To Action" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    </div>
  );
}

export default App;
