<#if includeUnsubscribeLink>
    This email was sent by ${communityName} because you are a registered user.
    <#if unsubscribeLink?has_content>
        You may unsubscribe instantly at ${unsubscribeLink}, or adjust email frequency in your email preferences (${instanceURL}user-preferences!input.jspa).
    <#else>
        You may unsubscribe or adjust email frequency in your email preferences (${instanceURL}user-preferences!input.jspa).
    </#if>
</#if>