// Desafío - Creando y modificando objetos
// Autor: Daniel Vega - https://cianware.com

// Función constructora para Consultorio
function Consultorio(nombre,pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

// Función constructora para Paciente
function Paciente(nombre,edad,rut,diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    // Getter y Setter para propiedad _nombre
    Object.defineProperty(this,'getNombre',{
        get: function(){
            return _nombre;
        }
    });
    Object.defineProperty(this,'setNombre',{
        set: function(nombre){
            _nombre = nombre;
        }
    });

    // Getter y Setter para propiedad _edad
    Object.defineProperty(this,'getEdad',{
        get: function(){
            return _edad;
        }
    });
    Object.defineProperty(this,'setEdad',{
        set: function(edad){
            _edad = edad;
        }
    });

    // Getter y Setter para propiedad _rut
    Object.defineProperty(this,'getRut',{
        get: function(){
            return _rut;
        }
    });
    Object.defineProperty(this,'setRut',{
        set: function(rut){
            _rut = rut;
        }
    });

    // Getter y Setter para propiedad _diagnostico
    Object.defineProperty(this,'getDiagnostico',{
        get: function(){
            return _diagnostico;
        }
    });
    Object.defineProperty(this,'setDiagnostico',{
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
}

// Método para mostrar todos los pacientes y sus datos
Consultorio.prototype.mostrarPacientes = function(){
    console.log('Todos los pacientes del consultorio:');

    // Ciclo FOR para recorre todo el arreglo de pacientes del consultorio e
    // imprimir por consola todos los datos.
    for(var i=0; i < this.pacientes.length; i++){
        console.log('Nombre: ' + this.pacientes[i].getNombre + ' - ' + 'Edad: ' + this.pacientes[i].getEdad + ' - ' + 'Rut: ' + this.pacientes[i].getRut + ' - ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico);
    }
}

// Método para buscar los datos de los pacientes por nombre
Consultorio.prototype.buscarDatosPorNombre = function(nombre){

    // Ciclo FOR para recorre todo el arreglo de pacientes del consultorio e
    // imprime por consola los datos del paciente buscado por nombre
    for(var i=0; i < this.pacientes.length; i++){
        if(nombre == this.pacientes[i].getNombre){
            console.log('Buscar datos del paciente por nombre: ' + this.pacientes[i].getNombre);
            console.log('Nombre: ' + this.pacientes[i].getNombre + ' - ' + 'Edad: ' + this.pacientes[i].getEdad + ' - ' + 'Rut: ' + this.pacientes[i].getRut + ' - ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico);
        }
    }
    
}

// Instanciar cada objeto utilizando la instrucción new
var p1 = new Paciente('Gokú',37,'15.678.342-2','Enfermedad al corazón');
var p2 = new Paciente('Vegeta',38,'14.432.567-5','Psicosis');
var p3 = new Paciente('Piccolo',39,'13.876.123-4','Cefalea');
var c1 = new Consultorio('Consultorio Capsule Corp',[p1,p2,p3]);

// Llamada a método para mostrar todos los pacientes
c1.mostrarPacientes();

// Llamada a método para buscar por nombre
c1.buscarDatosPorNombre('Gokú');