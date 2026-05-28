import axios from "axios";

const EMPLOYEE_API_BASE_URL = "/api/v1/employees";

export const listEmployees = () =>
  axios.get(`${EMPLOYEE_API_BASE_URL}/employees`);

export const createEmployee = (employee) =>
  axios.post(`${EMPLOYEE_API_BASE_URL}/add`, employee);

export const getEmployeeById = (id) =>
  axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);

export const updateEmployee = (id, employee) =>
  axios.put(`${EMPLOYEE_API_BASE_URL}/update/${id}`, employee);

export const deleteEmployee = (id) =>
  axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${id}`);