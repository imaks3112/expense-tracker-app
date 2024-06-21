import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];

  constructor() { }

  getExpenses(): Observable<Expense[]> {
    return of(this.expenses);
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  deleteExpense(index: number): void {
    this.expenses.splice(index, 1);
  }

  updateExpense(updatedExpense: Expense, index: number): void {
    console.log('index', index);
    console.log('updatedExpense', updatedExpense)
    this.expenses[index] = updatedExpense;
  }
}
