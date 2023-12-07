const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Rudderstack",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Nithin",
        platform: {
            name: "Mac",
            version: "OS",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "POC" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});