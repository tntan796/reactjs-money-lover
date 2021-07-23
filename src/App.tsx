import './App.scss';
import DefaultLayout from './Layouts/Default';
import TransactionPage from './pages/transaction';
function App() {
  return (
    <DefaultLayout>
        <TransactionPage></TransactionPage>
    </DefaultLayout>
  );
}

export default App;
