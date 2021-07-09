import HomeHandler from "../handlers/homeHandler.js";
import AboutHandler from '../handlers/aboutHandler.js';
import NotFoundHandler from '../handlers/notFoundHandler.js';
import ServerErrorHandler from '../handlers/serverErrorHandler.js';

test('Home Page Renders', () => {
    // Generate request, response objects.
    const req = {};
    const res = { render: jest.fn() }; // Test 범용 모형 함수

    HomeHandler.go(req, res);   // Call test code
    // Assertions
    expect(res.render.mock.calls.length).toBe(1);   // Check whether upper code line is called once.
    expect(res.render.mock.calls[0][0]).toBe('home');   // Front [0] is first call situation, and rear [0] is the first parameter from the situation.
});

test('About Page Renders with Fortune', () => {
    // Generate request, response objects.
    const req = {};
    const res = { render: jest.fn() }; // Test 범용 모형 함수

    AboutHandler.go(req, res);   // Call test code
    // Assertions
    expect(res.render.mock.calls.length).toBe(1);   // Check whether upper code line is called once.
    expect(res.render.mock.calls[0][0]).toBe('about');   // Front [0] is first call situation, and rear [0] is the first parameter from the situation.
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\W/),
    }));
});

test('404 Page Renders', () => {
    // Generate request, response objects.
    const req = {};
    const res = { render: jest.fn() }; // Test 범용 모형 함수

    NotFoundHandler.go(req, res);   // Call test code
    // Assertions
    expect(res.render.mock.calls.length).toBe(1);   // Check whether upper code line is called once.
    expect(res.render.mock.calls[0][0]).toBe('404');   // Front [0] is first call situation, and rear [0] is the first parameter from the situation.
});

test('500 Page Renders', () => {
    // Generate error, request, response, next objects.
    const error = new Error('some error');
    const req = {};
    const res = { render: jest.fn() }; // Test 범용 모형 함수
    const next = jest.fn();

    ServerErrorHandler.go(err, req, res, next);   // Call test code
    // Assertions
    expect(res.render.mock.calls.length).toBe(1);   // Check whether upper code line is called once.
    expect(res.render.mock.calls[0][0]).toBe('500');   // Front [0] is first call situation, and rear [0] is the first parameter from the situation.
});