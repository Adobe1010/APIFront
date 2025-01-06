import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-config',
  standalone: false,
  
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent implements OnInit{
  dataList: any[] = [];
  newName: string = '';
  newDescription: string = '';
  showCreateForm: boolean = false; // Controla si se muestra el formulario de creación

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData(); // Obtener datos al cargar el componente
  }

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      this.dataList = data;
    });
  }

  addData(): void {
    if (!this.newName) {
      alert("El campo 'Nombre' es obligatorio.");
      return; 
    }
    const newData = { name: this.newName, description: this.newDescription};
    this.dataService.addData(newData).subscribe(response => {
      this.getData();  // Recargar los datos después de agregar
      this.newName = '';
      this.newDescription = '';
      this.showCreateForm = false; // Ocultar el formulario después de agregar
    })
  }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm; // Alterna la visibilidad del formulario
  }
  deleteData(id: number): void {
    this.dataService.deleteData(id).subscribe(() => {
      this.getData(); // Recargar los datos después de eliminar
    });
  }

  editData(item: any): void {
    const updatedData = { name: item.name, description: item.description };
    this.dataService.updateData(item.id, updatedData).subscribe(() => {
      this.getData();
    });
  }
}
