import React from 'react';
import { shallow } from 'enzyme';
import { CampaignsList } from '../../src/screens';

const listCampaigns = [
  {
    id: '1',
    creationDate: '2019-02-27T11:04:45.710Z',
    holdoutPercent: null,
    isPaused: false,
    isDraft: false,
    lastModifiedDate: '2019-02-28T14:19:34.071Z',
    name: 'Soccer jerseys - v2',
    segmentId: '4c72ec70-1e75-4be1-a436-ce9a2b1618ec',
    messageConfiguration: {
      body: null,
      fromAddress: 'soccer-jersei@example.com',
      htmlBody: 'Hi, you can <a ses:tags=\'unsubscribeLinkTag:unclick;\' href=\'https://moonmail.io/\'>unsubscribe here</a>',
      title: 'Real Madrid 2019 jersey in promotion',
    },
    schedule: {
      endTime: null,
      startTime: '2019-02-22T14:53:49.843Z',
      frequency: 'ONCE',
      isLocalTime: false,
      timezone: 'UTC',
    },
    state: 'COMPLETED',
    metrics: {
      sent: 12,
      delivered: 12,
      emailsOpened: 10,
      linksClicked: 9,
      complaints: 0,
      bounces: 0,
      deliveryRate: 100,
      openRate: 90,
      bounceRate: 0,
      complainRate: 0,
    }
  }
];

describe('Testing campaigns list', () => {
  it('render expected campaigns', () => {
    const wrapper = shallow(<CampaignsList campaigns={{ loading: false, listCampaigns }} />);

    expect(wrapper.children()).toHaveLength(1);
  });
});
