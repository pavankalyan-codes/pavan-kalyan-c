import { Component, OnInit } from "@angular/core";
import { Experience } from "./experience";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  experienceDetails: Experience[];
  constructor() {
    this.experienceDetails = [
      {
        companyLogo:
          "https://www.tcs.com/content/dam/tcs/images/Newtcslogo/Logo-Blue1x.png",
        logoHref: "https://www.tcs.com/",
        companyName: "TCS",
        role: "Front End Web Developer",
        accomplishments: [
          "Worked on various UI designs in multiple web applications",
          "Implemented Web Accessibility for the existing web app",
          "Actively Collaborated with Backend devs, QA team while working on feature development",
        ],
        duration: "Sept 2020- Present | Banglore, India",
      },
      {
        companyLogo: "https://www.lifeofgirl.org/assets/images/logo_black1.png",
        logoHref: "https://www.lifeofgirl.org/",
        companyName: "Life Of Girl",
        role: "Android Developer",
        accomplishments: [
          "Developed an android applcation for women safety",
          "Extensively worked on Google maps and google places",
          "Used Google material design components for UI",
          "Used firebase Database & firebase cloud messaging",
        ],
        duration: "Jan 2019- May 2019 | Hyderabad, India",
      },
    ];
  }

  goToLink(url: string) {
    window.open(url);
  }

  ngOnInit(): void {}
}
