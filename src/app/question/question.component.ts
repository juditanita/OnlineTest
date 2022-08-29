import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  currectAnswer: number = 0;
  incurrectAnswer: number = 0;
  intervable$: any;
  progress: string = '0';
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((result) => {
      this.questionList = result.questions;
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQs: number, option: any) {
    if (option.correct) {
      this.points += 10;
      this.currectAnswer++;
      this.currentQuestion++;
      this.getProgressBar();
    } else {
      this.incurrectAnswer++;
      this.currentQuestion++;
    }
  }
  startCounter() {
    this.intervable$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.intervable$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.intervable$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  getProgressBar() {
    this.progress = (
      (this.currentQuestion / this.questionList.lenght) *
      100
    ).toString();
    return this.progress;
  }
}
