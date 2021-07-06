export const fetchSubscriptions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/subscriptions',
  })
);

export const fetchSubscription = subscriptionId => (
  $.ajax({
    method: 'GET',
    url: `api/subscriptions/${subscriptionId}`
  })
);

export const createSubscription = subscription => (
  $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    data: { subscription }
  })
);

export const deleteSubscription = subscriptionId => (
  $.ajax({
    method: 'delete',
    url: `api/subscriptions/${subscriptionId}`,
  })
);
