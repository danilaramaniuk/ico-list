import { put, call } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { getMockedContributions } from '~/__tests__/helpers';
import ContributionModel from '~/common/models/contribution';
import { fetchContributionsHandler } from '../saga';
import { setItems, setRange, setValue } from '../actions';

const contributions = getMockedContributions();

describe('Fetch contributions data flow', () => {
  const it = sagaHelper(fetchContributionsHandler());

  it('call the mock API first', (result) => {
    expect(result).toEqual(call(ContributionModel.getContributions));
    return { data: { contributions } };
  });

  it('set range for slider', (result) => {
    expect(result).toEqual(put(setRange({ min: 1822819, max: 8288838 })));
  });

  it('set value for slider', (result) => {
    expect(result).toEqual(put(setValue({ min: 1822819, max: 8288838 })));
  });

  it('and then set items', (result) => {
    expect(result).toEqual(put(setItems(contributions)));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});
