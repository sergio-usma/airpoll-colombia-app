import detailsReducer, { getCityDetail } from '../redux/getCitiesSlice';

describe('detailsSlice reducer', () => {
  it('loading should be true when getCityDetail is pending', () => {
    const payload = [{ name: 'Leticia' }, { name: 'Arauca' }];
    const newState = detailsReducer({}, getCityDetail.pending(payload));
    expect(newState.isLoading).toBe(true);
  });
  it('should update states after getCityDetail is fufilled', () => {
    const payload = [{ name: 'Leticia' }, { name: 'Arauca' }];
    const newState = detailsReducer({}, getCityDetail.fulfilled(payload));
    expect(newState.isLoading).toBe(false);
    expect(newState.details).toEqual(payload);
  });
});
