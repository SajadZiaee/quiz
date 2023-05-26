//2

function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

console.log("Start");

delay()
    .then(() => {
        console.log("First Promise Resolved");
        return delay(1000);
    })
    .then(() => {
        console.log("Second Promise Resolved");
        return delay(1000);
    })
    .then(() => {
        console.log("Third Promise Resolved");
        console.log("End");
    });