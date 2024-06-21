import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit, OnChanges {
  @Input() expense: Expense; // Input expense object for editing
  @Input() updatedData;
  @Output() addExpense: EventEmitter<Expense> = new EventEmitter();
  @Output() updateExpense: EventEmitter<Expense> = new EventEmitter();

  isEditing: boolean = false;
  expensesForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createExpensesForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.updatedData?.id) {
      this.setExpensesForm();
    }
  }
  createExpensesForm() {
    this.expensesForm = this.fb.group({
      description: '',
      amount: null,
      date: ''
    });
    console.log('ass', this.expense)
  
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.updateExpense.emit(this.expensesForm.value);
    } else {
      this.addExpense.emit(this.expensesForm.value);
      this.expensesForm.reset() // Clear form after adding
    }
  }

  setExpensesForm() {
    this.expensesForm.patchValue(this.updatedData);
  }
}
