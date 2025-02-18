import dayjs from "dayjs";

export enum AppRoute {
  Main = "/",
  Form = "/form",
}

export function formatDate(date: string) {
  return dayjs(date).format("DD.MM.YYYY");
}
