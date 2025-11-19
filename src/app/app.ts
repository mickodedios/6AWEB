import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { Hobbies } from "./hobbies/hobbies";
import { Education } from "./education/education";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Footer, Hobbies, Education],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
