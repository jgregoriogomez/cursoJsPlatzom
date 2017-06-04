const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function (){
	it('Si la palabra termina en "ar" se le quitan esos caracteres',function(){
		const translation = platzom("programar")
		expect(translation).to.equal("program")
	})

	it('Si la palabra inicia con z se le añade "pe" al fina',function(){
		const translation = platzom("zorro")
		const translation2 = platzom("zarpar")
		expect(translation).to.equal("zorrope")
		expect(translation2).to.equal("zarppe")
	})

	it('Si la palabra traducida tiene más de 9 letras, se debe partir en la mitad con un guion',function(){
		const translation = platzom("palindromo")
		const translation2 = platzom("abecedario")
		expect(translation).to.equal("palin-dromo")
		expect(translation2).to.equal("abece-dario")
	})

	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas',function(){
		const translation = platzom("arepera")
		expect(translation).to.equal("ArEpErA")
	})
})