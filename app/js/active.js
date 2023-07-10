// Obtiene los elementos del menú de navegación
const menuItems = document.querySelectorAll('div#sidebar ol li a');
// Crea una instancia de IntersectionObserver
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// Obtiene el ID del elemento en pantalla
		const targetId = entry.target.getAttribute('id');
		// Verifica si el elemento está en la vista o no
		if (entry.isIntersecting) {
			// Resalta el elemento correspondiente en el menú
			menuItems.forEach((menuItem) => {
				menuItem.classList.remove('active');
				if (menuItem.getAttribute('href') === `#${targetId}`) {
					menuItem.classList.add('active');
				}
			});
		}
	});
}, {
	threshold: 0.3}); // Ajusta el valor de umbral según tus necesidades
  
// Observa las secciones de la página
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});