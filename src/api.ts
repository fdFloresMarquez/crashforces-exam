import type { Report } from "./types/report";

import report from "@/data/report.json";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  fetchReport: async (): Promise<Report> => {
    // Simulate a delay in fetching the report
    await sleep(1000);

    // Return the report
    return report;
  },
};

export default api;
