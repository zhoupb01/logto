import { ConnectorType } from '@logto/connector-kit';

import { shouldShowEmailConnectorUpsellBanner } from './utils';

describe('shouldShowEmailConnectorUpsellBanner', () => {
  test('returns false for OSS email connectors', () => {
    expect(
      shouldShowEmailConnectorUpsellBanner({
        type: ConnectorType.Email,
        isCloud: false,
      })
    ).toBe(false);
  });

  test('returns false for cloud or non-email cases', () => {
    expect(
      shouldShowEmailConnectorUpsellBanner({
        type: ConnectorType.Email,
        isCloud: true,
      })
    ).toBe(false);
    expect(
      shouldShowEmailConnectorUpsellBanner({
        type: ConnectorType.Sms,
        isCloud: false,
      })
    ).toBe(false);
  });
});
