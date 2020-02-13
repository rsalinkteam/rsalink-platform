                                        <#if includeUnsubscribeLink && unsubscribeLink?has_content>
                                            <p style='color: #666666; margin-top: 20px; font-size: 14px; line-height: 20px; font-family: Arial, sans-serif;'>
                                                This email was sent by ${communityName} because you are a registered user.<br>
                                                <#if unsubscribeLink?has_content>
                                                    You may <a href="${unsubscribeLink}">unsubscribe</a> instantly from ${communityName}, or adjust email frequency in your <a href="${instanceURL}user-preferences!input.jspa">email preferences</a>
                                                <#else>
                                                    You may unsubscribe from ${communityName}, or adjust email frequency in your <a href="${instanceURL}user-preferences!input.jspa">email preferences</a>
                                                </#if>
                                            </p>
                                        </#if>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>