import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from 'src/app/models/expense';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  @Input() expenses: Expense[];
  @Output() deleteExpense: EventEmitter<any> = new EventEmitter();
  @Output() editExpense: EventEmitter<{ expense: Expense, index: number }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(expense: any): void {
    this.deleteExpense.emit(expense);
  }

  onEdit(expense: Expense, index: number): void {
    this.editExpense.emit({ expense, index });
  }
}
