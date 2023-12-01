CREATE DATABASE TuDoctorOnline; 
USE TuDoctorOnline;
DROP DATABASE TuDoctorOnline;
DROP TABLE PACIENTES;
DROP TABLE EMPLEADO;
DROP TABLE ROL;

CREATE TABLE Pacientes
( 
	dni INT PRIMARY KEY,
    nombrePaciente VARCHAR(50) NOT NULL,
	direccionPaciente VARCHAR(50) NOT NULL,
    telefonoPaciente INT(11) NOT NULL,
	sexoPaciente VARCHAR(20) NOT NULL,
    estadoCivil VARCHAR(40) NOT NULL,
    correoPaciente VARCHAR(50) NOT NULL,
    contrasenaPaciente VARCHAR(30) NOT NULL,
    fechaNacimientoPaciente DATE NOT NULL,
    rhPaciente VARCHAR(20) NOT NULL,
	eps INT NOT NULL
);

CREATE TABLE Citas
(
	id_cita INT PRIMARY KEY AUTO_INCREMENT,
	dni_cita INT NOT NULL,
    numeroIPS INT NOT NULL,
    nombreCita VARCHAR(30) NOT NULL,
    fechaCita DATE NOT NULL,
    horaCita TIME NOT NULL,
    tipoCita VARCHAR(50) NOT NULL,
    sintomas VARCHAR(80) NOT NULL
);

CREATE TABLE Empleado
(
	idEmpleado INT PRIMARY KEY,
    nombreEmpleado VARCHAR(50) NOT NULL,
    estadoEmpleado VARCHAR(12) NOT NULL,
    especializacion VARCHAR(50) NOT NULL,
    diasDiponibles VARCHAR(30) NOT NULL,
    turnoInicio TIME NOT NULL,
    turnoFin TIME NOT NULL,
    correoEmpleado VARCHAR(30) NOT NULL,
    contrasenaEmpleado VARCHAR(40) NOT NULL,
 	codigoRolFK INT NOT NULL,
	FOREIGN KEY (codigoROLFK)
	REFERENCES ROL (codigoRol)
);

CREATE TABLE ROL
(
codigoRol INT PRIMARY KEY,
nombreRol VARCHAR(200) NOT NULL
);

INSERT INTO ROL (codigoRol,nombreRol) VALUES
(1,'gerente'),
(2,'doctor');

INSERT INTO Empleado (idEmpleado,nombreEmpleado,estadoEmpleado,especializacion,diasDiponibles,turnoInicio,turnoFin,correoEmpleado,contrasenaEmpleado,codigoRolFK) VALUES
(1028783118,'Brayan Blanco','Activo','Gerente','Lunes','3:00pm','3:00pm','beba002ht@gmail.com','2265',1);


select * from Pacientes;
select * from Empleado;
select * from Citas;




