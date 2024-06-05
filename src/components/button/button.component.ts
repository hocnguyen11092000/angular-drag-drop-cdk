import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="p-2 rounded-lg bg-[#eee] w-full mb-3">
      {{ config?.name || 'button' }}
    </button>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() config: any;
}
