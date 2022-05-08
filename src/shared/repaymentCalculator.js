import {LocalStorageService} from "src/services/local-storage";

let pmt = require('formula-pmt');

function monthlyPayment(loanTermYears, loanAmount) {
  let rules = LocalStorageService.restore();
  let repaymentByLenders = [];

  for (const lender in rules) {
    if ( lender === 'lenderA' )
      repaymentByLenders.push(`${(pmt(rules[lender].interest_rate / 12, loanTermYears.value.year * 12, loanAmount.value)-rules[lender].monthly_fee) * addAdditionalFee(lender, rules, loanTermYears)}`);

    if ( lender === 'lenderB' )
      repaymentByLenders.push(`${(pmt(rules[lender].interest_rate / 12, loanTermYears.value.year * 12, loanAmount.value) * addAdditionalFee(lender, rules, loanTermYears))-rules[lender].monthly_fee}`);

  }

  return repaymentByLenders;
}

function addAdditionalFee(lender, rules, loanTermYears) {
  return (1+(rules[lender].broker_fee/(loanTermYears.value.year * 12)));
}

export const RepaymentCalculator = {
  monthlyPayment
};
