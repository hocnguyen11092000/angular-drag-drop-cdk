import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input class="border p-2 rounded-md" type="text" placeholder="input..." />
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() config: any;
}
