# BDD_testing_for_heaven_met

## Prerequisites

Before you can run the tests, make sure you have the following installed:

- Node.js (Recommended version: 14.x or higher)
- npm (Comes with Node.js)
- Google Chrome (or any other supported browser for Selenium WebDriver)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/chf-NewStart/BDD_testing_for_heaven_met.git
cd BDD_testing_for_heaven_met
```

Install the required npm packages:

```bash
npm install
```
Make sure you have the correct version of ChromeDriver that matches your Chrome browser's version. You can check your Chrome version by navigating to `chrome://version/` in your browser.


Install chromedriver as a development dependency:

```bash
npm install --save-dev chromedriver
```

Update your `package.json`` to include a script to install chromedriver:

```bash
"scripts": {
  "install-driver": "chromedriver --versions.chrome=<Your Chrome Version>"
}
```

You can check if the driver is correctly installed by

```bash
npm run install-driver
``` 
(you should see a blank chrome page popped out)

## Running

npx cucumber-js
This will execute all the `.feature` files in the `features` directory with their corresponding `step definitions`.



