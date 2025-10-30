import { EmpleadosService, Empleado } from '../empleados.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent {
  empleados: Empleado[] = [];
  nuevoEmpleado: Empleado = {
    nombre: '',
    apellido: '',
    correo: '',
    salario: 0
  };

  constructor(private empleadosService: EmpleadosService) {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadosService.getEmpleados().subscribe((data: Empleado[]) => {
      this.empleados = data;
    });
  }

  agregarEmpleado(): void {
    this.empleadosService.crearEmpleado(this.nuevoEmpleado).subscribe(() => {
      this.cargarEmpleados();
      this.nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0 };
    });
  }
}
