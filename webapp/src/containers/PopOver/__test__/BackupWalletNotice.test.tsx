import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../app/rootStore';
import BackupWalletNotice from '../UpdateProgress/BackupWalletNotice';

describe('BackupWalletNotice', () => {
  it('should check for snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BackupWalletNotice />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
