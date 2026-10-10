/* declare fn taking in url (str) as parameter */
function show_web_link(url)
{
	const div = document.createElement('div');
	div.id = 'hosted-link';
	/* insert link with ${url} dereference */
	div.innerHTML =
	`
		Voir la page en ligne: <a href="${url}">Cliquez ici</a>
		<button onclick="this.parentElement.style.display = 'none'">✕</button>
	`;
	div.style.display = 'none';

	document.body.appendChild(div);	/* show the div at the bottom */
	
	setTimeout(() => {
		div.style.display = 'block';
	}, 1000);
}
