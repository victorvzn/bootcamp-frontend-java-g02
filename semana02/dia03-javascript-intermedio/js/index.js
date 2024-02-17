console.log('Hola JS')

// Tipos de datos primitivos

const numero = 399 // Number
const cadena = 'Victor' // String
const esMayor = true // Boolean

// Arrays

// Un arreglo tiene elementos a cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc...

const arregloVacio = []
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true]

console.log(arregloVacio)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // undefined

// Escritura en un arreglo

listaDeValores[2] = 99

console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo

listaDeValores.push('javascript')

console.log(listaDeValores)

// Remover elementos del final del arreglo

listaDeValores.pop()

console.log(listaDeValores)

// Eliminar un elemento

listaDeValores.splice(4, 1)

console.log(listaDeValores)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeValores.length)
console.log('bienvenido'.length)