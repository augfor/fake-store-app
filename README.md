# FAKE STORE APP

\*\* **Version 1.0.0** \*\*

This app simulates a fake store with timed sales.

## Q&A

<mark>¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?</mark>

- **Sprint planning**: El equipo se reúne para definir las tareas que se van a realizar durante el Sprint. Por su lado, el “product owner” prioriza lo más importante del “product backlog”.
- **Daily meetings**: Reuniones de máximo 15 minutos para responder 3 preguntas fundamentales: ¿Qué hiciste ayer? ¿En qué trabajarás hoy? ¿Qué obstáculos han surgido?
- **Sprint review**: En esta ceremonia se comparte lo que se ha completado durante el Sprint. La retroalimentación es muy importante en este momento.
- **Retrospective**: Se realiza al final del Sprint para revisar la forma en la que trabajó el equipo.

<br/>

<mark>¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.</mark>

Son los esquemas de una aplicación o página web que sirven como guía de diseño. En otras palabras, una ayuda gráfica de lo que se quiere implementar en el proyecto.

- Figma
- Adobe XD, etc.

<br/>

<mark>Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.</mark>

- **const**: Se utiliza cuando se quiere declarar una constante que no se pueda reasignar.

```js
const greeting = 'say Hi';
greeting = 'say Hello instead'; // error: Assignment to constant variable.
```

- **let**: Se utiliza cuando se quiere declarar una variable que pueda ser reasignada.

```js
let greeting = 'say Hi';
greeting = 'say Hello instead';

console.log(greeting); // say Hello instead
```

- **var**: Es una variable que puede ser reasignada pero su uso **no** es recomendable. El ejemplo de abajo es una buena razón para evitarla:

```js
var greeter = 'Hi';
var times = 4;

if (times > 3) {
  var greeter = 'say Hello instead';
}

console.log(greeter); // "say Hello instead"
```

<br/>

<mark>¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?</mark>

**git** branch rama-1

<br/>

<mark>Explicar la diferencia entre git merge y git rebase.</mark>

Vamos a asumir que tenemos la rama **main** y la rama **develop**:

- Cuando usamos **git merge** se crea un commit uniendo los dos ramas. En este caso la "historia" de **develop** no es eliminada.
- Cuando usamos **git rebase** reescribimos la "historia" de **main** porque los commits de **develop** se integran directamente en la rama **main**.

<br/>

<mark>¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?</mark>

- Al usar **git pull** "traigo" los cambios del repositorio remoto al mío (local).
- Al hacer un **pull request** le "pregunto" a la persona encargada de mantener el repositorio remoto que "use" mis cambios en su repositorio.

<br/>

<mark>¿Qué es el Virtual DOM?</mark>

Es una representación del DOM... React compara lo siguiente:

- El **Virtual DOM**
- El **Virtual DOM** modificado

Al compararlos React va a saber exactamente qué cambios fueron realizados. De esta forma sólo implementamos estos cambios en el **DOM original**.

<br/>

<mark>Dado el siguiente [codePen](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100), el cual solo tiene un HTML, por medio de css llegar a esta respuesta. [Imagen](https://github.com/makeitrealcamp/assesment-1-programa-top/blob/main/assets/services-section.gif). (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).</mark>

```css
.c-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.c-section__title {
  grid-column: 1/3;
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  color: white;
  text-align: center;
  padding: 1em;
  margin-left: 2.7em;
  margin-right: 2.7em;
}

.c-services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1/3;
  gap: 1em;
  padding: 1em;
  margin-left: 3em;
  margin-right: 3em;
}

.c-services__item {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 2em;
  list-style-type: none;
}

.c-services__item:hover {
  box-shadow: 0 8px 4px -2px gray;
}

h3 {
  font-family: Georgia, serif;
  margin-left: 3em;
  padding-bottom: 1em;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}
```
