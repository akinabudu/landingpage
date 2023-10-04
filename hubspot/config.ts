import * as hubspot from '@hubspot/api-client'
export const hubspotClient = new hubspot.Client({ accessToken: process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN });