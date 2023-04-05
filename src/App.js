import "./App.css";
import ItemsListContainer from "./components/ItemsList/ItemsListContainer";
import Navbar from "./components/Navbar/Navbar";
function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemsListContainer />
		</div>
	);
}

export default App;
