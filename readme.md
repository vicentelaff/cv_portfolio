# Sections encore en construction:
- Portfolio: L'affichage de son contenu ressemblera à la grille déjà présente. Il sera possible de cliquer sur chaque élément, menant vers le lien correspondant.
- Formulaire de contact: c'est seulement du front-end, il n'envoie pas de message à une boîte mail encore. Pour informer un utilisateur que ça ne marche pas encore, j'ai décidé de laisser cette information dans le modal qui s'ouvre en cliquant sur envoyer.

# Bugs:
- Le modal du formulaire de contact:
    > Contexte: J'ai rajouté l'option de scrollspy à ma navbar pour que l'utilisateur puisse voir dans quelle section il se trouve dynamiquement. En cliquant sur une option de la navbar, l'URL se met à jour avec l'anchor tag correspondant. En contrepartie, si l'utilisateur ne clique sur aucun item de la navbar, l'URL reste intacte, inchangée. Ceci cause les bugs suivants, que je n'ai pas encore réussi à résoudre même après plusieurs tentatives:
    1. Le modal ne s'ouvre pas si aucun nav-item a été séléctionné et renvoie l'utilisateur au début de la page.
    2. Si un nav-item a été séléctionné, puis l'utilisateur scrolle jusqu'au bas de la page (sans cliquer sur "contact") et décide d'envoyer un message, le modal s'ouvre à l'hauteur du dernier nav-item qu'il a cliqué sur la navbar.