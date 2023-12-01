import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompListCitaEmpleado from './vistas/agenda/listaAgenda.js';
import CompCita from './vistas/cita/cita.js';
import CompCrearPaciente from './vistas/registrar/regitrarPaciente.js';
import CompRegistrarEmpleado from './vistas/empleado/registrarEmpleado.js';
import Login from './vistas/login/iniciarSesion.js';
import CompMenuGerente from './vistas/empleado/menuGerente.js';
import CompMenuDoctor from './vistas/empleado/menuDoctor.js';
import CompListCita from './vistas/listar/listarCita.js';
import CompMenuPaciente from './vistas/paciente/menuPaciente.js';
import CompListCitaPaciente from './vistas/listar/listarCitaPaciente.js';
import CompListEmpleadoPaciente from './vistas/agenda/listaAgendaPaciente.js';
import CompActualizarEmpleado from './vistas/agenda/actualizarEmpleado.js'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
        
            <Route path='/listAgenda' element={<CompListCitaEmpleado />} />
            <Route path='/listAgendaPaciente' element={<CompListEmpleadoPaciente />} />
            <Route path='/cita' element={<CompCita />} />
            <Route path='/registrarPaciente' element={<CompCrearPaciente/>} />
            <Route path='/registrarEmpleado' element={<CompRegistrarEmpleado/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/menuGerente' element={<CompMenuGerente/>}/>
            <Route path='/menuDoctor' element={<CompMenuDoctor/>}/>
            <Route path='/listarCitas' element={<CompListCita/>}/>
            <Route path='/menuPaciente' element={<CompMenuPaciente/>}/>
            <Route path='/listarCitasPaciente' element={<CompListCitaPaciente/>}/>
            <Route path='/actualizarEmpleado/:idEmpleado' element={<CompActualizarEmpleado/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;