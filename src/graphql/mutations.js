// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent(
  $name: String!
  $when: String!
  $where: String!
  $description: String!
) {
  createEvent(
    name: $name
    when: $when
    where: $where
    description: $description
  ) {
    id
    name
    where
    when
    description
    comments {
      nextToken
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id) {
    id
    name
    where
    when
    description
    comments {
      nextToken
    }
  }
}
`;
export const commentOnEvent = `mutation CommentOnEvent($eventId: ID!, $content: String!, $createdAt: String!) {
  commentOnEvent(eventId: $eventId, content: $content, createdAt: $createdAt) {
    eventId
    commentId
    content
    createdAt
  }
}
`;
export const createCampaigns = `mutation CreateCampaigns($input: CreateCampaignsInput!) {
  createCampaigns(input: $input) {
    id
    creationDate
    holdoutPercent
    isPaused
    isDraft
    lastModifiedDate
    name
    segmentId
    messageConfiguration {
      body
      fromAddress
      htmlBody
      title
    }
    schedule {
      endTime
      startTime
      frequency
      isLocalTime
    }
    state
    metrics {
      sent
      delivered
      emailsOpened
      linksClicked
      complaints
      bounces
      deliveryRate
      openRate
      bounceRate
      complainRate
    }
  }
}
`;
export const updateCampaigns = `mutation UpdateCampaigns($input: UpdateCampaignsInput!) {
  updateCampaigns(input: $input) {
    id
    creationDate
    holdoutPercent
    isPaused
    isDraft
    lastModifiedDate
    name
    segmentId
    messageConfiguration {
      body
      fromAddress
      htmlBody
      title
    }
    schedule {
      endTime
      startTime
      frequency
      isLocalTime
    }
    state
    metrics {
      sent
      delivered
      emailsOpened
      linksClicked
      complaints
      bounces
      deliveryRate
      openRate
      bounceRate
      complainRate
    }
  }
}
`;
export const deleteCampaigns = `mutation DeleteCampaigns($input: DeleteCampaignsInput!) {
  deleteCampaigns(input: $input) {
    id
    creationDate
    holdoutPercent
    isPaused
    isDraft
    lastModifiedDate
    name
    segmentId
    messageConfiguration {
      body
      fromAddress
      htmlBody
      title
    }
    schedule {
      endTime
      startTime
      frequency
      isLocalTime
    }
    state
    metrics {
      sent
      delivered
      emailsOpened
      linksClicked
      complaints
      bounces
      deliveryRate
      openRate
      bounceRate
      complainRate
    }
  }
}
`;
export const createSegment = `mutation CreateSegment($input: CreateSegmentInput!) {
  createSegment(input: $input) {
    id
    name
    type
    records
  }
}
`;
export const updateSegment = `mutation UpdateSegment($input: UpdateSegmentInput!) {
  updateSegment(input: $input) {
    id
    name
    type
    records
  }
}
`;
export const deleteSegment = `mutation DeleteSegment($input: DeleteSegmentInput!) {
  deleteSegment(input: $input) {
    id
    name
    type
    records
  }
}
`;
