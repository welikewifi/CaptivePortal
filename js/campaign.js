//right-side.js variables
var right_side = {
    user_mac : "$(mac-esc)",
    campaignID: '{{campaignID}}',
    link_origin : "$(link-orig-esc)",
    link_login_only : "$(link-login-only)",
    params : 'username=T-' + this.user_mac + '&dst=' + this.link_origin,
    campaign_link1: '{{url1}}',
    campaign_link2: '{{url2}}',
    campaign_link3: '[[url3]]'
};