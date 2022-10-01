import BoxChangeCol from './BoxChangeCol'
import './App.css';

function App() {
  return (
    <div className="App">
      < BoxChangeCol/>
  
    </div>
  );
}

export default App;

/* 
/* 
Pour qu'un projet soit un depot, il doit etre sous controle de version
git local et git distant

Quand on entend parler de systeme, il a un terminal
Etant données que c'est un 
Git est un outil de gestion de version alors que github est une plateforme en ligne qui permet, entre autre, d'héberger des dépôts Git.
Les depots qui sont sur github sont aussi sur
 
Photos == News == branches main ou master par defaut

ReadMe est un fichier qui me permet de decrire mon projet
# est un H
On peut faire du html avec ça
Le depot a son lien 
des commits
des branches
On verra toujours le dernier commit et sa date ,l'id de mon commit, le nom de la personne 
on fork un depot : le ramener dans mon compte github
Sor c'est trier mes depots
GitHub fonctionne
Avec une branche principale par defaut, il prend en compte cette branche
changer les branches par defaut, == parametre, branches, switch an other 
Renommer un de
Si on veut prendre un lien git dans Code
Le clonage me permettre de telecharger le fichier et l'implementer dans ma machine
Watch est utiliser pour avoir une notification de ce qui a été forké
git 
git init
git status
git status -s == plus detaillés
git branch
git add FILE
git add .
git rm --cached file  == pour enlever le fichier de la zone index
git rm --cached .-r == pour enlever plusieurs fichiers dans la zone index
git rm --cached .-r -f == pour forcer les choses
git rm nom_du_fichier -f
on doit le mettre dans la zone preparatoire, la zone index pour prendre les images de
l'etat actuel des photos

// Ignorer les dossiers et certains fichiers
test

test.html

*.html

git remote add origin  git remote add origin https://github.com/nafdivin/tours-1.git main  == pour specifier la branche
 git remote -v pour voir les depots distants
 git remote == pour connaitre le nom du depot distant
git push --set-upstream my_origin master
  git config remote.origin.push HEAD == Au cas où j'ai l'erreur avec 

  github pages est la technologie qui me permet de lire page comme une page web
  pages, branch, save puis regarder au dessus de la page Your site is live at 


git branch
git log == voir les commits
git log --oneline
git commit Enter , Un fichier sera crée puis à la fin jepourrais sortir
git checkout "suivi de l'address de mon commit"
git checkout HEAD~1 = pour le commit qui suit mon master
git switch - me permet de revenir sur mon master
git checkout "nom d'une branche"
git branch -m bugfix "nouveau nom"
git switch -C bugfix  == Creation d'une nouvelle branche
git log --oneline --all ==pour voir toutes les branches
git branch -d signup
git branch -D "Nom de la branche"== Pour forcer la suppression de ma branche
git log --online --all --graph == mieux visualiser les commits

git stash push -am "Nouveau bouton" == pour mettre ma branche en reserve

git stash push -am "Nouveau bouton"

git stash show stash@{0}

il y a trois situations

*** git config ff no   
*** git config --global --edit  pour faire des configurations manuelles
*** git config --global merge.ff false
*** git config  merge.ff false

** git merge --abort :: pour annuler une fusion en cours
***git log --oneline --all --graph
**git reset --hard HEAD~1 :: pour casser les commits
*** git reset --hard HEAD~1   : retour a la base comme si rien n'avait ete fait
*** git reset --hard HEAD~1  : supprime l'index et l'instantanné
*** git reset --hard HEAD~1  
*** git revert -m 1 HEAD :  Inverser le dernier commit (si le travail a ete deja partagé avec les autres)

** Commit merge
// */
// instruction
// Une instruction exécutée au moins une fois et ré-exécutée chaque fois que la condition de test est évaluée à true. On peut exécuter plusieurs instructions au sein d'une boucle grâce à l'instruction block ({ ... }) qui permet de grouper différentes instructions en une seule.

// condition
// Une expression évaluée après chaque passage dans la boucle. Si l'évaluation de la condition donne true (la condition est vérifiée), instruction sera exécutée à nouveau. Lorsque condition donne false, le contrôle passe à l'instruction suivant la boucle do...while.
// do...while
// L'instruction do...while crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée. La condition est testée après que l'instruction soit exécutée, le bloc d'instructions défini dans la boucle est donc exécuté au moins une fois.

// Display: swap ou block

// swap: permet de fonctionner suivant 















