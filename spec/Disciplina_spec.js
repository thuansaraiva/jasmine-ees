describe("Suite de testes Disciplina - Validação e Testes", function() {
	var disciplina = new Disciplina();
	it("deve verificar os tipos de cada atributo da disciplina", function() {
		expect(disciplina.cargaHoraria).toEqual(jasmine.any(Number));
	});
	it("deve verificar 2", function() {
	  expect(disciplina.nomeDaDisciplina).toEqual("Validação e Testes");
	});
});