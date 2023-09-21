import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('Pipeline test', () => {
  it('Runs tests', () => {
    expect(true).toBeTruthy();
  })

  it('Runs tests #2', () => {
    expect(true).toBeFalsy();
  })

  it('Runs tests #3', () => {
    expect(1).toBe(1);
  })
})
