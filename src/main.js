import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/apiscript.js';

function getRateJPY(response) {
  let answer = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD is ${response.conversion_rates.JPY * answer} YEN.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateMXN(response) {
  let answer = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD is ${response.conversion_rates.MXN * answer} PESO's.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateEUR(response) {
  let answer = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USDis ${response.conversion_rates.EUR * answer} EURO's.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateCAD(response) {
  let answer = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD is ${response.conversion_rates.CAD *answer} Canadian Dollars.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateAUD(response) {
  let answer = parseFloat($("#userDollar").val());
  if (response.conversion_rates){
    $(".output").html(`The exchange rate from USD is ${response.conversion_rates.AUD * answer} Australian dollars.`);
  } else {
    $(".outputError").html(`api error currency not avail: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  } 
}

async function apiRateJPY() {
  const response = await CurrencyConverter.getUSD();
  getRateJPY(response);
}
async function apiRateMXN() {
  const response = await CurrencyConverter.getUSD();
  getRateMXN(response);
}
async function apiRateEUR() {
  const response = await CurrencyConverter.getUSD();
  getRateEUR(response);
}
async function apiRateCAD() {
  const response = await CurrencyConverter.getUSD();
  getRateCAD(response);
}
async function apiRateAUD() {
  const response = await CurrencyConverter.getUSD();
  getRateAUD(response);
}


$(document).ready(function () {
  $("#exchange").click(function () {
    event.preventDefault();

    let userInput = parseFloat($("#userDollar").val());
    $(".output").html(userInput);

    $("#convert-button1").click(function () {
      event.preventDefault();
      apiRateJPY();
    });
    $("#convert-button2").click(function () {
      event.preventDefault();
      apiRateMXN();
    });
    $("#convert-button3").click(function () {
      event.preventDefault();
      apiRateEUR();
    });
    $("#convert-button4").click(function () {
      event.preventDefault();
      apiRateCAD();
    });
    $("#convert-button5").click(function () {
      event.preventDefault();
      apiRateAUD();
    });
    
  });
});