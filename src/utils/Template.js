const subscriptionPlans = [{
        name: "Free Plan",
        price: "$0 /month",
        features: [
            "Generate up to 10,000 words per month",
            "Access to basic content generation (blog posts, articles, social media content)",
            "5 AI-generated image credits per month",
            "Grammar correction and plagiarism checking",
            "Email support"
        ],
        idealFor: "Individuals or small businesses"
    },
    {
        name: "Pro Plan",
        price: "$29.99/month",
        features: [
            "Generate up to 50,000 words per month",
            "Access to advanced content generation (SEO-optimized content, summarization, rephrasing)",
            "20 AI-generated image credits per month",
            "Access to content templates for different industries",
            "Priority email support"
        ],
        idealFor: "Content creators or medium-sized businesses"
    },
    {
        name: "Enterprise Plan",
        price: "$99.99/month",
        features: [
            "Unlimited word generation",
            "Access to all features (grammar correction, plagiarism check, summarization, rephrasing, SEO content optimization)",
            "Unlimited AI-generated images",
            "Team collaboration with up to 5 user accounts",
            "Dedicated account manager and 24/7 priority support"
        ],
        idealFor: "Agencies and large businesses"
    }
];

export default subscriptionPlans;