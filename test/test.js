
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
	it('si la palabra termina con "ar", se le quita ese contenido', function(){
		const translation = platzom("programar")
		expect(translation).to.equal("Program")	
	})

	it('si la palabra inicia con z, se leañade ', function(){
		const translation = platzom("zorro")
		const translation2 = platzom("zarpar")

		expect(translation).to.equal("zorrope")
		expect(translation2).to.equal("zorppe")
	})

	it('la palabra tiene  mas de 10 palabras drujulas', function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})

	it('Por ultimio, si la palabra se escride de difernte forma', function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})
