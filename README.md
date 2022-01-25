

POKE API
![image](https://user-images.githubusercontent.com/90551549/150981231-0a7cc8b4-2224-4b42-b7e0-be0b8973aa90.png)

Descripción:
  Proyecto creado con React para trabjo con componentes y todas sus funcionalidades.
  Uso de Hooks
  Trabajo con CSS y librerias externas si es necsario, en este caso se ha empleado Bootstrap

GET STARTED
npm i

Y se abrirá el proyecto con un 
npm start


Objetivos: 
 React funcional y  uso de los Hooks useState() y useEffect()

Debe contener:
Crea un input de texto.
Crea un botón.
Crea un componente Card en el que dibujaremos los datos del personaje obtenido
Crea, con useState, dos estados: uno para input ('') y otro para un pokemon ({}).
Cada vez que escribamos en el input, su contenido se deberá guardar en el estado del input.
Cuando pulsemos el botón que hemos creado antes, se deberá hacer una petición a la PokeApi con el nombre o el número del pokemon correspondiente registrado en el estado del input.
Si va bien, la PokeApi devolverá un objeto con el pokemon elegido. El estado del pokemon que hemos creado antes debe actualizarse con el nuevo pokemon.
Se debe dibujar en Card los datos e imágen del Pokemon.
Al actualizarse la información del componente Card, la búsqueda del input de texto debe borrarse/resetear su valor a ('')

SEGUNDA PARTE
Vamos a cambiar el estado que habíamos creado antes para almacenar un solo pokemon. Vamos a poner en su lugar una lista ([]).

Ahora, cada vez que pulsemos el botón para buscar un pokemon, el pokemon encontrado deberá concatenarse a la lista que tenemos almacenada en el estado en lugar de almacenar uno solo.

Crea el Componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.

NOTA: El ejercicio se debe hacer con React funcional y como mínimo con los Hooks useState() y useEffect().

Para practicar, puedes investigar y hacer uso de cualquier otro Hook (tanto propio como de terceros) que tenga sentido para este ejercicio.

TERCERA PARTE
Para esta fase, en lugar de pulsar un botón para hacer la búsqueda vamos a dejar que las búsquedas se hagan solas en función de lo que escriba el usuario.

Eliminamos el botón.

Cuando escribamos, la petición deberá realizarse según escribimos.

Una vez que consigamos que esas peticiones se hagan con cada pulsación. Cuando obtengamos el pokemon deseado, éste deberá concatenarse a la lista como en la fase anterior.

Como anteriormente, utiliza el componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.

Debounce:

Lógicamente una petición por pulsación es demasiado. Es probable que con ese nivel de peticiones alcancemos el máximo de peticiones permitidos por la Api en poco tiempo. Lo siguiente que haremos será evitar que con cada pulsación se haga una petición. La lógica para hacer esto será que si entre pulsaciones pasa más de un segundo y medio (o el tiempo que queráis) se haga la petición a la Api de lo que haya almacenado en el estado del input en ese momento.

Investiga qué es y cómo es la lógica de un Debounce para implementarla y conseguir el paso anterior. Esta función es la que nos permitirá conseguir que solo tras la última pulsación de más de un tiempo determinado se haga la petición.

OJO: Cuando consigas implementar la función debounce para no colapsar la api a peticiones implementa lo siguiente: si el input está vacío no se hará ninguna petición.

Cuando escribamos un pokemon en el input que ya exista en nuestra lista de pokemons tampoco tenemos que hacer esa petición.

NOTA: El ejercicio se debe hacer con React funcional y como mínimo con los Hooks useState() y useEffect()

Para practicar, puedes investigar y hacer uso de cualquier otro Hook (tanto propio como de terceros) que tenga sentido para este ejercicio
