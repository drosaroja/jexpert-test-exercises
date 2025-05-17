import { describe, it, expect } from 'vitest'
import { suma, crearUsuario, obtenerTipo } from './funciones.js'

describe('Aserciones básicas', () => {
  describe('Función suma', () => {
    it('debe sumar dos números correctamente', () => {
      //Arrange
      const a = 1
      const b = 2
      const resultadoEsperado = 3

      //Act
      const resultado = suma(a, b)

      //Assert
      expect(resultado).toBe(resultadoEsperado)
    })
    
    it('debe retornar un número', () => {
     const resultado = suma(2, 3);
     expect(typeof resultado).toBe('number')
      
    })
    
    it('debe manejar números negativos', () => {
      const resultado = suma(-1, -2)
      expect(resultado).toBe(-3)
    })
  })
  
  describe('Función crearUsuario', () => {
    it('debe crear un objeto con las propiedades correctas', () => {
      const nombre = 'Luna'
      const edad = 38
      const nuevoUsuario = {
        nombre: nombre,
        edad: edad,
        activo: true,
        fecha: new Date()
      }

      const usuario = crearUsuario(nombre, edad)

      expect(usuario).toEqual(nuevoUsuario)
    })
    
    it('debe asignar el nombre correctamente', () => {
      
    })
    
    it('debe asignar la edad correctamente', () => {
      
    })
    
    it('debe tener la propiedad activo como true', () => {
      
    })
    
    it('debe incluir una propiedad fecha con una instancia de Date', () => {
      
    })
  })
  
  describe('Función obtenerTipo', () => {
    it('debe retornar "number" para números', () => {
      
    })
    
    it('debe retornar "string" para cadenas de texto', () => {
      
    })
    
    it('debe retornar "boolean" para valores booleanos', () => {
      
    })
    
    it('debe retornar "object" para objetos', () => {
      
    })
  })
}) 