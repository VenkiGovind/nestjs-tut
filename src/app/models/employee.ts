export interface Employee {
  empId: number;
  empName: string;
  empEmail: string
}

//Dummy employee data
export const empData: Employee[] = [
  {
    empId: 1,
    empName: "Venki Govindaiah",
    empEmail: "vg@gmail.com"
  },
  {
    empId: 2,
    empName: "Iron Man",
    empEmail: "ir@gmail.com"
  },
  {
    empId: 3,
    empName: "John Doe",
    empEmail: "jd@gmail.com"
  }
];