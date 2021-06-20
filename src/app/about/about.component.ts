import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  typewriter_text: string = "Thank you for your interest";
  typewriter_display: string = "";
  skills: string[] = ["Front End Developer", "Quick Learner", "Problem Solver"];

  constructor() {}

  ngOnInit(): void {
    this.typingCallback();
  }
  typingCallback() {
    let idx = 0;
    let up: boolean = true;
    let n: number = 0;
    setInterval(() => {
      let word = this.skills[idx % this.skills.length];
      let ln = word.length;

      if (up) {
        this.typewriter_display = word.slice(0, n);
        n++;
      }
      if (n === ln + 1) {
        up = false;
      }
      if (!up) {
        this.typewriter_display = word.slice(0, n);
        n = n - 2;
        if (n < 0) n = 0;
      }
      if (n == 0) {
        up = true;
        idx++;
      }
      if (idx === this.skills.length) {
        idx = 0;
      }
    }, 200);
  }
}
