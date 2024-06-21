import { Component } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  expenses: Expense[] = [];
  updatedData;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
    });
  }

  async addExpense(expense: Expense): Promise<any> {
    if (!this.updatedData.isEditing) {
      await this.expenseService.addExpense(expense);
    }
    else {
      this.expenseService.updateExpense(this.updatedData);
    }
    await this.loadExpenses();
  }

  deleteExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense);
    this.loadExpenses();
  }

  editExpense(updatedExpense: any, index: any): void {
    this.updatedData = updatedExpense;
    this.loadExpenses();
  }
}
