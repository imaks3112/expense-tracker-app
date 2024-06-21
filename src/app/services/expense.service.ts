import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];
  
  constructor(private http: HttpClient) { }
  
  getExpenses(): Observable<any> {
    const url = "http://localhost:3000/expenses";
    return this.http.get(url);
  }

  addExpense(expense: Expense): any {
    const url = "http://localhost:3000/expenses";
    return this.http.post(url, expense).subscribe(ele => ele);
  }

  deleteExpense(expense: Expense): any {
    const url = `http://localhost:3000/expenses/${expense.id}`;
    return this.http.delete(url).subscribe(ele => ele);
  }

  updateExpense(updatedExpense: Expense, index: number): any {
    this.expenses[index] = updatedExpense;
    const url = `http://localhost:3000/expenses/${updatedExpense.id}`;
    return this.http.put(url, updatedExpense).subscribe(ele => ele);
  }
}
