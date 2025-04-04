import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontsPreviewComponent } from './fonts-preview/fonts-preview.component';
import { FontsSelectionComponent } from './fonts-selection/fonts-selection.component';

@Component({
  template: `
    <main
      class="p-2 flex items-start justify-center gap-1 md:flex-row flex-col"
    >
      <div class="w-full md:max-w-[250px] min-w-[220px] mx-auto">
        <app-fonts-selection
          (fontsSelected)="onFontsSelecetd($event)"
        ></app-fonts-selection>
      </div>
      <div class="grow w-full overflow-hidden">
        <app-fonts-preview
          [selectedFonts]="$selectedFonts()"
        ></app-fonts-preview>
      </div>
    </main>
  `,
  imports: [FormsModule, FontsSelectionComponent, FontsPreviewComponent],
  selector: 'app-home',
})
export class HomeComponent {
  protected readonly $selectedFonts = signal<string[]>([]);

  protected onFontsSelecetd(fonts: string[]) {
    this.$selectedFonts.set(fonts);
  }
}
