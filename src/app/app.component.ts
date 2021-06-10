import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  colors: string[] = [];
  typewriter_text: string = "Thank you for your interest";
  typewriter_display: string = "";
  skills: string[] = ["Front End Developer", "Quick Learner", "Problem Solver"];
  ngOnInit() {
    this.colors.push(this.getRandomGradient());
    this.typingCallback();
  }
  title = "portfolio";

  randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  randomAngle() {
    return Math.floor(Math.random() * 360) + "deg";
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

  getRandomGradient() {
    return (
      "linear-gradient(" +
      this.randomAngle() +
      "," +
      this.randomColor() +
      "," +
      this.randomColor() +
      ")"
    );
  }
}
