import React from "react";

/* 
Lista de botones de categoris actual de la tienda, debe hacerse dinamica
*/
export const categorias = [
    {
        id: 1,
        etiqueta: 'Ficción y Literatura',
        seleccionado: false
    },
    {
        id: 2,
        etiqueta: 'Historia y Arqueologia',
        seleccionado: false
    },
    {
        id: 3,
        etiqueta: 'Infantil y Juvenil',
        seleccionado: false
    },
    {
        id: 4,
        etiqueta: 'Ocio y Tiempo Libre',
        seleccionado: false
    }
];

/* Funciones de acceso a las categorias*/

export const getCategories = () => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(categorias)
        },2000);
    })

};


/* 
Lista de productos de la tienda, debe hacerse dinamica
*/
export const productos = [
    {
        id: 1,
        nombre: 'La armadura de la luz',
        categoria: 1,
        foto:'la_armadura_de_la_luz',
        isbn: '9789506446932',
        tematica: 'Fantasía épica e histórica',
        descripcion: 'La revolución está en el aire 1792. Un gobierno despótico está decidido a convertir Inglaterra en un poderoso imperio comercial. Y, desde el otro lado del mar, suenan los ambores de guerra mientras Napoleón Bonaparte comienza su ascenso al poder y prepara un violento plan para convertirse en emperador del mundo.',
        idioma: 'Español / Castellano',
        editorial: 'PLAZA & JANES EDITORES',
        autor: 'FOLLETT, KEN',
        publicacion: '2023',
        stock:3,
        precio: 20000,
        destacado: 0
    },
    {
        id: 2,
        nombre: 'Saga DUNE',
        categoria: 1,
        foto:'dune',
        isbn: '9789877255775',
        tematica: 'Fantasía épica e histórica',
        descripcion: 'En un futuro lejano, en un planeta remoto, se libra una compleja lucha que tendrá repercusiones en toda la galaxia. En las arenas de Akarris, más conocido como Dune, aprender a sobrevivir no es suficiente…',
        idioma: 'Español / Castellano',
        editorial: 'DEBOLSILLO',
        autor: 'HERBERT, FRANK',
        publicacion: '2023',
        stock:6,
        precio: 20000,
        destacado: 1
    },
    {
        id: 3,
        nombre: 'Las cronicas de DUNE',
        categoria: 1,
        foto:'cronicas_dune',
        isbn: '9789877254563',
        tematica: 'Fantasía épica e histórica',
        descripcion: 'En un futuro lejano, en un planeta remoto, se libra una compleja lucha que tendrá repercusiones en toda la galaxia. En las arenas de Akarris, más conocido como Dune, aprender a sobrevivir no es suficiente…',
        idioma: 'Español / Castellano',
        editorial: 'DEBOLSILLO',
        autor: 'HERBERT, FRANK',
        publicacion: '2021',
        stock:8,
        precio: 20000,
        destacado: 0
    },
    {
        id: 4,
        nombre: '1984',
        categoria: 1,
        foto:'1984',
        isbn: '9789878354712',
        tematica: 'Ciencia ficción clásica',
        descripcion: 'En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso, su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos… hasta que decide replantearse la verdad del sistema que los gobierna y somete.',
        idioma: 'Español / Castellano',
        editorial: 'Del Fondo Editorial',
        autor: 'ORWELL, GEORGE',
        publicacion: '2021',
        stock:12,
        precio: 20000,
        destacado: 0
    },
    {
        id: 5,
        nombre: 'El Resplandor',
        categoria: 1,
        foto:'el_resplandor',
        isbn: '9789877255140',
        tematica: 'Ficción moderna y contemporánea',
        descripcion: 'Esa es la palabra que Danny había visto en el espejo. Y, aunque no sabía leer, entendió que era un mensaje de horror. Danny tenía cinco años, y a esa edad pocos niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: REDRUM... MURDER, asesinato. Pero su padre necesitaba aquel trabajo en el hotel...',
        idioma: 'Español / Castellano',
        editorial: 'DEBOLSILLO',
        autor: 'KING, STEPHEN',
        publicacion: '2023',
        stock:7,
        precio: 20000,
        destacado: 0
    },
    {
        id: 6,
        nombre: 'Florencia y el esplendor del renacimiento',
        categoria: 2,
        foto:'florencia',
        isbn: '9789874479532',
        tematica: 'Historia general',
        descripcion: 'Con entusiasmo, conocimiento de causa y animo de divulgación, el autor se detiene en usos y costumbres de la época, pero ademas alista una serie de nombres propios que contribuyeron de modo cardinal al desarrollo de las ideas, el arte y la política: de Masaccio y Giotto a Boccaccio y Maquiavelo, pasando por Rafael, Brunelleschi o Miguel Angel. En estas páginas desfilan, inmensos, los humanistas que motorizaron cambios radicales rescatando y releyendo valoresenterrados en el mundo clásico. Arquitectos que alumbraron formas impensadas que nos deslumbran aun hoy. Poetas, escritores y artistas que cambiaron para siempre la historia del arte. Todo al amparo de mecenas que entendieron a la perfección el valor de ser benefactores de genios.',
        idioma: 'Español / Castellano',
        editorial: 'CRITICA',
        autor: 'MOLDES, GERMAN',
        publicacion: '2022',
        stock:3,
        precio: 20000,
        destacado: 0
    },
    {
        id: 7,
        nombre: 'Los Guemes',
        categoria: 2,
        foto:'guemes',
        isbn: '9789504979043',
        tematica: 'Historia de América',
        descripcion: 'En la lucha durante las Invasiones Inglesas protagonizo la increible hazaa de tomar un buque a caballo. Adhirio de inmediato a los ideales de la Revolucion de Mayo. Para defender y liberar a su patria, armo en Salta una estructuramilitar con gauchos a los que llamo » Los Infernales». A fuerza de coraje, y de poner el pecho a las balas, se convirtio en el lider de la guerra montonera y resistio victoriosamente nueve invasiones realistas. El «padre de los pobres» no estaba solo. Ademas de sus valientes, junto a el estuvieron siempre su madre, Magdalena su amada Carmencita Puch, y su hermana, Macacha. Macacha, si, esa mujer fuerte y dispuesta a todo que fue su mano derecha tanto en la vida como en el fragor de sus contiendaspoliticas y militares.',
        idioma: 'Español / Castellano',
        editorial: 'PLANETA',
        autor: 'PIGNA, FELIPE',
        publicacion: '2023',
        stock:5,
        precio: 20000,
        destacado: 1
    },
    {
        id: 8,
        nombre: 'Caseros',
        categoria: 2,
        foto:'caseros',
        isbn: '9789500766616',
        tematica: 'Historia de América',
        descripcion: 'La historia argentina se divide en un antes y después de Caseros. En ocasión de su 170° aniversario, este libro explica el misterio de un enfrentamiento que además de un enorme combate es un punto de inflexión en el devenir histórico de la Argentina porque en él confluyen, y en cierta medida se resuelven, buena parte de los conflictos y tensiones acumulados desde la Revolución de Mayo. A su faceta puramente militar se suman, pues, dimensiones políticas, económicas, diplomáticas y sociales de importancia trascendental. Por eso estas páginas reúnen a un grupo de especialistas que analizan Caseros en todas sus dimensiones desde la perspectiva privilegiada que ofrecen los aportes de la investigación académica más reciente.',
        idioma: 'Español / Castellano',
        editorial: 'SUDAMERICANA',
        autor: 'ZUBIZARRETA, IGNACIO',
        publicacion: '2021',
        stock:3,
        precio: 20000,
        destacado: 0
    },
    {
        id: 9,
        nombre: 'Los Granaderos de San Martin',
        categoria: 2,
        foto:'granaderos',
        isbn: '9789878916217',
        tematica: 'Historia de América',
        descripcion: 'El regimiento que fundó, entrenó y comandó el general San Martin no es una colección de nombres de batallas y de apellidos de soldados que nos suenan a calles y localidades argentinas. Los Granaderos a Caballo fueron protagonistas de una gesta historica. Entre su creación en 1812 y su disolución en 1826, las batallas de San Lorenzo, Chacabuco, Maipu, Ayacucho, la campaña de los Andes, la del Sur de Chile y la del Peru son apenas algunas de las gloriosas páginas en las que estos valientes patriotas lucharon por la independencia. En este libro, el historiador Felipe Pigna y el escritor Eduardo Kovalivker vuelven a dar vida a los heroicos Granaderos para honrarlos.',
        idioma: 'Español / Castellano',
        editorial: 'HOJAS DEL SUR',
        autor: 'PIGNA, FELIPE',
        publicacion: '2022',
        stock:3,
        precio: 20000,
        destacado: 1
    },
    {
        id: 10,
        nombre: 'Emperador de Roma',
        categoria: 2,
        foto:'emperador_de_roma',
        isbn: '9789874479679',
        tematica: 'Historia general',
        descripcion: 'Para darnos respuesta y acercarnos un poco mas a la realidad imperial, Mary Beard sigue los pasos del emperador de cerca: en su hogar y en las carreras, en sus viajes e, incluso, de camino hacia el cielo; nos presenta a sus esposas y amantes, a sus rivales y esclavos, a los bufones y soldados de la corte y a la gente corriente que le entregaba cartas de splica. Emperador de Roma nos lleva directamente hasta el corazn de Roma, y de nuestras fantasas sobre lo que era ser romano, a travs de un relato como nunca antes se habia contado',
        idioma: 'Español / Castellano',
        editorial: 'CRITICA',
        autor: 'BEARD, MARY',
        publicacion: '2023',
        stock:7,
        precio: 20000,
        destacado: 0
    },
    {
        id: 11,
        nombre: 'Uma y Sapo 2',
        categoria: 3,
        foto:'uma_y_sapo_2',
        isbn: '9789504672012',
        tematica: 'Manuales y multiáreas',
        descripcion: 'Las nuevas áreas integradas para disfrutar acompañados por dos simpáticos amigos: Uma y Sapo. Una propuesta con un enfoque equilibrado que intensifica los conocimientos en las áreas de Prácticas del lenguaje y Matemática, mientras guía en la reflexión de los propios aprendizajes, allanando el camino hacia una sólida comprensión de saberes. Además, abraza las recomendaciones más recientes de los ministerios de educación y se compromete a fortalecer pilares fundamentales como la lectura, la EAI y la ESI',
        idioma: 'Español / Castellano',
        editorial: 'SANTILLANA EDITORIAL S.A.',
        autor: 'N/A',
        publicacion: '2024',
        stock:7,
        precio: 20000,
        destacado: 0
    },
    {
        id: 12,
        nombre: 'Percy Jackson y los dioses del olimpo',
        categoria: 3,
        foto:'percy_jackson',
        isbn: '9789878001890',
        tematica: 'Manuales y multiáreas',
        descripcion: 'Después de salvar el mundo en múltiples ocasiones luchando contra monstruos, titanes y gigantes, Percy quiere terminar su último curso de instituto sin sobresaltos. Pero, para acceder a la Universidad de la Nueva Roma, tendrá que cumplir tres misiones de los dioses y obtener así las cartas de recomendación necesarias. La primera tarea consiste en ayudar a Ganímedes, el copero de Zeus, a recuperar su cáliz de oro antes de que caiga en manos de algún humano. Y es que un sorbo del cáliz puede convertir a un mortal en dios, lo que provocaría la cólera de Zeus. ¿Podrán Percy, Grover y Annabeth encontrar la preciada copa a tiempo? Y, en caso de conseguirlo, ¿lograrán resistirse a su poder?',
        idioma: 'Español / Castellano',
        editorial: 'SALAMANDRA',
        autor: 'RIORDAN, RICK',
        publicacion: '2023',
        stock:7,
        precio: 20000,
        destacado: 1
    },
    {
        id: 13,
        nombre: 'El Principito',
        categoria: 3,
        foto:'el_principito',
        isbn: '9789878000978',
        tematica: 'Literatura infantil y juvenil',
        descripcion: 'Tener El Principito en las manos es una conexión directa con la infancia, para muchos fue un libro de lectura obligatoria en la escuela. Muchos lo leímos sin entender la profundidad que encierra su mensaje. Su trascendencia y fama mundial es bien merecida porque es un cuento que con palabras sencillas nos deja aprendizajes de vida, nos habla de la naturaleza humana con sus virtudes y defectos.',
        idioma: 'Español / Castellano',
        editorial: 'SALAMANDRA',
        autor: 'SAINT-EXUPERY, ANTOINE DE',
        publicacion: '2021',
        stock:10,
        precio: 20000,
        destacado: 0
    },
    {
        id: 14,
        nombre: 'Uma y Sapo 1',
        categoria: 3,
        foto:'uma_y_sapo_1',
        isbn: '9789504672043',
        tematica: 'Manuales y multiáreas',
        descripcion: 'Las nuevas áreas integradas para disfrutar acompañados por dos simpáticos amigos: Uma y Sapo. Una propuesta con un enfoque equilibrado que intensifica los conocimientos en las áreas de Prácticas del lenguaje y Matemática, mientras guía en la reflexión de los propios aprendizajes, allanando el camino hacia una sólida comprensión de saberes. Además, abraza las recomendaciones más recientes de los ministerios de educación y se compromete a fortalecer pilares fundamentales como la lectura, la EAI y la ESI',
        idioma: 'Español / Castellano',
        editorial: 'SANTILLANA EDITORIAL S.A.',
        autor: 'N/A',
        publicacion: '2024',
        stock:1,
        precio: 20000,
        destacado: 0
    },
    {
        id: 15,
        nombre: 'Harry Potter y la piedra filosofal',
        categoria: 3,
        foto:'harry_potter',
        isbn: '9789878000107',
        tematica: 'Literatura infantil y juvenil',
        descripcion: 'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos… aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino.',
        idioma: 'Español / Castellano',
        editorial: 'SALAMANDRA',
        autor: 'ROWLING, J. K.',
        publicacion: '2020',
        stock:14,
        precio: 20000,
        destacado: 1
    },
    {
        id: 16,
        nombre: 'Kiako',
        categoria: 4,
        foto:'kiako',
        isbn: '9789500769174',
        tematica: 'Cocina general: recetas y cursos',
        descripcion: '¿Podemos volver a cocinar lo que comemos a diario sin agotarnos ni añorar el delivery? Natalia Kiako dice que sí. Que lo que preparamos en casa puede ser muy rico, incluso más que la comida comprada. Pero ¿cómo? Si nunca hay tiempo, si estamos siempre corriendo. Pensado como un libro-taller, en CLAVES DE COCINA se despliega un método que tiene mucho de la organización intuitiva de nuestras bisabuelas y una buena dosis de pragmatismo actualizado para ahorrar tiempo, aprovechar atajos y potenciar recursos.',
        idioma: 'Español / Castellano',
        editorial: 'SUDAMERICANA',
        autor: 'KIAKO, NATALIA',
        publicacion: '2023',
        stock:6,
        precio: 20000,
        destacado: 0
    },
    {
        id: 17,
        nombre: 'El planer y Gaturro',
        categoria: 4,
        foto:'gaturro',
        isbn: '9789500769198',
        tematica: 'Agendas y Calendarios',
        descripcion: 'Un hermoso recurso para que organicen sus días, planifiquen actividades, armen listas de preferencias y se diviertan coloreando y completando juegos y destrezas. ¡Y todo esto junto a sus personajes favoritos de Mundo Gaturro',
        idioma: 'Español / Castellano',
        editorial: 'SUDAMERICANA INFANTIL',
        autor: 'N/A',
        publicacion: '2023',
        stock:8,
        precio: 20000,
        destacado: 0
    },
    {
        id: 18,
        nombre: 'Heartstopper',
        categoria: 4,
        foto:'heartstopper',
        isbn: '9789877477573',
        tematica: 'Pasatiempos, acertijos y juegos',
        descripcion: 'Heartstopper es la novela gráfica que ya conquistó los corazones de todo el mundo ¡y ahora llega para colorear!. Este libro incluye un recorrido por las mejores escenas de la saga, imágenesy postales nunca antes vistas, ilustraciones interactivas para que crees tus propios diálogos y un mini cómic entero para colorear.',
        idioma: 'Español / Castellano',
        editorial: 'V&R EDITORAS SA',
        autor: 'OSEMAN, ALICE',
        publicacion: '2021',
        stock:5,
        precio: 20000,
        destacado: 0
    },
    {
        id: 19,
        nombre: 'Paulina cocina Cocinen ustedes',
        categoria: 4,
        foto:'cocinen_ustedes',
        isbn: '9789504979210',
        tematica: 'Cocina general: recetas y cursos',
        descripcion: 'Este es un libro hecho con la colaboracion de mis hijos. El resultado es este libro de recetas que ellos adoran hacer y que creemos que son una excelente forma de acercarse a la comida para cualquiera. En Cocinen Ustedes van a encontrar cmo hacer comidas riqusimas, sanas y fciles de preparar con una pequea ayudita de los adultos de la casa. Chicas y chicos van a poder armar comidas completas, desayunos picos, meriendas deliciosas, cositas para picar mientras juegan a la Play, postres para quedar mil con amigos y amigas',
        idioma: 'Español / Castellano',
        editorial: 'PLANETA',
        autor: 'N/A',
        publicacion: '2023',
        stock:5,
        precio: 20000,
        destacado: 0
    }
];

/* Funciones de acceso a los productos*/

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( (resolve) => {
         setTimeout(()=>{
            idCategoria ? 
                resolve(productos.filter(producto => producto.categoria == parseInt(idCategoria)))
            :
                resolve(productos.filter(producto => producto.destacado == 1))
            
            
        },4000);
    })

};

export const getProductoPorId = (idProducto) => {
    return new Promise( (resolve) => {
         setTimeout(()=>{
            resolve(productos.find(producto => producto.id == parseInt(idProducto)))  
        },4000);
    })

};