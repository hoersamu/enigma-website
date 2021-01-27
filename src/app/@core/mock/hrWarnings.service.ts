import { Injectable } from "@angular/core";
import { HrWarningsData } from "../data/hrWarnings";

@Injectable()
export class HrWarningsService extends HrWarningsData {
  data = [
    {
      name: "Andischa",
      missedConsecutiveEvents: 1,
      missedEvents: 2,
      comment: "It",
    },
    {
      name: "Samu | ThePuppetMaster",
      missedConsecutiveEvents: 3,
      missedEvents: 3,
      comment: "just",
    },
    {
      name: "Blaulicht",
      missedConsecutiveEvents: 5,
      missedEvents: 6,
      comment: "works",
    },
  ];

  getData() {
    return this.data;
  }
}
