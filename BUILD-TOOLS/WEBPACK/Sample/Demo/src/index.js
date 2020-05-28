import { run } from './app/app';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
import './main2.scss';
import "./main.css";

const alertService = new AlertService();
const componentService = new ComponentService();

console.log('executing the index.js....');
run(alertService, componentService);