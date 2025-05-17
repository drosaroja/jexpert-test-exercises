import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll } from 'vitest'
import { Contador, DB } from './funciones.js'

describe('Setup y Teardown', () => {
  describe('Contador con beforeEach y afterEach', () => {
      //Arrange
    let contador
    beforeEach(()=>{
      contador = new Contador(0)
    })
  afterEach(()=> {
    contador.reiniciar()
  })
    it('debe incrementar correctamente', () => {
      //Act
      let nuevoValor = contador.incrementar()
      //Assert
      expect(nuevoValor).toBe(1)
    })


    it('debe decrementar correctamente', () => {
        //Act
      let nuevoValor = contador.decrementar()
      //Assert
      expect(nuevoValor).toBe(-1)
    })

    it('debe iniciar con el valor correcto en cada test', () => {
      let valor = contador.getValor()

      expect(valor).toBe(0)
    })
  })

  describe('DB con beforeAll y afterAll', () => {
     let baseDatos = new DB()
    beforeAll(()=>{
     baseDatos.conectar()
    })
    afterAll(()=> {
      baseDatos.desconectar()
    })

    it('debe insertar datos correctamente', () => {
      let dato = 72
      let cantidadDatos = baseDatos.insertar(dato)
      expect(cantidadDatos).toBe(1)
    })

    it.only('debe obtener todos los datos', () => {
      let miBaseDatos = [45, 334, 78, 1]
      baseDatos.datos = [...miBaseDatos]
      expect(baseDatos.obtenerTodos()).toStrictEqual(miBaseDatos)
    })
  })
}) 