import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

  enviarMensaje() {
    console.log('Mensaje enviado');
  }
  formState = {
    name: '',
    email: '',
    feedback: ''
  }
}
