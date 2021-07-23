import './App.scss';
import DefaultLayout from './Layouts/Default';
import TransactionPage from './pages/transaction';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReportPage from './pages/report';
import BudgetPage from './pages/budget';
import MarketPage from './pages/market';
import HelpPage from './pages/help';
import PackagePage from './pages/package';
import MyWallet from './pages/my-wallet';
import ManageAccountPage from './pages/manage-account';
import BankLink from './pages/bank-link';

function App() {
  return (
    <Router>
      <DefaultLayout>
          
          <Switch>
          <Route path="/transaction">
            <TransactionPage></TransactionPage>
          </Route>
          <Route path="/report">
            <ReportPage></ReportPage>
          </Route>
          <Route path="/budget">
            <BudgetPage></BudgetPage>
          </Route>
          <Route path="/market">
            <MarketPage></MarketPage>
          </Route>
          <Route path="/help">
            <HelpPage></HelpPage>
          </Route>
          <Route path="/help">
            <HelpPage></HelpPage>
          </Route>
          <Route path="/package">
            <PackagePage></PackagePage>
          </Route>
          <Route path="/manage-account">
            <ManageAccountPage></ManageAccountPage>
          </Route>
          <Route path="/my-wallet">
            <MyWallet></MyWallet>
          </Route>
          <Route path="/bank-link">
            <BankLink></BankLink>
          </Route>
          <Route path="/" exact>
          <TransactionPage></TransactionPage>
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;
