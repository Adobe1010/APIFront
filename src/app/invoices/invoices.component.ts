import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices',
  standalone: false,
  
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {
  isDialogVisible: boolean = false;
  isDragging: boolean = false;

  openDialog(): void{ // Abrir el diálogo
    this.isDialogVisible = true
  }

  closeDialog(): void{ // Cerrar el diálogo
    this.isDialogVisible  = false
  }

  // Activar el input file al hacer clic en la zona de carga
  triggerFileInput() {
    const fileInput = document.querySelector<HTMLInputElement>('#dialog input[type="file"]');
    fileInput?.click();
  }

  // Manejar los archivos seleccionados desde el input
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      const files = Array.from(input.files);
      this.processFiles(files);
    }
  }

  // Manejar el evento dragover
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  // Manejar el evento dragleave
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  // Manejar el evento drop
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files) {
      const files = Array.from(event.dataTransfer.files);
      this.processFiles(files);
    }
  }

  // Procesar los archivos cargados
  private processFiles(files: File[]) {
    files.forEach((file) => {
      console.log('Archivo cargado:', file.name);
    });

    alert(`${files.length} archivo(s) cargado(s) correctamente.`);
  }
}
