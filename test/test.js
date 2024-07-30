const request = require('supertest');
const express = require('express');
const app = require('../index');

// Define la ruta /add aquí
/*app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) + parseFloat(b);
  res.send(`Resultado: ${result}`);
});*/

describe('GET /add', () => {
  it('should return the sum of two numbers', (done) => {
    request(app)
      .get('/add')
      .query({ a: 5, b: 3 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 8', done);
  });

  it('should handle floating point numbers', (done) => {
    request(app)
      .get('/add')
      .query({ a: 5.5, b: 3.2 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 8.7', done);
  });

  it('should handle missing query parameters', (done) => {
    request(app)
      .get('/add')
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: NaN', done); // Cambia esto si deseas manejar errores de manera diferente
  });
});
describe('GET /subtract', () => {
  it('should return the sum of two numbers', (done) => {
    request(app)
      .get('/subtract')
      .query({ a: 5, b: 3 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 2', done);
  });
  it('should handle floating point numbers', (done) => {
    request(app)
      .get('/subtract')
      .query({ a: 5.5, b: 3.5 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 2', done);
  });
  it('should handle floating point numbers', (done) => {
    request(app)
      .get('/subtract')
      .query({ a: 15, b: 8 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 7', done);
  });
});
describe('GET /multiply', () => {
  it('should return the sum of two numbers', (done) => {
    request(app)
      .get('/multiply')
      .query({ a: 5, b: 3 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 15', done);
  });

  it('should handle floating point numbers', (done) => {
    request(app)
      .get('/multiply')
      .query({ a: 3, b: 3 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 9', done);
  });
  it('should handle floating point numbers', (done) => {
    request(app)
      .get('/multiply')
      .query({ a: 4, b: 5 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 20', done);
  });
  it('should handle floating point numbers', (done) => {
    request(app)
      .get('/multiply')
      .query({ a: 7, b: 3 })
      .expect('Content-Type', /text/)
      .expect(200)
      .expect('Resultado: 21', done);
  });
});