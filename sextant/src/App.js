import DenseAppBar from './components/Banner'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/Cards'

function App() {
  return (
       <>
       <DenseAppBar />

       <CardComponent  url={`https://api64.ipify.org?format=json`} for={`ipv4`}/>
       <CardComponent  url={`https://api.ipify.org?format=json` } for={`ipv6`}/>

      </>
  );
}

export default App;
