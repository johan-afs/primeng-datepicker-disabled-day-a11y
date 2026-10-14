import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePickerModule } from "primeng/datepicker";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule, DatePickerModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  // October 2026 shown inline, with the 15th made unselectable through disabledDates.
  date = new Date(2026, 9, 1);
  disabledDates = [new Date(2026, 9, 15)];

  // The most [pt] can do today: a static attribute on every gridcell. ptm('dayCell') receives
  // no per-date context, so there is no way to set aria-disabled only on the unselectable days.
  pt = { dayCell: { "data-pt-has-date-context": "no" } };

  markup = "";

  inspect(host: HTMLElement) {
    const cells = Array.from(host.querySelectorAll("td")).filter((td) => td.querySelector("span.p-disabled"));
    this.markup = cells.length
      ? cells.slice(0, 2).map((td) => td.outerHTML).join("\n\n")
      : "no unselectable day found";
  }
}
