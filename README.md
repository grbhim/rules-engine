# Calculate car loan repayments (rules-engine)

A simple rules engine that allows processing of lender rules for car loans to calculate loan repayments from different lenders

## Install the dependencies
```bash
yarn
# or
npm install
```

## Create a project
```bash
npm init quasar
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

### Solutions
1. Dynamic components has been used in the IndexPage.vue to load the components dynamically depending on the menu item selected. The default component to load will be the LoanApplication.vue.
2. LoanApplication component is responsible for collecting the input from the user about the loan details. Once user submit the loan details, repaymentCalculator.js will be called to get the loan repayment using the pmt repository provided.
3. The result will be shown to the user using the LoanOptions.vue component. It is solely responsible for displaying the repayments for each of the lenders.

### Time spent
Total time spent was in between 3 and half hours-4 hours

### Assumes made
1. There are 2 default lenders which are predefined in the LocalStorageService constant in local-storage.js file. It cannot be edited and deleted.

### Proud moment
I have enjoyed every aspect of the task and there is not any specific one but able to use the localstorage service was the fun part as I have done so first time for this technical challenge.

### Improvements
Yes, there are a lot of improvements I would have done if time was not a barrier, like:
1. Implementing the validations to the input fields.
2. Ability to edit and delete the lenders.
3. Improvement in the UI when the lenders are greater than 2! Currently, it's not proper.
