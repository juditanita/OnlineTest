import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

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
  progress: number = 0;
  msg: string = '';
  isCompleted: boolean = false;
  isPassed: boolean = false;
  constructor(
    private questionService: QuestionService,
    public router: Router
  ) {}

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
  answer(currentQnumbs: number, option: any) {
    if (currentQnumbs === this.questionList.length) {
      this.stopCounter();
      this.isCompleted = true;
    }
    if (option.correct) {
      this.points += 10;
      this.currectAnswer++;
      this.currentQuestion++;
      this.getProgressPercent();
    } else {
      this.incurrectAnswer++;
      this.currentQuestion++;
      this.getProgressPercent();
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
  stopCounter(): void {
    this.intervable$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  getProgressPercent() {
    this.progress = (this.currectAnswer / this.questionList.length) * 100;
    if (this.progress < 60) {
      this.msg =
        'You did not reach the required level to pass the test. Better score next time';
    } else {
      this.isPassed = true;
      this.msg = 'You have scored over 60%';
    }
  }
  startover() {
    this.router.navigate(['welcome-page']);
  }
}
