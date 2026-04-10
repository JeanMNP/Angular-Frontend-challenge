import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { UsersService, User } from './users.service';
import { debounceTime, switchMap, catchError, finalize } from 'rxjs/operators';
import { Subject, of } from 'rxjs';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  private searchSubject = new Subject<string>();
  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private usersService: UsersService) {
    this.searchSubject.pipe(
      debounceTime(300),
      switchMap((term: string) => {
        this.loading.set(true);
        return this.usersService.list().pipe(
          finalize(() => this.loading.set(false)),
          catchError((err: unknown) => {
            const message = err instanceof Error ? err.message : String(err);
            this.error.set(message);
            return of<User[]>([]);
          })
        );
      })
    ).subscribe((users: User[]) => {
      this.users.set(users);
    });
  }

  onSearch(term: string) {
    this.searchSubject.next(term);
  }
}
