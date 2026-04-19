import { check, sleep } from 'k6';
import http from 'k6/http';

export default function () {
    const age = 35;
    // age = 40; // This would cause an error since age is a constant
    console.log("Age: " + age);

    // Example K6 test code
    let response = http.get('https://httpbin.org/get');
    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}

