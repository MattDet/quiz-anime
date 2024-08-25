import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() score: number = 0;
  @Input() totalQuestions: number = 0;

  restartQuiz() {
    window.location.reload(); // Fonction pour redémarrer le quiz
  }
}
