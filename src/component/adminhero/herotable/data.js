import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "Mobile", uid: "mobile"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Pendding", uid: "pendding"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    mobile: "+9109090909",
    status: "active",
    age: "29",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    mobile: "+9109090949",
    status: "pendding",
    age: "25",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    mobile: "+9109044909",
    status: "active",
    age: "22",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    mobile: "+9109630909",
    status: "pendding",
    age: "28",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    mobile: "+9104350909",
    status: "active",
    age: "24",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    mobile: "+9109098709",
    status: "pendding",
    age: "29",
    email: "brian.kim@example.com",
  },
  {
    id: 7,
    name: "Michael Hunt",
    mobile: "+9109648709",
    status: "pendding",
    age: "27",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    mobile: "+9109098709",
    status: "active",
    age: "31",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    mobile: "+9109358709",
    status: "pendding",
    age: "33",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    mobile: "+9109368709",
    status: "active",
    age: "35",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    mobile: "+9175098709",
    status: "active",
    age: "22",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    mobile: "+9109093709",
    status: "pendding",
    age: "28",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    mobile: "+9100298709",
    status: "active",
    age: "37",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    mobile: "+9109298709",
    status: "active",
    age: "30",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    mobile: "+9109108709",
    status: "pendding",
    age: "31",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    mobile: "+9102698709",
    status: "pendding",
    age: "29",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    mobile: "+9100498709",
    status: "active",
    age: "28",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    mobile: "+9109298709",
    status: "active",
    age: "27",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    mobile: "+9109198709",
    status: "pendding",
    age: "32",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    mobile: "+9107198709",
    status: "active",
    age: "26",
    email: "mia.robinson@example.com",
  },
];

export {columns, users, statusOptions};
