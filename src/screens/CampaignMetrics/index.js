import React from 'react';
// redux
import { connect } from 'react-redux';
// ui
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
import {
  MainView,
  CardBodyContent,
  BodyTitle,
  BodyMetric
} from './styles';

const { Header, Body } = Card;

const CampaignMetrics = (props) => {
  const { selected } = props;
  const { metrics } = selected;
  return (
    <MainView>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Header
            title="Delivery count metrics"
          />
          <Body>
            <CardBodyContent>
              <BodyTitle>Messages sent</BodyTitle>
              <BodyMetric>{metrics.sent}</BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Messages delivered:</BodyTitle>
              <BodyMetric>{metrics.delivered}</BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Emails opened</BodyTitle>
              <BodyMetric>{metrics.emailsOpened}</BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Links clicked</BodyTitle>
              <BodyMetric>{metrics.linksClicked}</BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Complaints</BodyTitle>
              <BodyMetric secondary>{metrics.complaints}</BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Bounces</BodyTitle>
              <BodyMetric secondary>{metrics.bounces}</BodyMetric>
            </CardBodyContent>
          </Body>
        </Card>

        <WhiteSpace size="lg" />
        <Card>
          <Header
            title="Delivery rate metrics"
          />
          <Body>
            <CardBodyContent>
              <BodyTitle>Delivery rate</BodyTitle>
              <BodyMetric>
                {metrics.sent.toFixed(1)}
                %
              </BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Email open rate</BodyTitle>
              <BodyMetric>
                {metrics.openRate.toFixed(1)}
                %
              </BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Bounce rate</BodyTitle>
              <BodyMetric secondary>
                {metrics.bounceRate.toFixed(1)}
                %
              </BodyMetric>
              <WhiteSpace size="sm" />
              <BodyTitle>Complaint rate</BodyTitle>
              <BodyMetric secondary>
                {metrics.complainRate.toFixed(1)}
                %
              </BodyMetric>
            </CardBodyContent>
          </Body>
        </Card>
      </WingBlank>
    </MainView>
  );
};


CampaignMetrics.navigationOptions = () => ({
  title: 'Campaign Metrics'
});

const mapStateToProps = store => ({
  selected: store.campaignState.selected
});


const Connected = connect(mapStateToProps, null)(CampaignMetrics);
export { Connected as CampaignMetrics };
