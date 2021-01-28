import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { EventListData, EventListEntry } from "../../../@core/data/event-list";
import { EventListIconComponent } from "./event-list-icon.component";

export const EVENT_LIST_COMPONENTS = [EventListIconComponent];

@Component({
  selector: "event-list",
  styleUrls: ["./event-list.component.scss"],
  templateUrl: "./event-list.component.html",
})
export class EventListComponent {
  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      icon: {
        title: "",
        type: "custom",
        renderComponent: EventListIconComponent,
      },
      name: {
        title: "Name",
      },
      datum: {
        title: "Datum",
        sortDirection: "desc",
      },
      anmeldefrist: {
        title: "Anmeldefrist",
      },
      players: {
        title: "Spieler",
      },
      beschreibung: {
        title: "Beschreibung",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: EventListData, private router: Router) {
    this.service
      .getData()
      .subscribe((data: EventListEntry[]) => this.setData(data));
  }

  private setData(data: EventListEntry[]) {
    data = data.map((entry) => {
      entry["players"] = `${entry.teilnehmer}/${entry.spielerzahl}`;
      entry["icon"] = entry.closed
        ? "slash-outline"
        : entry.locked
        ? "lock-outline"
        : "";

      return entry;
    });
    this.source.load(data);
  }

  selectEvent(event: { data: { id: number } }) {
    this.router.navigate(["events", event.data.id]);
  }

  onSearch(query: string = "") {
    if (query === "") {
      this.source.setFilter([]);
      return;
    }
    this.source.setFilter(
      [
        // fields we want to include in the search
        {
          field: "name",
          search: query,
        },
        {
          field: "beschreibung",
          search: query,
        },
      ],
      false
    );
  }
}