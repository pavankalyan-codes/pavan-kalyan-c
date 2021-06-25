import { Component, OnInit } from "@angular/core";
import { Project } from "./project";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit(): void {
    this.projects = [
      {
        title: "Kanban board",
        description:
          "Kanban board is sinlge page web application developed using Angular. We can manage day to day life tasks using this board. Create cards for different tasks and move card from one status to another status and the card data will persist on user revisit. Data will be stored in user local storage.",
        codeLink: "https://github.com/pavankalyan-codes/Kanban-board",
        liveLink: "https://kanban-board5.netlify.app/",
      },
      {
        title: "Vent out",
        description:
          "Venout is single page web application developed using Angular, Socket.io , MongoDB & Node js. This applciations generate dynamic links which we can share with our community and get secret messages from them. It uses sockets to display the live data. So, we dont need to refresh the page for new messages",
        codeLink: "https://github.com/pavankalyan-codes/",
        liveLink: "https://ventoutnow.herokuapp.com",
      },
    ];
  }

  openUrl(url) {
    window.open(url);
  }
}
