export const stringFilter = {
  filter: "agTextColumnFilter",
  filterParams: {
    filterOptions: ["contains", "notContains"],
    textFormatter: (r: string) => {
      if (!r) return null;
      return r.toLowerCase();
    },
    debounceMs: 200,
    maxNumConditions: 1,
  },
};

export const numberFilter = {
  filter: "agNumberColumnFilter",
  filterParams: {
    allowedCharPattern: "\\d\\.",
    numberParser: (text: string) => {
      return text ? text : null;
    },
  },
};

export const dateFilter = {
  valueFormatter: ({ value }: { value: string }) => {
    if (!value) return "";
    const date = new Date(value);

    let day = date.getDate().toString();

    let month = (date.getMonth() + 1).toString();
    const year = date.getFullYear();
    if (Number(day) < 10) {
      day = `0${day}`;
    }

    if (Number(month) < 10) {
      month = `0${month}`;
    }
    return `${day}/${month}/${year}`;
  },
  filter: "agDateColumnFilter",
  filterParams: {
    comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
      if (!cellValue) return -1;
      const cellDate = new Date(cellValue);
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
  },
};
export const yAndNFormatter = ({ value }: { value: string }): string => {
  const upperdValue = (value ?? "").toUpperCase();
  if (!upperdValue || !["Y", "N"].includes(upperdValue)) return "";
  return upperdValue === "Y" ? "Yes" : "No";
};
