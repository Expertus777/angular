import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  template: `<p>Имя пользователя: {{userName}}</p>
             <p>Возраст пользователя: {{userAge}}</p>`
})

export class AppInputDecoratorComponent {
  @Input() userName: string;
  @Input() userAge: number;
}
