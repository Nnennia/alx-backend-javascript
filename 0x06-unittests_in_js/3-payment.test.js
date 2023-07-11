/* eslint-disable jest/no-hooks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const Utilspy = sinon.spy(Utils, 'calculateNumber');

  it('use the calculateNumber method of Utils', () => {
    // now spy on the method calculateNumber of class Utils
    sendPaymentRequestToApi(100, 20);
    expect(Utilspy.called).to.be.true;
    Utilspy.restore();
  });
  it('arguments passed', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utilspy.calledWith('SUM', 100, 20)).to.be.true;
    expect(Utilspy.callCount).to.be.equal(1);
    Utilspy.restore();
  });

  it('multiple calls', () => {
    sendPaymentRequestToApi(100, 20);
    // sendPaymentRequestToApi(10, 25);
    expect(Utilspy.callCount).to.be.equal(1);
    Utilspy.restore();
  });
});