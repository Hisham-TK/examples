import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  /*
  Reactive form
  */
  addTaskForm!: FormGroup;
  task!: Task;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.task = {
    //   text: ['', Validators.required],
    //   day: ['', Validators.required],
    //   reminder: false,
    // };

    this.addTaskForm = this.fb.group({
      text: ['', [Validators.required]],
      //   // text: new FormControl(this.addTaskForm.value.text, [
      //   //   Validators.required,
      //   //   Validators.minLength(4),
      //   // ]),
      day: [
        '2021-05-11T22:00:00.000Z',
        [
          Validators.required,
          Validators.pattern(
            // /^(0?[1-9]|1[012])[-/](0?[1-9]|[12][0-9]|3[01])[-/](19|20)\d\d/
            /^(19|20)\d\d-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])T.+$/
          ),
          // new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd'),
        ],
      ],
      reminder: [false, []],
    });

    // this.addTaskForm = new FormGroup({
    //   text: new FormControl(this.task.text, [Validators.required]),
    //   day: new FormControl(this.task.day, [Validators.required]),
    //   reminder: new FormControl(this.task.reminder, [Validators.requiredTrue]),
    // });
    // console.log('Log ~ ', this.addTaskForm);

    // this.addTaskForm.valueChanges.subscribe(console.log);
  }

  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  onAddTask() {
    this.addTask.emit(this.addTaskForm.value);
  }

  /*
  Normal form
   */
  // text = '';
  // day = 'May 5th at 2:30pm';
  // reminder = false;

  // // @Output() submitTask = new EventEmitter<Task>();
  // @Output() addTask: EventEmitter<Task> = new EventEmitter();

  // constructor() {}

  // ngOnInit(): void {}

  // onAddTask(): void {
  //   // CustomAssertions.valuesNullOrEmptyAssertion([
  //   //   { value: this.text, message: 'Text is required' },
  //   //   { value: this.day, message: 'Day is required' },
  //   // ]);

  //   const newTask: Task = {
  //     text: this.text,
  //     day: this.day,
  //     reminder: this.reminder,
  //   };

  //   this.addTask.emit(newTask);

  //   this.text = '';
  //   this.day = 'May 5th at 2:30pm';
  //   this.reminder = false;
  // }
}
