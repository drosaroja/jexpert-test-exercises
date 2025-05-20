import { describe, it, expect, vi } from 'vitest'
import { ejecutarConCallback, ServicioExterno, Cliente } from './funciones.js'

describe('Mocking de Funciones', () => {
  describe('vi.fn() - Mockear funciones', () => {
    it('debe llamar al callback con el resultado correcto', () => {
      const operacion = (arg1, arg2) => {
        return arg1 + arg2
      }
      const a = 1
      const b = 2
      const resultado = operacion(a, b)

      const callback = vi.fn()
      
      ejecutarConCallback(operacion, a, b, callback)

      expect(callback).toHaveBeenCalledWith(resultado)
    })
  })

  describe('vi.spyOn() - Espiar métodos', () => {
    it.only('debe espiar el método llamarAPI del servicio', () => {
      const servicio = new ServicioExterno()

      const spy = vi.spyOn(servicio, 'llamarAPI')
      
      expect(spy).toHaveBeenCalled()
    })
    
    it('debe mockear el método procesarResultado para devolver un valor personalizado', () => {
      
    })
  })
}) 