import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result = "";

  onFileSelected(event: any) {
    let fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0]);
    fileReader.onload = (e) => {
      let employees = this.getEmployeeDatas(fileReader);
      this.result = this.calculateLongestOverlap(employees);
    }
  }

  getEmployeeDatas(fileReader: FileReader) {
    let employeeDatas: Array<EmployeeData> = new Array<EmployeeData>;
    for (const line of (<string>fileReader.result).split(/[\r\n]+/)) {
      let employeeData = new EmployeeData();
      let data = line.replace(/\s/g, "").split(",");
      employeeData.setEmployeeId = data[0];
      employeeData.setProjectId = data[1];
      employeeData.setDateFrom = data[2];
      if (data[3] == "NULL") {
        var today = new Date();
        let dd = String(today.getDate()).padStart(2, '0').toString();
        let mm = String(today.getMonth() + 1).padStart(2, '0').toString();
        let yyyy = today.getFullYear().toString();
        let currentDate = yyyy + "-" + mm + "-" + dd;
        employeeData.setDateTo = currentDate;
      } else {
        employeeData.setDateTo = data[3];
      }
      employeeDatas.push(employeeData);
    }
    return employeeDatas;
  }

  calculateLongestOverlap(employeeDatas: Array<EmployeeData>) {
    let projectList: Array<string> = new Array<string>;
    let employees;
    let difference = 0;
    let difference_temp = 0;
    let firstDateFrom;
    let firstDateTo;
    let secondtDateFrom;
    let secondDateTo;
    let startDate;
    let finishDate;
    let employee1;
    let employee2;
    let projectId;
    for (let i = 0; i < employeeDatas.length; i++) {
      if (!projectList.includes(employeeDatas[i].getProjectId)) {
        projectList.push(employeeDatas[i].getProjectId)
        employees = employeeDatas.filter((obj) => {
          return obj.getProjectId === employeeDatas[i].getProjectId;
        })
      } else {
        continue;
      }
      for (let j = 0; j < employees.length; j++) {
        for (let k = 0; k < employees.length; k++) {
          if (j != k) {
            firstDateFrom = new Date(employees[j].getDateFrom);
            firstDateTo = new Date(employees[j].getDateTo);
            secondtDateFrom = new Date(employees[k].getDateFrom);
            secondDateTo = new Date(employees[k].getDateTo);
            if ((firstDateFrom < secondDateTo) && (secondtDateFrom < firstDateTo)) {
              if (firstDateFrom < secondtDateFrom) {
                startDate = secondtDateFrom;
              } else {
                startDate = firstDateFrom;
              }
              if (firstDateTo < secondDateTo) {
                finishDate = firstDateTo;
              } else {
                finishDate = secondDateTo;
              }
              difference_temp = (finishDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);
              if (difference_temp > difference) {
                difference = difference_temp;
                employee1 = employees[j].getEmployeeId;
                employee2 = employees[k].getEmployeeId;
                projectId = employees[j].getProjectId;
              }
            }
          }
        }
      }
    }
    return (employee1 + "," + employee2 + "," + projectId + "," + difference);
  }
}

class EmployeeData {

  private employeeId: string;

  private projectId: string;

  private dateFrom: string;

  private dateTo: string;

  constructor() {

  }

  public get getEmployeeId() {
    return this.employeeId;
  }

  public set setEmployeeId(employeeId: string) {
    this.employeeId = employeeId;
  }

  get getProjectId() {
    return this.projectId;
  }

  set setProjectId(projectId: string) {
    this.projectId = projectId;
  }

  get getDateFrom() {
    return this.dateFrom;
  }

  set setDateFrom(dateFrom: string) {
    this.dateFrom = dateFrom;
  }

  get getDateTo() {
    return this.dateTo;
  }

  set setDateTo(dateTo: string) {
    this.dateTo = dateTo;
  }

}
