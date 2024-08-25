import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Question } from '../../models/question';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent, ResultComponent], // Importer CommonModule
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  currentQuestionIndex: number = 0;
  score: number = 0;
  isQuizCompleted: boolean = false;

  questions: Question[] = [
    {
      questionText: 'Quelle est la capitale de la France ?',
      options: ['Paris', 'Londres', 'Berlin', 'Madrid'],
      correctAnswer: 0
    },
    {
      questionText: 'Qui a écrit "Les Misérables" ?',
      options: ['Victor Hugo', 'Émile Zola', 'Jules Verne', 'Honoré de Balzac'],
      correctAnswer: 0
    },
    {
      questionText: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge', 'Jaune'],
      correctAnswer: 0
    }
  ];

  selectOption(index: number) {
    if (index === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isQuizCompleted = true;
    }
  }
}
