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

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y devuelve un boolean(true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java'))
console.log(languages.includes('cobol'))

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const resultado = languages.filter(function (language) {
  // return language === 'java' // ['java']
  // return language.includes('c') // ['javascript', 'c++']
  return language.toLowerCase().includes('c') //['javascript', 'C', 'c++']
})

console.log(resultado)
console.log(languages)