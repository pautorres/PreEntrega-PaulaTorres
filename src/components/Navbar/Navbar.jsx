import styles from "./Navbar.module.css";
import CartWidgetContainer from "../CartWidget/CartWidgetContainer";

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<h1 class="navbar-brand" className={styles.titulo}>
					POWDER
				</h1>
				<div class="collapse navbar-collapse" className={styles.paginas}>
					<ul class="navbar-nav">
						<li class="nav-link ">Inicio</li>
						<li class="nav-link">Hombres</li>
						<li class="nav-link">Mujeres</li>
						<li class="nav-link">Contacto</li>
					</ul>
				</div>
			</div>
			<CartWidgetContainer />
		</nav>
	);
}

export default Navbar;
