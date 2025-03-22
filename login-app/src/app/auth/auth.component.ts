import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: false,
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    this.http.post('http://localhost:3000/login', this.loginForm.value)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.errorMessage = '';
          this.router.navigate(['/inicio']);  // Redirigir a la pantalla de éxito
        },
        error => {
          this.errorMessage = error.error.mensaje || 'Error de autenticación';
        }
      );
  }
}
