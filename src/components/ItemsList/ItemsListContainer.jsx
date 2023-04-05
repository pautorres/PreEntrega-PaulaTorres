import ItemsList from "./ItemsList";
function ItemsListContainer() {
	let saludo = "¡Bienvenido a mi tienda!";
	return (
		<div>
			<ItemsList saludo={saludo} />
		</div>
	);
}

export default ItemsListContainer;
