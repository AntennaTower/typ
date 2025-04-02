import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DEFAULT_EDITOR_CONTENT } from '../home.consts';

@Component({
  template: `
    <div class="flex flex-col gap-1 items-center max-w-[85vw]">
      <div class="flex items-center gap-1">
        <button class="btn btn-sm btn-outline" (click)="onReset()">
          Reset
        </button>
        <input
          type="range"
          min="0"
          max="100"
          [value]="$fontSize()"
          class="range"
          [(ngModel)]="$fontSize"
        />
      </div>
      <div class="flex gap-2 overflow-scroll w-full">
        @for (font of $selectedFonts(); track $index) {
          <textarea
            [style]="{
              fontSize: this.$fontSize() + 'px',
              fontFamily: font + ', sans-serif',
            }"
            class="textarea grow resize-none overflow max-h-[90vh] min-w-[220px]"
            [rows]="45"
            [value]="$content()"
            [(ngModel)]="$content"
          ></textarea>
        }
      </div>
    </div>
  `,
  imports: [FormsModule],
  selector: 'app-fonts-preview',
})
export class FontsPreviewComponent {
  readonly $selectedFonts = input.required<string[]>({
    alias: 'selectedFonts',
  });
  protected readonly $content = model(DEFAULT_EDITOR_CONTENT);
  protected readonly $fontSize = model(15);

  protected onReset() {
    this.$content.set(DEFAULT_EDITOR_CONTENT);
    this.$fontSize.set(15);
  }
}
