import React from 'react';
import './App.css';

// Components's Imports
import { Header } from './Components/Header';
import { AccountSummary } from './Components/AccountSummary';
import { NewTransaction } from './Components/NewTransaction';
import { TransactionHistory } from './Components/TransactionHistory';
import { Footer } from './Components/Footer';
import { Calculator } from './Components/Calculator/Calculator';
// Import Provider for GolbalContext.
import { GlobalProvider } from './Context/GlobalProvider';

function App() {
	return (
		<div>
			<Header />
				<div className="container">
				{/* The following div is to provide a partially transparent background. */}
				<div className="back">
					<GlobalProvider>
						<AccountSummary />
						<NewTransaction />
						<TransactionHistory />
						<Calculator />
					</GlobalProvider>
				</div>
				</div>
			<Footer />
		</div>
	);
}

export default App;
