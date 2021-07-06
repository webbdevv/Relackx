@subscriptions.each do |subscription|
    json.set! subscription.id do
        json.partial! 'subscription', subscription: subscription
    end
end