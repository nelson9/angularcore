import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Level } from './level'
import { Question } from './question'
import { QuestionSet } from './questionSet'
import { LevelTestService } from './level-test.service'
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: "level-test",
    templateUrl: './level-test.component.html',
    styleUrls: ['./level-test.component.scss'],
    providers: [LevelTestService]
})
export class LevelTestComponent implements OnInit {

    questionSetList: Array<QuestionSet>;
    currentQuestionsSet: QuestionSet;
    currentQuestion: Question;
    score: number;
    testOver: boolean;
    level: Level;
    continueNextLevel: boolean;
    subjectLine: string;
    questionsLoaded: boolean;
    testStarted: boolean;
    errorMessage: string;

    constructor(private levelTestService: LevelTestService, public modal: Modal) { }

  

    ngOnInit() {
        this.levelTestService.getQuestionSet().then(result => {
            this.questionSetList = result;
            this.currentQuestionsSet = this.questionSetList[0];
            this.currentQuestion = this.currentQuestionsSet.questions[0];
            this.questionsLoaded = true;
        });
        this.score = 0;
        this.testOver = false;
        this.level = Level.A1;
        this.continueNextLevel = false;
        this.testStarted = false;
    }

    submitAnswer(answer) {
        if (answer.answer == null) {
            this.errorMessage = "Please select an answer to continue";
        } else {
            this.errorMessage = null;
            
            if (answer.answer.trim() === this.currentQuestion.answer.trim()) {
                this.score = this.score + 1;

                if (this.score >= 12) {
                    this.continueNextLevel = true;
                }
            }
            console.log(this.score);
            let index = this.currentQuestionsSet.questions.indexOf(this.currentQuestion) + 1;

            if (index < this.currentQuestionsSet.questions.length) {
                this.currentQuestion = this.currentQuestionsSet.questions[index];
            }
            else {
               
                if (this.continueNextLevel && this.questionSetList.indexOf(this.currentQuestionsSet) + 1 < this.questionSetList.length) {
                    let successMessage = "You have passed " + this.getLevelName() + " with " + this.score + " correct answers out of " + this.currentQuestionsSet.questions.length + ".";
                    this.modelAlert("Well done!", successMessage);
                    this.increaseLevel();
                    let setIndex = this.questionSetList.indexOf(this.currentQuestionsSet);
                    this.currentQuestionsSet = this.questionSetList[setIndex + 1];
                    this.currentQuestion = this.currentQuestionsSet.questions[0];
                    this.score = 0;
                    this.continueNextLevel = false;

                }
                else {
                    this.testOver = true;
                    if (this.continueNextLevel && this.level === Level["B2.2"]) {
                        let successMessage = "Well done! You have passed " + this.getLevelName() + " with " + this.score + " correct answers out of " + this.currentQuestionsSet.questions.length + ". <br/> <br/>Your Spanish course level is <strong>C1</strong>";
                        this.increaseLevel();
                        this.modelAlert("You've completed the test", successMessage);
                    } else {
                        this.level = this.currentQuestionsSet.level;
                        this.modelAlert("Thanks for taking the test!", `Sorry but you didn't get enough correct to move to the next level. <br/><br/>  You got ${this.score} correct answers out of ${this.currentQuestionsSet.questions.length}, you need to get 12 to pass.<br/> <br/>Your Spanish course level should be <strong>${this.getLevelName()}</strong>`);                       
                    }
                    this.subjectLine = "I've completed the test and my Spanish course level should be " + this.getLevelName();
                }
            }
        }

    }

    startTest() {
        this.testStarted = true;
    }

    private increaseLevel() {
        let level = this.currentQuestionsSet.level;
        if (level === Level.A1) {
            this.level = Level.A2;
        }
        if (level === Level.A2) {
            this.level = Level.B1;
        }
        if (level === Level.B1) {
            this.level = Level["B2.1"];
        }
        if (level === Level["B2.1"]) {
            this.level = Level["B2.2"];
        }
        if (level === Level["B2.2"]) {
            this.level = Level.C1;
        }
    }


    getPercentageComplete(): number {
        let indexOfCurrentQuestion = this.currentQuestionsSet.questions.indexOf(this.currentQuestion) + 1;
        return (indexOfCurrentQuestion / this.currentQuestionsSet.questions.length) * 100;
    }

    getLevelName(): string {
        return Level[this.level];
    }

    getQuestionNumber(): number {
        return this.currentQuestionsSet.questions.indexOf(this.currentQuestion) + 1;
    }

    getTotalQuestions(): number {
        return this.currentQuestionsSet.questions.length;
    }

    private modelAlert(title: string, message: string) {
        this.modal.alert()
            .size('lg')
            .title(title)
            .okBtnClass('button special')
            .body("<p>" + message + "</p>")
            .open();
    }
}


